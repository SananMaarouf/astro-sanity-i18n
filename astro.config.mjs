// @ts-check
import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';
import react from '@astrojs/react';
import node from '@astrojs/node';
import { loadEnv } from 'vite';
import tailwindcss from '@tailwindcss/vite';

// Load .env variables manually
const env = loadEnv('', process.cwd(), '');

const projectId = env.PUBLIC_SANITY_PROJECT_ID;
const dataset = env.PUBLIC_SANITY_DATASET;

// https://astro.build/config
export default defineConfig({
  adapter: node({
    mode: 'standalone'
  }),
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      exclude: ['ViteDevServerStopped']
    }
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'nb'],
    fallback: {
      nb: 'en'
    }
  },
  integrations: [
    sanity({
      projectId,
      dataset,
      useCdn: false,
      apiVersion: "2025-09-21",
      studioBasePath: "/studio"
    }),
    react()
  ]
});