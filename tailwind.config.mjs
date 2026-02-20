/** @type {import('tailwindcss').Config} */
  export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
      extend: {},
    },
    plugins: [],
  }

  2. Verifica astro.config.mjs

  cat ~/portfolio/astro.config.mjs

  Debería tener tailwind. Si no, reemplázalo:

  nano ~/portfolio/astro.config.mjs

  Pega:
  import { defineConfig } from 'astro/config';
  import tailwind from '@astrojs/tailwind';
  import react from '@astrojs/react';

  export default defineConfig({
    integrations: [tailwind(), react()],
  });
