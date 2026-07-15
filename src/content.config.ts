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
       client: z.string(),
       year: z.string(),
       image: z.string().optional(),
       description: z.string(),
       tech: z.array(z.string()).optional(),
     }),
   });

   export const collections = {
     blog: blogCollection,
     projects: projectsCollection,
   };