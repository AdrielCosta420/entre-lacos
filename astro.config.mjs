// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// SITE_URL and BASE_PATH are injected by the deploy workflow from
// actions/configure-pages, so transferring the repo to another account (which
// changes the github.io URL) needs no code change. `||` instead of `??`:
// configure-pages returns an empty base_path for <user>.github.io repos.
export default defineConfig({
  site: process.env.SITE_URL || 'http://localhost:4321',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'always',

  // Downloaded at build time and served from the site itself: no request to
  // Google from the reader's browser, and no npm dependency. Both are
  // variable fonts, so one file per style covers every weight.
  fonts: [
    {
      // Press serif with an optical-size axis: the same family sets the
      // masthead and the long reading text.
      provider: fontProviders.google(),
      name: 'Piazzolla',
      cssVariable: '--font-piazzolla',
      weights: ['300 800'],
      styles: ['normal', 'italic'],
      subsets: ['latin'],
      fallbacks: ['Georgia', 'serif'],
      options: { experimental: { variableAxis: { opsz: [['8', '30']] } } },
    },
    {
      // Grotesque for navigation, bylines and metadata.
      provider: fontProviders.google(),
      name: 'Archivo',
      cssVariable: '--font-archivo',
      weights: ['400 700'],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['system-ui', 'sans-serif'],
      options: { experimental: { variableAxis: { wdth: [['62', '125']] } } },
    },
  ],
});
