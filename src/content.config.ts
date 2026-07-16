   import { defineCollection, z } from 'astro:content';

   const blogCollection = defineCollection({
     type: 'content',
     schema: z.object({
       title: z.string(),
       date: z.date(),
       image: z.string().optional(),
       excerpt: z.string().optional(),
       lang: z.enum(['en', 'ar', 'zh', 'fr']).default('en'),
     }),
   });

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    client: z.string().optional(),
    year: z.string().optional(),
    image: z.string().optional(),
    excerpt: z.string().optional(), // For the card preview
    body: z.string().optional(),    // For the full HTML/Markdown description
    tech: z.array(z.string()).optional(),
  }),
});

   export const collections = {
     blog: blogCollection,
     projects: projectsCollection,
   };