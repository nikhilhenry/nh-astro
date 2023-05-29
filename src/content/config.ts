import { z, defineCollection } from "astro:content";

// 2. Define a `type` and `schema` for each collection
const postCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    coverImg: z.string(),
    alt: z.string(),
    description: z.string(),
    collection: z.string().optional(),
    publishDate: z.string(),
  }),
});

export const collections = {
  posts: postCollection,
};
