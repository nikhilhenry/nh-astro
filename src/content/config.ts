import { z, defineCollection } from "astro:content";

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

const projectCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    coverImg: z.string(),
    alt: z.string(),
    publishDate: z.string(),
    source: z.string().optional(),
    live: z.string().optional(),
    description: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
  project: projectCollection,
};
