# Rhinelab — Advanced Research Laboratory

The website for Rhinelab, a theoretical research laboratory studying
**Foundational**, **Mathematical**, and **Physics** questions across four teams
(Core Management, MTAIL, TAAI, MAPR).

Built with **[Astro 5](https://astro.build)**. Every piece of content lives in
plain **Markdown** files, so editing the site is editing text — no front-end
knowledge required. Ships as a fully static site, ready for **Netlify**, with a
**GitHub Actions** CI pipeline.

---

## Table of contents

1. [Quick start](#quick-start)
2. [Editing content (the important part)](#editing-content)
3. [Global settings](#global-settings)
4. [Replacing the meetup images](#replacing-the-meetup-images)
5. [Project structure](#project-structure)
6. [Deploying to Netlify](#deploying-to-netlify)
7. [Continuous integration](#continuous-integration)
8. [Tech stack](#tech-stack)

---

## Quick start

You need [Node.js](https://nodejs.org) 20 or newer.

```bash
npm install      # install dependencies (first time only)
npm run dev      # start the local dev server at http://localhost:4321
npm run build    # type-check + build the production site into dist/
npm run preview  # preview the production build locally
```

That's it. Edit any Markdown file and the dev server reloads instantly.

---

## Editing content

**All content is Markdown.** Each file has a *frontmatter* block at the top
(the part between the `---` lines) holding structured fields, followed by the
body text written in normal Markdown.

To **add** something, copy an existing file in the same folder, rename it, and
edit it — the file name becomes the URL slug (e.g.
`src/content/blog/my-post.md` → `/blog/my-post`). To **remove** something,
delete its file. Set `draft: true` to hide an item without deleting it.

Everything lives under **`src/content/`**:

| Folder | Powers the page | What each file is |
| --- | --- | --- |
| `pages/home.md` | Landing page + About | The hero and About copy, stats, and gallery |
| `blog/` | `/blog` | One blog post per file |
| `events/` | `/events` | One event per file (auto-split into upcoming/past) |
| `announcements/` | `/announcements` | One announcement per file |
| `publications/` | `/research` | One publication per file (grouped by year) |
| `team/` | `/team` | One team member per file |
| `contacts/` | `/contact` | One contact desk per file |

### Frontmatter fields by type

**Blog post** (`src/content/blog/*.md`)

```yaml
title: On portable theories
description: A short summary shown in listings and search results.
pubDate: 2026-03-12          # YYYY-MM-DD
updatedDate: 2026-03-20      # optional
author: Dr. Elara Voss       # optional, defaults to "Rhinelab"
field: Foundational          # optional: Foundational | Mathematical | Physics
tags: [theory, models]       # optional
draft: false                 # optional, hides the post when true
```

> **Tip:** if a `description` or `title` value begins with a quotation mark or
> contains a colon, wrap the whole value in single quotes, e.g.
> `description: '"Emergence" is an overused word.'`

**Event** (`src/content/events/*.md`)

```yaml
title: Rhinelab Summer Seminar 2026
description: One-line summary.
startDate: 2026-07-15        # YYYY-MM-DD (or with time)
endDate: 2026-07-17          # optional
location: Online · Zoom
kind: Workshop               # Seminar | Workshop | Conference | Meetup | Talk
registerUrl: https://...     # optional; shows a Register button if upcoming
draft: false
```

**Announcement** (`src/content/announcements/*.md`)

```yaml
title: TAAI team launch
description: One-line summary.
pubDate: 2026-04-01
pinned: true                 # pinned items sort to the top
category: Lab                # Lab | Hiring | Award | Partnership | Release
draft: false
```

**Publication** (`src/content/publications/*.md`)

```yaml
title: A Framework for Portable Theories
authors: [Elara Voss, Nadia Okonkwo]
year: 2026
venue: arXiv preprint        # optional
field: Foundational          # optional
team: MTAIL                  # optional
type: Preprint               # Preprint | Journal | Conference | Thesis | Note
abstract: >-                 # optional
  Multi-line abstract text goes here. The >- keeps it as one paragraph.
pdfUrl: https://...          # optional
arxiv: "2604.01234"          # optional (links to arxiv.org/abs/...)
doi: 10.1000/xyz             # optional (links to doi.org/...)
codeUrl: https://...         # optional
draft: false
```

**Team member** (`src/content/team/*.md`)

```yaml
name: Dr. Elara Voss
role: Director
team: Core                   # Core | MTAIL | TAAI | MAPR
order: 1                     # sort order within the team (lower = first)
email: elara@rhinelab.org    # optional
avatar: /images/elara.jpg    # optional; falls back to initials
fields: [Foundational]       # optional chips
links:                       # optional
  - { label: Scholar, href: "https://scholar.google.com" }
```

**Contact** (`src/content/contacts/*.md`)

```yaml
name: Research enquiries
purpose: Collaboration proposals and academic questions.
email: research@rhinelab.org
team: MTAIL                  # optional
order: 2                     # sort order (lower = first)
```

### The landing page & About section

`src/content/pages/home.md` controls the hero headline, the About narrative,
the three statistic tiles, and the meetup gallery. The fields are commented in
the file. The Markdown **body** of that file becomes the long-form "What we
mean by theory" prose in the About section.

---

## Global settings

One file — **`src/config/site.ts`** — holds everything that isn't page content:

- Lab name, tagline, and default SEO description
- Contact email and location
- Social links (set any to `''` to hide it)
- The **navigation** menu (order = display order)
- The three **study fields** and their blurbs
- The four **teams**, their acronyms, names, and blurbs

It is plain, heavily-commented TypeScript — change the strings and redeploy.

---

## Replacing the meetup images

The About gallery ships with four **placeholder** SVGs at
`public/images/meetup-1.svg` … `meetup-4.svg`. Replace them with real photos:

1. Drop your images into `public/images/` (e.g. `meetup-photo-1.jpg`).
2. Update the `gallery` list in `src/content/pages/home.md` to point at the new
   filenames and update the `alt` / `caption` text.

Any path under `public/` is served from the site root (so
`public/images/x.jpg` → `/images/x.jpg`).

---

## Project structure

```
rhinelab/
├── public/                 # static assets served as-is (images, favicon, robots.txt)
│   └── images/             # logo, banner, meetup gallery
├── src/
│   ├── components/         # Header, Footer, Logo, WaveField, PageHeader
│   ├── config/site.ts      # ← global settings (edit this)
│   ├── content/            # ← ALL page content lives here as Markdown
│   ├── content.config.ts   # content collection schemas (validation)
│   ├── layouts/            # BaseLayout (SEO, header/footer shell)
│   ├── lib/format.ts       # date / reading-time helpers
│   ├── pages/              # routes (mostly thin wrappers over content)
│   └── styles/global.css   # the design system (colours, type, components)
├── astro.config.mjs        # site URL, integrations
├── netlify.toml            # Netlify build + headers config
└── .github/workflows/ci.yml# CI: type-check + build on every push/PR
```

---

## Deploying to Netlify

The repository is preconfigured (`netlify.toml`), so deployment is connect-and-go:

1. Push this project to a GitHub/GitLab/Bitbucket repository.
2. In the [Netlify dashboard](https://app.netlify.com), choose **Add new site →
   Import an existing project** and select the repository.
3. Netlify reads `netlify.toml` automatically — build command `npm run build`,
   publish directory `dist`, Node 22. Just click **Deploy**.
4. Every push to your production branch now rebuilds and redeploys the site.

**One thing to set:** open `astro.config.mjs` and change `SITE_URL` to your real
domain (e.g. your `*.netlify.app` URL or a custom domain). This is used for the
sitemap, RSS feed, and canonical/social-share URLs.

---

## Continuous integration

`.github/workflows/ci.yml` runs on every push and pull request to `main`:

- installs dependencies with `npm ci`
- runs `npm run build`, which **type-checks** (`astro check`) and **builds** the
  site

If the content has a broken frontmatter field or the site fails to build, CI
fails before anything reaches production. Netlify performs the same build on its
side, giving you a deploy preview for every pull request.

---

## Tech stack

- **[Astro 5](https://astro.build)** — static site generator, content collections
- **TypeScript** (strict) — type-safe content schemas via Zod
- **Self-hosted fonts** (Fontsource) — Space Grotesk, Newsreader, IBM Plex Mono
- **Hand-written CSS** design system — no framework, no build-time CSS bloat
- **@astrojs/sitemap** + **@astrojs/rss** — sitemap and blog feed
- **GitHub Actions** + **Netlify** — CI and hosting

No client-side framework ships to the browser: the only JavaScript is a few
kilobytes for the header and scroll-reveal animations, all of which degrade
gracefully and respect `prefers-reduced-motion`.
