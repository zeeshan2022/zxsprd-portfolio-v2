import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://zxsprd.com',
  integrations: [
    tailwind(), 
    sitemap() // <-- Added the missing comma above!
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ar', 'zh', 'fr', 'ur', 'ps'], // <-- Added 'ur' and 'ps' here too so Astro knows about them!
    routing: {
      prefixDefaultLocale: false, // Makes English the root (e.g., /), and others prefixed (e.g., /ar/)
    }
  }
});