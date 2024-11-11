import { defineCollection, z } from "astro:content";
import jsonData from "@/data.json";
import type { TypeKey } from "@/components/TypePill/TypePill.astro";

const { types } = jsonData.pages.home.sections.works.data;

const works = defineCollection({
  schema: z.object({
    title: z.string(),
    types: z.array(z.enum(Object.keys(types) as [TypeKey, ...TypeKey[]])),
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
