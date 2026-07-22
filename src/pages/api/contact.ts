import type { APIRoute } from "astro";
import { Resend } from "resend";
import { getServiceBySlug } from "@/data/services";

// This route is rendered on-demand as a Cloudflare Pages Function
// (the rest of the site remains fully static — see astro.config.mjs).
export const prerender = false;

const MAX_ATTACHMENT_BYTES = 8 * 1024 * 1024;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const FROM_ADDRESS = "Elemental Pro <contacto@elementalpro.cl>";
const TO_ADDRESS = "contacto@elementalpro.cl";

function json(body: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

// Strips ASCII control characters (defends against header/log injection)
// while leaving normal punctuation, accents and spaces untouched. Written
// as a code-point filter rather than a control-char regex escape.
function sanitize(value: FormDataEntryValue | null, maxLength: number): string {
  const raw = String(value ?? "");
  let clean = "";
  for (const char of raw) {
    const code = char.codePointAt(0) ?? 0;
    const isControl = code < 32 || code === 127;
    if (!isControl) clean += char;
  }
  return clean.trim().slice(0, maxLength);
}

export const POST: APIRoute = async ({ request, locals }) => {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return json({ success: false, message: "Solicitud inválida." }, 400);
  }

  const name = sanitize(form.get("name"), 120);
  const email = sanitize(form.get("email"), 160);
  const company = sanitize(form.get("company"), 120);
  const phone = sanitize(form.get("phone"), 30);
  const city = sanitize(form.get("city"), 80);
  const serviceSlug = sanitize(form.get("service"), 60);
  const message = sanitize(form.get("message"), 2000);
  const consent = form.get("consent");
  const attachment = form.get("attachment");

  if (name.length < 2 || !EMAIL_PATTERN.test(email) || message.length < 10 || !consent) {
    return json({ success: false, message: "Completa los campos obligatorios correctamente." }, 422);
  }

  if (attachment instanceof File && attachment.size > MAX_ATTACHMENT_BYTES) {
    return json({ success: false, message: "El archivo adjunto supera el máximo de 8 MB." }, 422);
  }

  const serviceName = getServiceBySlug(serviceSlug)?.name ?? (serviceSlug || "No especificado");

  const apiKey = locals.runtime?.env?.RESEND_API_KEY ?? import.meta.env.RESEND_API_KEY;

  if (!apiKey) {
    // No API key configured yet (e.g. local dev without .env, or Cloudflare
    // env var not set up) — keep the form working, just skip the send.
    console.log("[contact] RESEND_API_KEY no configurado; solicitud solo registrada", {
      name,
      email,
      company,
      phone,
      city,
      serviceName,
    });
    return json({ success: true, message: "Solicitud recibida correctamente." });
  }

  try {
    const resend = new Resend(apiKey);

    const attachments =
      attachment instanceof File && attachment.size > 0
        ? [
            {
              filename: attachment.name,
              content: Buffer.from(await attachment.arrayBuffer()),
            },
          ]
        : undefined;

    const { error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: TO_ADDRESS,
      replyTo: email,
      subject: `Nueva solicitud de cotización — ${serviceName}`,
      text: [
        `Nombre: ${name}`,
        `Empresa: ${company || "-"}`,
        `Email: ${email}`,
        `Teléfono: ${phone || "-"}`,
        `Ciudad: ${city || "-"}`,
        `Servicio: ${serviceName}`,
        "",
        message,
      ].join("\n"),
      attachments,
    });

    if (error) {
      console.error("[contact] Resend devolvió un error", error);
      return json(
        { success: false, message: "No pudimos enviar tu solicitud. Intenta nuevamente o escríbenos por WhatsApp." },
        502
      );
    }
  } catch (err) {
    console.error("[contact] error inesperado enviando el correo", err);
    return json(
      { success: false, message: "No pudimos enviar tu solicitud. Intenta nuevamente o escríbenos por WhatsApp." },
      502
    );
  }

  return json({
    success: true,
    message: "Solicitud recibida correctamente.",
  });
};
