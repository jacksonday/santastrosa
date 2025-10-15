import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://santa-rosa.example.com',
  integrations: [tailwind()],
  server: {
    host: '0.0.0.0',
    port: 5000
  },
  vite: {
    server: {
      hmr: {
        clientPort: 443,
        protocol: 'wss'
      }
    }
  }
});