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
  name: 'RHINELAB',
  /** Full legal / display name. */
  fullName: 'RHINELAB-RINALAB — Advanced Foundational, Theoretical Modelling & Artificial Intelligence Laboratory',
  /** One-line tagline shown in metadata and the footer. */
  tagline:
    'An open-source theoretical and semi-experimental research laboratory studying modelling theory, theoretical AI, mathematics, physics and more.',
  /** Used for SEO descriptions when a page does not set its own. */
  description:
    'RHINELAB-RINALAB is an open-source theoretical and semi-experimental research laboratory focused on foundational analysis and the adversarial verification of theoretical bodies — across modelling theory, theoretical artificial intelligence, mathematics, and physics. We are interested in the push for: theoretical computer science - the study of computer or generally, dynamic processing constructs, of whom are to be said of automatic(on), and their structural configurations. Or, mathematical studies of abstract objects, theory of modelling alongside physical systems. And lastly, for now, theoretical artificial intelligence and artificial intelligence deployment system (LLM, which falls into that category).',

  /** Primary contact details (also rendered on the Contact page header). */
  contact: {
    email: 'rhinelab.rinalab@gmail.com',
    location: 'Hanoi, Vietnam (main office), available internationally',
  },

  /** Social / external links. Leave a value empty ('') to hide that link. */
  social: {
    github: 'https://github.com/rhinelab-rinalab',
    gitlab: 'https://gitlab.com/amj-dl-group/rhinelab-main',
    x: '',
    linkedin: 'https://www.linkedin.com/company/rhinelab-advanced-research-laboratory',
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

/** The n study fields shown across the site (hero, about, footer). */
export const fields: { id: string; label: string; blurb: string }[] = [
  {
    id: 'modelling',
    label: 'Theory of Modelling',
    blurb:
      'The development of the theory of model, where model precedes axioms, and where the problem lies — the theoretical-practical mismatch, abstraction corruptions, layering drifts, and the ontology and epistemics of mathematical models.',
  },
  {
    id: 'theoretical-ai',
    label: 'Theoretical and Foundational AI',
    blurb:
      'Artificial intelligence and its theory of mind: foundational questions, learning theory, the epistemology and ontology of learning, the prospect of AI itself, and the question that resembles, CRA, but is not, CRA.',
  },
  {
    id: 'math-physics',
    label: 'Foundational Mathematics & Physics',
    blurb:
      'From foundational mathematics to the foundational and mathematical physics — from material sciences and quantum wells to the re-concretisation of theoretical and practical knowledge from scratch.',
  },
  {
    id: 'philosophy',
    label: 'Philosophy',
    blurb:
      'The anthropology of science and thereof. For science, and mathematics to exist, to be thought of, and there be philosophies. Such to be researched, no matter what and who said otherwise.',
  },
  {
    id: 'computer-science',
    label: 'Foundational and Theoretical Computer Science',
    blurb:
      'The computer, that notion itself, and what is to be said to constitute such. Focused on the general framework of the automated machine, and theoretical computer science beyond the strictly Turing.',
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
      'Direction, stewardship, operations, and logistics configuration of the lab - tasked with connecting people (networking), research directives, logistical maintenance and expansion, provision thereof, and long-horizon goals across the domain and group laboratories.',
  },
  {
    id: 'mtail',
    acronym: 'MTAIL',
    name: 'Modelling, Theoretical AI & Learning-theoretic Laboratory',
    blurb:
      'The theoretical-empirical gap: theoretical machine learning, statistical models, the double-descent phenomenon, and the coupling of modelling theory. Inherited from the Double Descent — Statistical Learning Theory Research Group.',
  },
  {
    id: 'taai',
    acronym: 'TAAI',
    name: 'Theoretical & Application AI Domain',
    blurb:
      'Artificial intelligence research and its deployments — implementation and inquiry across applied and foundational AI, and adjacent concepts.',
  },
  {
    id: 'mapr',
    acronym: 'MAPR',
    name: 'Mathematical & Physical Research Domain',
    blurb:
      'Foundational mathematics and physics — paradox identification, mathematical utilisation on physical systems, and the theoretical-practical gap in principled physical theories. Hosts the Nuclear Physics subgroup.',
  },
  {
    id: 'epeform',
    acronym: 'EPEFORM',
    name: 'Encyclopaedia, Pedagogy & Foundational Research Domain',
    blurb:
      'Foundational build-up and pedagogy — assembling knowledge stacks across computer science, physics, biology, philosophy, mathematics, and chemistry, or more.',
  },
];

export type SiteConfig = typeof site;
