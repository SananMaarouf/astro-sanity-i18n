export type SanityPost = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: 'post';
  _updatedAt: string;
  author: {
    _ref: string;
    _type: 'reference';
  };
  body: any[]; // Replace 'any' with a more specific type if known
  categories: any[]; // Replace 'any' with a more specific type if known
  mainImage: {
    _type: 'image';
    alt: string;
    asset: any; // Replace 'any' with a more specific type if known
  };
  publishedAt: string;
  slug: {
    _type: 'slug';
    current: string;
  };
  title: string;
};
