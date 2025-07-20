import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // 👈 REQUIRED for Vercel routing to work correctly
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

