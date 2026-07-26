//author: Jhor
//version: 1.0.3
// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://greemets.net',
  adapter: cloudflare(),
  image: {
    service: passthroughImageService(),
  },
});