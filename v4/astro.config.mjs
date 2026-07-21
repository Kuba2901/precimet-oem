// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: podmień na docelową domenę przed publikacją
  site: 'https://oem.precimet.pl',

  i18n: {
    defaultLocale: 'pl',
    locales: ['pl', 'en', 'de'],
    routing: {
      // polski bez prefiksu: /  |  angielski: /en  |  niemiecki: /de
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
