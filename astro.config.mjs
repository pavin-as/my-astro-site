// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://pavin-as.github.io', // Replace with your GitHub username
  base: '/my-astro-site', // Replace with your repository name
  build: {
    assets: 'assets'
  }
});
