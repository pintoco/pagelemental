import { defineCollection, z } from "astro:content";

const proyectos = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      client: z.string().optional(),
      location: z.string(),
      services: z.array(z.string()),
      technologies: z.array(z.string()),
      coverImage: image(),
      gallery: z.array(image()).default([]),
      result: z.string(),
      date: z.coerce.date(),
      featured: z.boolean().default(false),
    }),
});

const blog = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      publishDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      author: z.string().default("Equipo Elemental Pro"),
      category: z.string(),
      tags: z.array(z.string()).default([]),
      coverImage: image(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { proyectos, blog };
