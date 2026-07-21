# Elemental Pro SPA — Sitio Corporativo

Sitio web corporativo de **Elemental Pro SPA**, construido desde cero (sin CMS) con Astro, TypeScript y Tailwind CSS, siguiendo una arquitectura modular preparada para producción y despliegue en Cloudflare Pages.

## Stack técnico

| Capa | Tecnología |
|---|---|
| Framework | [Astro 5](https://astro.build) (islas, salida estática) |
| Lenguaje | TypeScript estricto |
| Estilos | Tailwind CSS v4 (config CSS-first, sin `tailwind.config.js`) |
| Interactividad | Astro components + vanilla JS (React solo si fuera necesario; hoy no se usa ningún componente `.tsx` en runtime) |
| Contenido | Astro Content Collections (`proyectos`, `blog`, Markdown + MDX) |
| Tipografía | Sora (display) · IBM Plex Sans (texto) · IBM Plex Mono (datos/labels), autohospedadas vía `@fontsource` |
| SEO | Meta tags, OpenGraph, Twitter Cards, JSON-LD (Organization, Service, FAQPage, BreadcrumbList, BlogPosting), sitemap, RSS |
| Despliegue | Cloudflare Pages (`@astrojs/cloudflare`), sitio estático + una función on-demand para el formulario de contacto |

No se utiliza WordPress, Joomla, Bootstrap, jQuery ni librerías pesadas de UI.

## Estructura del proyecto

```
src/
├── components/
│   ├── ui/         # Button, Container, Icon, Badge, Accordion, Modal, SectionHeading
│   ├── layout/      # Header, Footer, Breadcrumb, WhatsAppButton, ScrollToTop, CookieBanner
│   ├── sections/    # Hero, PageHero, Stats, Partners, Testimonials, CTA, FAQ, Timeline, Gallery
│   ├── cards/       # ServiceCard, ProjectCard, PostCard
│   └── forms/       # ContactForm
├── layouts/
│   └── BaseLayout.astro   # <head>, SEO, JSON-LD, Header/Footer, WhatsApp, CookieBanner
├── pages/
│   ├── index.astro, nosotros.astro, clientes.astro, contacto.astro, ...
│   ├── servicios/[slug].astro     # 1 plantilla → genera las 10 páginas de servicio
│   ├── proyectos/[slug].astro     # Content Collection "proyectos"
│   ├── blog/[slug].astro          # Content Collection "blog" (Markdown + MDX)
│   ├── blog/tag/[tag].astro
│   ├── api/contact.ts             # Cloudflare Pages Function (prerender = false)
│   └── rss.xml.js
├── content/
│   ├── config.ts     # Esquemas Zod de "proyectos" y "blog"
│   ├── proyectos/     # 3 casos de ejemplo
│   └── blog/          # 3 artículos de ejemplo (1 en MDX)
├── data/              # site.ts, nav.ts, services.ts, marketing.ts, faq.ts — contenido estructurado
├── lib/                # seo.ts (JSON-LD, meta), utils.ts
├── types/              # Tipos compartidos
└── styles/global.css   # Design tokens de Tailwind v4 (@theme), tipografía, utilidades
```

### Por qué una sola plantilla para los 10 servicios

En vez de 10 archivos `.astro` casi idénticos, `src/data/services.ts` centraliza el contenido de cada servicio (beneficios, proceso, tecnologías, FAQ) y `src/pages/servicios/[slug].astro` genera una página **HTML estática independiente** por cada uno vía `getStaticPaths()`:

```
/servicios/cctv
/servicios/videovigilancia-inteligente
/servicios/redes
/servicios/cableado-estructurado
/servicios/fibra-optica
/servicios/servidores
/servicios/control-acceso
/servicios/automatizacion
/servicios/cloud
/servicios/mantencion
```

Esto es DRY y significa que agregar un servicio nuevo es **agregar un objeto a `services.ts`**, no crear ni mantener un archivo de página nuevo.

## Comandos

```bash
npm install
npm run dev        # servidor local en http://localhost:4321
npm run check       # astro check (tipos + diagnósticos de Astro)
npm run build        # astro check && astro build → dist/
npm run preview      # sirve dist/ localmente (con el runtime de Cloudflare)
```

## Formulario de contacto

- **Frontend**: `src/components/forms/ContactForm.astro` — validación en el cliente (JS vanilla, sin dependencias), estados de éxito/error accesibles (`aria-live`), envío por `fetch` como `multipart/form-data` (soporta adjuntar archivo).
- **Backend**: `src/pages/api/contact.ts` — corre como Cloudflare Pages Function (`export const prerender = false`, el resto del sitio sigue siendo 100% estático). Valida y sanitiza cada campo en el servidor.
- **Envío de correo real**: el archivo incluye un bloque `TODO` con el código exacto para activar [Resend](https://resend.com) (o adaptarlo a SMTP). Falta solo:
  1. `npm install resend`
  2. Descomentar el bloque marcado en `contact.ts`
  3. Configurar `RESEND_API_KEY` como variable de entorno / secreto en Cloudflare Pages (ver `.env.example`)

## Contenido (Content Collections)

- `src/content/proyectos/*.md` — 3 casos de ejemplo con galería, cliente, ubicación, tecnologías y resultado medible.
- `src/content/blog/*.md` / `*.mdx` — 3 artículos de ejemplo (uno en MDX para demostrar soporte de componentes dentro del contenido), con categoría, etiquetas, tiempo de lectura calculado automáticamente y tabla de contenidos generada desde los `<h2>`/`<h3>`.

Las imágenes de portada/galería actuales son **SVG generativos de marcador de posición** (con la paleta de marca) en `src/content/*/​_images/`. Reemplázalas por fotografías reales del proyecto o artículo antes de publicar — el esquema en `src/content/config.ts` acepta cualquier formato soportado por `astro:assets` (jpg, png, webp, avif, svg).

## SEO implementado

- Meta tags, canonical, OpenGraph, Twitter Cards por página (`BaseLayout.astro`).
- JSON-LD: `Organization` (global), `Service` + `FAQPage` (servicios), `BreadcrumbList` (todas las páginas internas), `BlogPosting` (artículos).
- `sitemap-index.xml` generado automáticamente por `@astrojs/sitemap` en cada build.
- `robots.txt` en `public/`.
- `rss.xml` del blog.
- Imagen OG por defecto en `public/og-default.png` (formato PNG, compatible con todas las redes — el SVG fuente está en `public/og-default.svg`).

## Accesibilidad (WCAG 2.2)

- Navegación completa por teclado; `:focus-visible` con contraste cian sobre todo el sitio.
- Menú, banner de cookies y modal de galería con `aria-label`, `aria-expanded`, `aria-modal` y cierre por `Escape`.
- Skip link ("Saltar al contenido principal") en `BaseLayout.astro`.
- `prefers-reduced-motion` respetado globalmente (`global.css`).
- Contraste alto por diseño (paleta ink/navy/blue sobre blanco y gris claro).

## Despliegue en Cloudflare Pages

1. Conecta el repositorio en Cloudflare Pages.
2. Build command: `npm run build` — Output directory: `dist`.
3. El adaptador `@astrojs/cloudflare` ya está configurado (`astro.config.mjs`); el sitio se sirve estático y `src/pages/api/contact.ts` corre on-demand como Pages Function.
4. Configura `RESEND_API_KEY` en **Settings → Environment variables** cuando actives el envío de correo real.
5. `wrangler.toml` incluye la configuración base (`compatibility_flags`, `pages_build_output_dir`). El log sobre el binding `SESSION` es informativo — el sitio no usa `Astro.session`, así que no requiere acción.

## Antes de publicar (contenido a revisar)

Este scaffold viene con contenido realista pero de ejemplo, marcado para que el equipo de Elemental Pro lo reemplace por información real:

- `src/data/site.ts` — dirección, teléfono, WhatsApp, redes sociales.
- `src/data/marketing.ts` — testimonios de clientes y logos de partners (actualmente nombres de ejemplo).
- `src/content/proyectos/*` y `src/content/blog/*` — casos y artículos de ejemplo; sus imágenes son SVG generativos, no fotografías.
- `politica-privacidad.astro` y `terminos.astro` — plantillas base que deben ser revisadas por un asesor legal antes de publicarse.

## Notas de versión

El proyecto quedó fijado en **Astro 5** (`^5.1.5`, resuelto a `5.18.2`), la serie estable vigente en el momento de este scaffold. El propio `astro dev` reporta disponibilidad de una versión mayor superior; se optó deliberadamente por no saltar de forma automática a un major desconocido sin poder validar sus breaking changes contra este proyecto. Para actualizar: `npx @astrojs/upgrade` y volver a correr `npm run check && npm run build`.
