import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// 部署到 https://bogosort94.github.io （root，绑定自定义域名后再调整）
export default defineConfig({
  site: 'https://bogosort94.github.io',
  integrations: [mdx()],
});
