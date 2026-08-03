import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    titulo: z.string(),
    extracto: z.string(),
    fecha: z.string(),
    tiempo_lectura: z.string(),
    categoria: z.string(),
    etiquetas: z.array(z.string()),
  }),
});

export const collections = { blog };