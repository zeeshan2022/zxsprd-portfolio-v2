import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ar', 'zh', 'fr'],
    routing: {
      prefixDefaultLocale: false, // Makes English the root (e.g., /), and others prefixed (e.g., /ar/)
    }
  }
});