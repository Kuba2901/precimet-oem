// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readdirSync, readFileSync } from 'node:fs';
import { ROUTE_MAP } from './src/i18n/config.ts';

const SITE = 'https://oem.precimet.pl';
/** @type {Record<string, string>} */
const SITEMAP_LOCALES = { pl: 'pl-PL', en: 'en-US', de: 'de-DE' };
/** @param {string} locale @param {string} p */
const urlFor = (locale, p) => `${SITE}${locale === 'pl' ? '' : `/${locale}`}${p}/`;

/*
 * Integracja sitemap paruje tłumaczenia po identycznej ścieżce, więc strony z różnymi
 * slugami w każdym języku (wpisy bloga, ROUTE_MAP) trafiały do sitemapy bez xhtml:link.
 * Tu budujemy grupy tłumaczeń sami: URL -> { links, lastmod }.
 */
function translationGroups() {
  /** @type {Map<string, { links: { lang: string; url: string }[]; lastmod?: string }>} */
  const groups = new Map();
  /** @param {Record<string, string>} paths @param {string} [lastmod] */
  const addGroup = (paths, lastmod) => {
    const links = Object.entries(paths).map(([locale, p]) => ({
      lang: SITEMAP_LOCALES[locale],
      url: urlFor(locale, p),
    }));
    for (const { url } of links) groups.set(url, { links, lastmod });
  };

  for (const paths of Object.values(ROUTE_MAP)) addGroup(paths);

  /** @type {Map<string, { paths: Record<string, string>; lastmod?: string }>} */
  const byKey = new Map();
  for (const locale of Object.keys(SITEMAP_LOCALES)) {
    for (const file of readdirSync(`./src/content/blog/${locale}`)) {
      if (!file.endsWith('.md')) continue;
      const fm = readFileSync(`./src/content/blog/${locale}/${file}`, 'utf8').split('---')[1] ?? '';
      if (/^draft:\s*true/m.test(fm)) continue;
      const slug = file.replace(/\.md$/, '');
      const key = fm.match(/^translationKey:\s*"?([^"\n]+)"?/m)?.[1] ?? `${locale}/${slug}`;
      const date = fm.match(/^date:\s*(\S+)/m)?.[1];
      const entry = byKey.get(key) ?? { paths: {}, lastmod: undefined };
      entry.paths[locale] = `/blog/${slug}`;
      if (date && (!entry.lastmod || date > entry.lastmod)) entry.lastmod = date;
      byKey.set(key, entry);
    }
  }
  for (const { paths, lastmod } of byKey.values()) {
    addGroup(paths, lastmod ? new Date(lastmod).toISOString() : undefined);
  }
  return groups;
}

const groups = translationGroups();

export default defineConfig({
  site: SITE,
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
        locales: SITEMAP_LOCALES,
      },
      serialize(item) {
        const group = groups.get(item.url);
        if (!group) return item;
        return { ...item, links: group.links, ...(group.lastmod && { lastmod: group.lastmod }) };
      },
    }),
  ],
});