import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Update this to your production domain once you connect Netlify
// (used for sitemap, RSS, and canonical/OG URLs).
const SITE_URL = 'https://rhinelab.netlify.app';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  output: 'static',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
});
