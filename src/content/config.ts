// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define a schema for each collection you'd like to validate.
const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.string().or(z.date()).transform(str => new Date(str)),
    description: z.string(),
    author: z.string(),
    image: z.object({ src: z.string(), alt: z.string()}).optional(),
    tags: z.array(z.string()),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  'blog': blogCollection,
};