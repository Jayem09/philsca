// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['lucide-react'] // Explicitly include for dependency optimization
  },
  build: {
    rollupOptions: {
      external: [], // Remove any 'lucide-react' from external if present
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('lucide-react')) {
              return 'icons'; // Put lucide in its own chunk
            }
            return 'vendor';
          }
        }
      }
    }
  }
})