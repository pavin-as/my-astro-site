// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://pavin-as.github.io',
  base: '/my-astro-site',
  build: {
    assets: 'assets'
  }
});
