import { z, defineCollection } from "astro:content";

// 2. Define a `type` and `schema` for each collection
const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    coverImg: z.string(),
    alt: z.string(),
    description: z.string(),
    publishDate: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
};
