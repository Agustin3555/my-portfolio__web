import { defineCollection, z } from "astro:content";
import type { TypeKey } from "@/components/TypePill/TypePill.astro";
import type { TagKey } from "@/components/TagPill/TagPill.astro";
import jsonData from "./data.json";

const { types, tags } = jsonData.pages.home.sections.experiences.data;

const experiences = defineCollection({
  schema: z.object({
    title: z.string(),
    jobPosition: z.string().optional(),
    company: z.string().optional(),
    startedAt: z.string().date(),
    endedAt: z.string().date().optional(),
    type: z.enum(Object.keys(types) as [TypeKey, ...TypeKey[]]),
    tags: z.array(z.enum(Object.keys(tags) as [TagKey, ...TagKey[]])),
    techs: z.array(
      z.object({
        name: z.string(),
        version: z.string().optional(),
      }),
    ),
    links: z
      .object({
        repo: z
          .object({
            host: z.enum(["github", "bitbucket"]),
            url: z.string(),
          })
          .optional(),
        others: z
          .array(
            z.object({
              title: z.string(),
              url: z.string(),
            }),
          )
          .optional(),
      })
      .optional(),
    size: z.tuple([z.number(), z.number()]).optional(),
    imgs: z.array(
      z.object({
        file: z.string(),
        alt: z.string(),
      }),
    ),
  }),
});

export const collections = { experiences };
