// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
	site: 'https://i-2ki.github.io/math_page/',
	base: '/math_page/',
	integrations: [
		mdx({
			remarkPlugins: [[remarkMath, { singleDollarTextMath: false }]],
			rehypePlugins: [rehypeKatex],
		}),
		sitemap()
	],
	markdown: {
		remarkPlugins: [[remarkMath, { singleDollarTextMath: false }]],
		rehypePlugins: [rehypeKatex],
	},
});
