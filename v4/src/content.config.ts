import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Blog / Aktualności — content collection.
 *
 * Nowy wpis = nowy plik .md w src/content/blog/<język>/nazwa-wpisu.md
 * Nie trzeba dotykać layoutu ani kodu strony.
 *
 * Wymagany frontmatter:
 * ---
 * title: "Tytuł wpisu"
 * description: "Krótki opis (zajawka na liście i meta description)"
 * date: 2026-07-01
 * lang: pl            # pl | en | de
 * cover: "https://..."# opcjonalnie — zdjęcie nagłówkowe
 * tags: ["case study"]# opcjonalnie
 * translationKey: "x" # opcjonalnie — łączy wersje językowe tego samego wpisu
 * ---
 */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    lang: z.enum(['pl', 'en', 'de']),
    cover: z.string().optional(),
    tags: z.array(z.string()).default([]),
    translationKey: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
