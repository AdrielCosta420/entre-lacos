import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { toEntryId } from './lib/entry-id.ts';
import { WHATSAPP_PATTERN } from './lib/whatsapp.ts';

// This schema is the contract the CMS form (.pages.yml) must honor. Content
// that breaks it fails the build, so a broken page never reaches the site;
// the CMS validates the same rules earlier, while the student is typing.

const integrantes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/integrantes' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      photo: image().optional(),
      shortBio: z.string().max(200),
      institution: z.string(),
      semester: z.string().optional(),
      interests: z.array(z.string()).max(3).default([]),
      approach: z.string().optional(),
      instagram: z.string().optional(),
      whatsapp: z.string().regex(WHATSAPP_PATTERN).optional(),
    }),
});

const resenhas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/resenhas' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      draft: z.boolean().default(false),
      author: z.string().transform(toEntryId).pipe(reference('integrantes')),
      book: z.object({
        title: z.string(),
        author: z.string(),
      }),
      cover: image().optional(),
      category: z.string(),
      themes: z.array(z.string()).default([]),
      summary: z.string().max(200),
      publishedAt: z.coerce.date(),
    }),
});

export const collections = { integrantes, resenhas };
