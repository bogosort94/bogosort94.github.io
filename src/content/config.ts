import { defineCollection, z } from 'astro:content';

// 博客集合：标签体系，不分栏；按篇决定是否有另一语言版本
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    description: z.string().optional(),
    // 本篇语言
    lang: z.enum(['zh', 'en']).default('zh'),
    // 另一语言版本的 slug；两篇互相指向，控制语言切换按钮
    translation: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
