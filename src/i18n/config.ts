export const LOCALES = ['pl', 'en', 'de'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'pl';

export const LOCALE_LABELS: Record<Locale, string> = {
  pl: 'PL',
  en: 'EN',
  de: 'DE',
};

export const LOCALE_NAMES: Record<Locale, string> = {
  pl: 'Polski',
  en: 'English',
  de: 'Deutsch',
};

export const OG_LOCALES: Record<Locale, string> = {
  pl: 'pl_PL',
  en: 'en_US',
  de: 'de_DE',
};

/** Prefiks URL dla danego języka ('' dla polskiego). */
export function localePrefix(locale: Locale): string {
  return locale === DEFAULT_LOCALE ? '' : `/${locale}`;
}

/** Buduje ścieżkę w danym języku, np. path('en', '/blog') -> '/precimet-oem/en/blog'. */
export function path(locale: Locale, p: string = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, ''); // '/precimet-oem' or ''
  const prefix = localePrefix(locale);                       // '' or '/en' or '/de'
  const clean = p.startsWith('/') ? p : `/${p}`;
  const joined = `${base}${prefix}${clean}`;
  return joined || '/';
}

/** Odczytuje język z URL-a (np. /en/blog -> 'en'). */
export function localeFromUrl(url: URL): Locale {
  const [, first] = url.pathname.split('/');
  if (LOCALES.includes(first as Locale) && first !== DEFAULT_LOCALE) {
    return first as Locale;
  }
  return DEFAULT_LOCALE;
}

/** Ścieżka bez prefiksu językowego (np. /en/blog -> /blog). */
export function stripLocale(url: URL): string {
  const locale = localeFromUrl(url);
  if (locale === DEFAULT_LOCALE) return url.pathname;
  const stripped = url.pathname.replace(new RegExp(`^/${locale}`), '');
  return stripped === '' ? '/' : stripped;
}
