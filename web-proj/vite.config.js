import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      overlay: false,
    },
  },
  build: {
    chunkSizeWarningLimit: 2000, // Set chunk size warning limit to 2000 KB (2MB)
    rollupOptions: {
      output: {
        manualChunks: {
          // Split your largest dependencies into separate chunks
          react: ['react', 'react-dom'],
          // Only include packages that are actually installed
          // vendor: ['lodash', 'axios'], // Remove this line or only include installed packages
        },
      },
    }
  }
})