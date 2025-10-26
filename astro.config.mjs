// @ts-check
import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';
import react from '@astrojs/react';
import { loadEnv } from 'vite';

// Load .env variables manually
const env = loadEnv('', process.cwd(), '');

const projectId = env.PUBLIC_SANITY_PROJECT_ID;
const dataset = env.PUBLIC_SANITY_DATASET;

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: []
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