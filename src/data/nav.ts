import type { NavLink } from "@/types";
import { services } from "@/data/services";

export const primaryNav: NavLink[] = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  {
    label: "Servicios",
    href: "/servicios",
    children: services.map((s) => ({ label: s.shortName, href: `/servicios/${s.slug}` })),
  },
  // Proyectos, Clientes y Blog: deshabilitados temporalmente hasta tener
  // contenido real (ver src/pages/_proyectos, _clientes.astro, _blog).
  { label: "Preguntas Frecuentes", href: "/preguntas-frecuentes" },
];

export const footerServiceLinks: NavLink[] = services.map((s) => ({
  label: s.shortName,
  href: `/servicios/${s.slug}`,
}));

export const footerCompanyLinks: NavLink[] = [
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
];

export const footerLegalLinks: NavLink[] = [
  { label: "Política de Privacidad", href: "/politica-privacidad" },
  { label: "Términos y Condiciones", href: "/terminos" },
];
