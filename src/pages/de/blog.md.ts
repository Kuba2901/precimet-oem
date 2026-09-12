import type { APIRoute } from 'astro';
import { path } from '../../i18n/config';
import { t } from '../../i18n/ui';
import { getPosts, postSlug } from '../../lib/blog';

const locale = 'de' as const;

/** Markdown-Variante der Beitragsliste (/de/blog.md) — Ziel von rel="alternate" auf /de/blog/. */
export const GET: APIRoute = async ({ site }) => {
  const dict = t(locale);
  const base = site ?? new URL('https://oem.precimet.pl');
  const posts = await getPosts(locale);

  const list = posts
    .map((post) => {
      const url = new URL(path(locale, `/blog/${postSlug(post)}`), base).href;
      const date = post.data.date.toISOString().split('T')[0];
      return `- [${post.data.title}](${url}) — ${date}\n  ${post.data.description}`;
    })
    .join('\n');

  const content = `# ${dict.seo.blogTitle}\n\n> ${dict.seo.blogDescription}\n\n${posts.length ? list : dict.blog.empty}\n`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
};
