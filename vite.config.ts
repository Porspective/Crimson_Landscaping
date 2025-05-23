import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Crimson_Landscaping/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  }
});