// @ts-check

import mdx from '@astrojs/mdx';
import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import remarkBreaks from 'remark-breaks';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
	site: 'https://i-2ki.github.io/',
	base: '/math_page/',
	integrations: [mdx()],
	markdown: {
		remarkPlugins: [remarkMath, remarkBreaks],
		rehypePlugins: [rehypeKatex],
	},
});
