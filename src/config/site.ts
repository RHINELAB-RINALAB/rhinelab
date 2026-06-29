/**
 * ─────────────────────────────────────────────────────────────────────────
 *  RHINELAB · SITE CONFIGURATION
 * ─────────────────────────────────────────────────────────────────────────
 *  This is the only "code" file you need to touch for global settings.
 *  Everything else (page copy, blog posts, events, team, publications) lives
 *  in plain Markdown files under  src/content/  — see the README.
 *
 *  Safe to edit: change the strings below and redeploy.
 * ─────────────────────────────────────────────────────────────────────────
 */

export const site = {
  /** Short name used in the header wordmark fallback and titles. */
  name: 'Rhinelab',
  /** Full legal / display name. */
  fullName: 'RHINELAB-RINALAB — Theoretical Modelling & Artificial Intelligence Laboratory',
  /** One-line tagline shown in metadata and the footer. */
  tagline:
    'An open-source theoretical and semi-experimental research laboratory studying modelling theory, theoretical AI, mathematics, and physics.',
  /** Used for SEO descriptions when a page does not set its own. */
  description:
    'RHINELAB-RINALAB is an open-source theoretical and semi-experimental research laboratory focused on foundational analysis and the adversarial verification of theoretical bodies — across modelling theory, theoretical artificial intelligence, mathematics, and physics.',

  /** Primary contact details (also rendered on the Contact page header). */
  contact: {
    email: 'rhinelab.rinalab@gmail.com',
    location: 'Hanoi, Vietnam',
  },

  /** Social / external links. Leave a value empty ('') to hide that link. */
  social: {
    github: 'https://github.com/rhinelab-rinalab',
    gitlab: 'https://gitlab.com/amj-dl-group/rhinelab-main',
    x: '',
    linkedin: '',
    scholar: '',
  },
} as const;

/** Primary navigation. Order here = order in the header & footer. */
export const nav: { label: string; href: string }[] = [
  { label: 'About', href: '/#about' },
  { label: 'People', href: '/team' },
  { label: 'Publications', href: '/research' },
  { label: 'Events', href: '/events' },
  { label: 'News', href: '/announcements' },
  { label: 'Contact', href: '/contact' },
];

/** The three study fields shown across the site (hero, about, footer). */
export const fields: { id: string; label: string; blurb: string }[] = [
  {
    id: 'modelling',
    label: 'Theory of Modelling',
    blurb:
      'Where the model takes precedence over any theoretical body — the theoretical–practical mismatch, abstraction corruptions, layering drifts, and the ontology and epistemics of mathematical models.',
  },
  {
    id: 'theoretical-ai',
    label: 'Theoretical AI',
    blurb:
      'Artificial intelligence and its theory of mind: foundational questions, learning theory, and theoretical computer science beyond the strictly Turing.',
  },
  {
    id: 'math-physics',
    label: 'Mathematics & Physics',
    blurb:
      'Foundational and mathematical physics — from material sciences and quantum wells to the re-concretisation of theoretical and practical knowledge from scratch.',
  },
];

/** The research teams. Acronyms expanded for accessibility & clarity. */
export const teams: {
  id: string;
  acronym: string;
  name: string;
  blurb: string;
}[] = [
  {
    id: 'core',
    acronym: 'Core',
    name: 'Core Management Division',
    blurb:
      'Direction, stewardship, and operations of the lab — connecting people, research directives, and long-horizon goals across the groups.',
  },
  {
    id: 'mtail',
    acronym: 'MTAIL',
    name: 'Modelling, Theoretical AI & Learning-theoretic Group',
    blurb:
      'The theoretical–empirical gap: theoretical machine learning, statistical models, the double-descent phenomenon, and the coupling of modelling theory. Inherited from the Double Descent — Statistical Learning Theory Research Group.',
  },
  {
    id: 'taai',
    acronym: 'TAAI',
    name: 'Theoretical & Application AI Group',
    blurb:
      'Artificial intelligence research and its deployments — implementation and inquiry across applied and foundational AI, and adjacent concepts.',
  },
  {
    id: 'mapr',
    acronym: 'MAPR',
    name: 'Mathematical & Physical Research Group',
    blurb:
      'Foundational mathematics and physics — paradox identification, mathematical utilisation on physical systems, and the theoretical–practical gap in principled physical theories. Hosts the Nuclear Physics subgroup.',
  },
  {
    id: 'epeform',
    acronym: 'EPEFORM',
    name: 'Encyclopaedia, Pedagogy & Foundational Research-Method Group',
    blurb:
      'Foundational build-up and pedagogy — assembling knowledge stacks across computer science, physics, biology, philosophy, mathematics, and chemistry.',
  },
];

export type SiteConfig = typeof site;
