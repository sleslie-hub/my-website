// vite.config.ts
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    hmr: {
      overlay: false,
    },
  },
  assetsInclude: ['**/*.html'],
});
