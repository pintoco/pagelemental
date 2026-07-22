import type { Partner, Stat, Testimonial } from "@/types";

export const stats: Stat[] = [
  { value: "100+", label: "Proyectos entregados" },
  { value: "9", label: "Años de trayectoria" },
  { value: "40+", label: "Clientes corporativos activos" },
  { value: "99.9%", label: "Disponibilidad en contratos SLA" },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Elemental Pro rediseñó nuestra red y sistema de videovigilancia en tres plantas sin detener la operación. El nivel de planificación fue notable.",
    author: "Marcela Ibáñez",
    role: "Gerenta de Operaciones",
    company: "Grupo Industrial Andes",
  },
  {
    quote:
      "Llevamos cuatro años con su contrato de mantención. La mesa de ayuda responde rápido y los reportes mensuales nos dan visibilidad real.",
    author: "Rodrigo Fuenzalida",
    role: "Jefe de Infraestructura TI",
    company: "Municipalidad de Peñalolén",
  },
  {
    quote:
      "La migración de nuestro data center a un esquema híbrido con cloud se hizo por etapas y sin sorpresas. Cumplieron cada plazo comprometido.",
    author: "Daniela Contreras",
    role: "CTO",
    company: "Retail Sur SPA",
  },
];

export const partners: Partner[] = [
  { name: "Cisco", logo: "cisco" },
  { name: "Axis Communications", logo: "axis" },
  { name: "Ubiquiti", logo: "ubiquiti" },
  { name: "Hikvision", logo: "hikvision" },
  { name: "Fortinet", logo: "fortinet" },
  { name: "Dell Technologies", logo: "dell" },
  { name: "HID Global", logo: "hid" },
  { name: "VMware", logo: "vmware" },
];
