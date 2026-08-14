// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://oem.precimet.pl',
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
        !page.includes('/danke'),
      i18n: {
        defaultLocale: 'pl',
        locales: { pl: 'pl-PL', en: 'en-US', de: 'de-DE' },
      },
    }),
  ],
});