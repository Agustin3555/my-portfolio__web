import { defineCollection, z } from "astro:content";

const works = defineCollection({
  schema: z.object({
    title: z.string(),
    types: z.array(
      z.enum(["Web", "Web App", "Mobile App", "API", "Data Base", "Varios"]),
    ),
    techs: z.array(
      z.object({
        name: z.string(),
        version: z.string().optional(),
      }),
    ),
    imgs: z.array(
      z.object({
        file: z.string(),
        alt: z.string(),
      }),
    ),
  }),
});

export const collections = { works };
