// ./src/sanity/schemaTypes/index.ts
import type { SchemaTypeDefinition } from "sanity";

import { authorType } from "./author";
import { blockContentType } from "./blockContent";
import { categoryType } from "./category";
import { postType } from "./post";
import { landingType } from "./landing";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [authorType, blockContentType, categoryType, postType, landingType],
};