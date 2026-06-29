import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/* ───────────────────────── Singleton pages (home/about copy) ───────────── */
const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    // Hero
    eyebrow: z.string().optional(),
    headline: z.string().optional(),
    headlineAccent: z.string().optional(),
    lede: z.string().optional(),
    // About section
    aboutTitle: z.string().optional(),
    aboutLede: z.string().optional(),
    // Stats shown beside the about narrative
    stats: z
      .array(z.object({ value: z.string(), label: z.string() }))
      .optional(),
    // Gallery of meetup / lab images (paths relative to /public)
    gallery: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string(),
          caption: z.string().optional(),
        }),
      )
      .optional(),
  }),
});

/* ──────────────────────────────── Events ───────────────────────────────── */
const events = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    location: z.string(),
    kind: z
      .enum(['Seminar', 'Workshop', 'Conference', 'Meetup', 'Talk'])
      .default('Seminar'),
    registerUrl: z.string().url().optional(),
    cover: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

/* ────────────────────────────── Announcements ──────────────────────────── */
const announcements = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/announcements' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    pinned: z.boolean().default(false),
    category: z
      .enum(['Lab', 'Hiring', 'Award', 'Partnership', 'Release'])
      .default('Lab'),
    draft: z.boolean().default(false),
  }),
});

/* ───────────────────────────── Publications ────────────────────────────── */
const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    year: z.number(),
    venue: z.string().optional(),
    field: z.enum(['Foundational', 'Mathematical', 'Physics']).optional(),
    team: z.string().optional(),
    type: z
      .enum(['Preprint', 'Journal', 'Conference', 'Thesis', 'Note'])
      .default('Preprint'),
    abstract: z.string().optional(),
    pdfUrl: z.string().url().optional(),
    doi: z.string().optional(),
    arxiv: z.string().optional(),
    codeUrl: z.string().url().optional(),
    draft: z.boolean().default(false),
  }),
});

/* ─────────────────────────────────── Team ──────────────────────────────── */
const team = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/team' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    team: z.enum(['Core', 'MTAIL', 'TAAI', 'MAPR', 'EPEFORM']),
    order: z.number().default(99),
    avatar: z.string().optional(),
    email: z.string().optional(),
    links: z
      .array(z.object({ label: z.string(), href: z.string() }))
      .default([]),
    fields: z.array(z.string()).default([]),
  }),
});

/* ──────────────────────────────── Contacts ─────────────────────────────── */
const contacts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/contacts' }),
  schema: z.object({
    name: z.string(),
    purpose: z.string(),
    email: z.string(),
    team: z.string().optional(),
    order: z.number().default(99),
  }),
});

export const collections = {
  pages,
  events,
  announcements,
  publications,
  team,
  contacts,
};
