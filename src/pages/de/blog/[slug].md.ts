import type { APIRoute } from 'astro';
import { blogStaticPaths, type BlogPost } from '../../../lib/blog';

export async function getStaticPaths() {
  return blogStaticPaths('de');
}

export const GET: APIRoute<{ post: BlogPost }> = async ({ props }) => {
  const { post } = props;
  const content = `# ${post.data.title}\n\n> ${post.data.description}\n\nPublished: ${post.data.date.toISOString().split('T')[0]}\n\n${post.body ?? ''}`;
  return new Response(content, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
};
