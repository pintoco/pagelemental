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
  { label: "Proyectos", href: "/proyectos" },
  { label: "Clientes", href: "/clientes" },
  { label: "Blog", href: "/blog" },
  { label: "Preguntas Frecuentes", href: "/preguntas-frecuentes" },
];

export const footerServiceLinks: NavLink[] = services.map((s) => ({
  label: s.shortName,
  href: `/servicios/${s.slug}`,
}));

export const footerCompanyLinks: NavLink[] = [
  { label: "Nosotros", href: "/nosotros" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Clientes", href: "/clientes" },
  { label: "Blog", href: "/blog" },
  { label: "Contacto", href: "/contacto" },
];

export const footerLegalLinks: NavLink[] = [
  { label: "Política de Privacidad", href: "/politica-privacidad" },
  { label: "Términos y Condiciones", href: "/terminos" },
];
