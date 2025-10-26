import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schema } from "./src/sanity/schemaTypes";
import {internationalizedArray} from 'sanity-plugin-internationalized-array'

export default defineConfig({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID!,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET!,
  plugins: [
    structureTool(),
    internationalizedArray({
      languages: [
        {id: 'en', title: 'English'},
        {id: 'nb', title: 'Norwegian Bokmål'}
      ],
      defaultLanguages: ['en'],
      fieldTypes: ['string', 'text', 'blockContent'],
    })
  ],
  schema,
});