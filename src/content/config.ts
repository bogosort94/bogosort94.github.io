import { defineCollection, z } from 'astro:content';

// 博客集合：标签体系，不分栏；按篇决定是否有英文版
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    description: z.string().optional(),
    // 该篇是否有独立英文版（控制语言切换按钮）
    lang: z.enum(['zh', 'en']).default('zh'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
