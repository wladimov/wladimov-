import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import tailwind from "@astrojs/tailwind";
import { remarkReadingTime } from './remark-reading-time.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://wladimov.com',
  integrations: [mdx(), sitemap(), tailwind()],
  markdown: {
    drafts: true,
    remarkPlugins: [remarkReadingTime],
  },
});