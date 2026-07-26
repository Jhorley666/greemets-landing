//author: Jhor
//version: 1.0.2
// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://greemets.net',
  adapter: cloudflare(),
});