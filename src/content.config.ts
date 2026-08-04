import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    titulo: z.string(),
    extracto: z.string(),
    fecha: z.string(),
    categoria: z.string(),
    etiquetas: z.array(z.string()),
    link_original: z.string().url().optional(), // <-- AÑADE ESTA LÍNEA
  }),
});

export const collections = { blog };