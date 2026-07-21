import type { APIRoute } from "astro";

// This route is rendered on-demand as a Cloudflare Pages Function
// (the rest of the site remains fully static — see astro.config.mjs).
export const prerender = false;

const MAX_ATTACHMENT_BYTES = 8 * 1024 * 1024;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

export const POST: APIRoute = async ({ request }) => {
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
  const service = sanitize(form.get("service"), 60);
  const message = sanitize(form.get("message"), 2000);
  const consent = form.get("consent");
  const attachment = form.get("attachment");

  if (name.length < 2 || !EMAIL_PATTERN.test(email) || message.length < 10 || !consent) {
    return json({ success: false, message: "Completa los campos obligatorios correctamente." }, 422);
  }

  if (attachment instanceof File && attachment.size > MAX_ATTACHMENT_BYTES) {
    return json({ success: false, message: "El archivo adjunto supera el máximo de 8 MB." }, 422);
  }

  // ---------------------------------------------------------------------
  // TODO: conectar con Resend (o SMTP) para el envío real del correo.
  //
  //   import { Resend } from "resend";
  //   const resend = new Resend(import.meta.env.RESEND_API_KEY);
  //   await resend.emails.send({
  //     from: "Elemental Pro <contacto@elementalpro.cl>",
  //     to: "ventas@elementalpro.cl",
  //     replyTo: email,
  //     subject: `Nueva solicitud de cotización — ${service || "General"}`,
  //     text: `Nombre: ${name}\nEmpresa: ${company}\nEmail: ${email}\n` +
  //           `Teléfono: ${phone}\nCiudad: ${city}\nServicio: ${service}\n\n${message}`,
  //     attachments: attachment instanceof File
  //       ? [{ filename: attachment.name, content: Buffer.from(await attachment.arrayBuffer()) }]
  //       : undefined,
  //   });
  //
  // Configura RESEND_API_KEY como variable de entorno / secreto en
  // Cloudflare Pages (Settings -> Environment variables) antes de activar
  // el bloque anterior. Mientras tanto, la solicitud queda validada y
  // registrada para integrarse con el proveedor de correo que se defina.
  // ---------------------------------------------------------------------

  console.log("[contact] nueva solicitud", { name, email, company, phone, city, service });

  return json({
    success: true,
    message: "Solicitud recibida correctamente.",
  });
};
