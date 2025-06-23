import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
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
        manualChunks: (id) => {
          // More flexible manual chunking strategy
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendor';
            }
            if (id.includes('lodash')) {
              return 'lodash-vendor';
            }
            if (id.includes('axios')) {
              return 'axios-vendor';
            }
            // Group other node_modules into vendor chunk
            return 'vendor';
          }
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },
  },
  optimizeDeps: {
    include: ['lodash', 'axios'], // Ensure lodash and axios are pre-bundled
  },
});
