import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from '../i18n/config';

export type BlogPost = CollectionEntry<'blog'>;

/** Slug wpisu bez prefiksu językowego (pl/moj-wpis -> moj-wpis). */
export function postSlug(post: BlogPost): string {
  return post.id.replace(/^(pl|en|de)\//, '');
}

/** Opublikowane wpisy w danym języku, od najnowszych. */
export async function getPosts(locale: Locale): Promise<BlogPost[]> {
  const posts = await getCollection(
    'blog',
    ({ data }) => data.lang === locale && !data.draft
  );
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** Ścieżki statyczne dla stron [slug] w danym języku. */
export async function blogStaticPaths(locale: Locale) {
  const posts = await getPosts(locale);
  return posts.map((post) => ({
    params: { slug: postSlug(post) },
    props: { post },
  }));
}

export function dateFormatter(locale: Locale) {
  const tag = locale === 'pl' ? 'pl-PL' : locale === 'de' ? 'de-DE' : 'en-GB';
  return new Intl.DateTimeFormat(tag, { dateStyle: 'long' });
}
