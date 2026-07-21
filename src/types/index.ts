export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceProcessStep {
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  name: string;
  shortName: string;
  category: string;
  summary: string;
  heroDescription: string;
  icon: string;
  benefits: { title: string; description: string }[];
  process: ServiceProcessStep[];
  technologies: string[];
  faqs: ServiceFaq[];
  relatedSlugs: string[];
}

export interface Stat {
  value: string;
  label: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface Partner {
  name: string;
  logo: string;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}
