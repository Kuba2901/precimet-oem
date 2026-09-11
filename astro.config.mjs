// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://oem.precimet.pl',
  // Build wydaje katalogi (/about/index.html), a Apache przekierowuje /about -> /about/.
  // Ustawione jawnie, żeby `path()` w src/i18n/config.ts nie rozjechało się z serwerem.
  trailingSlash: 'always',
  build: { format: 'directory' },
  i18n: {
    defaultLocale: 'pl',
    locales: ['pl', 'en', 'de'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/dziekujemy') &&
        !page.includes('/thank-you') &&
        !page.includes('/danke') &&
        !page.includes('/404'),
      i18n: {
        defaultLocale: 'pl',
        locales: { pl: 'pl-PL', en: 'en-US', de: 'de-DE' },
      },
    }),
  ],
});