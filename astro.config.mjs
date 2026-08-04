import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://hugomrj.github.io',
  base: '/hana',
  outDir: 'docs',
  integrations: [sitemap()],
});