import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'ecommerce-shop',
  plugins: [react()],
  resolve: {
    alias: {
      assets: '/src/assets',
      components: '/src/components',
      constants: '/src/constants',
      styles: '/src/styles',
      pages: '/src/pages',
      contexts: '/src/contexts',
      utilities: '/src/utilities',
      hooks: '/src/hooks',
      types: '/src/types',
    },
  },
});
