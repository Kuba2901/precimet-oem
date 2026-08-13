// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://oem.precimet.pl',
//   base: '/precimet-oem/',
  i18n: {
    defaultLocale: 'pl',
    locales: ['pl', 'en', 'de'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'pl',
        locales: { pl: 'pl-PL', en: 'en-US', de: 'de-DE' },
      },
    }),
  ],
});