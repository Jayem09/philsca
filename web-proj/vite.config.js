// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  optimizeDeps: {
    include: ['lucide-react']
  },
  build: {
    // 🔥 CRITICAL: Explicitly set output directory
    outDir: 'dist',
    // 🧹 Ensure dist is cleaned before each build
    emptyOutDir: true,

    rollupOptions: {
      external: [],
      output: {
        // ✨ Asset naming pattern
        assetFileNames: 'assets/[name]-[hash][extname]',
        // ✨ Chunk naming pattern
        chunkFileNames: 'assets/[name]-[hash].js',
        // ✨ Entry file naming pattern
        entryFileNames: 'assets/[name]-[hash].js',

        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('lucide-react')) {
              return 'icons';
            }
            return 'vendor';
          }
        }
      }
    }
  }
})