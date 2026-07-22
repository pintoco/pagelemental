import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';

const SITE_URL = 'https://www.elementalpro.cl';

export default defineConfig({
  site: SITE_URL,
  output: 'static',
  // Cloudflare Pages adapter: the site is static by default, but routes that
  // export `prerender = false` (e.g. src/pages/api/contact.ts) run on-demand
  // as Cloudflare Pages Functions.
  adapter: cloudflare({ imageService: 'passthrough' }),
  integrations: [
    mdx(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    remotePatterns: [{ protocol: 'https' }],
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  compressHTML: true,
});
