import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/tailwindPractice/', // Replace with your repo name
  build: {
    outDir: 'dist',
  },
});
