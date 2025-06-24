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
    // Increase chunk size warning limit (default is 500KB)
    chunkSizeWarningLimit: 1500, // 1.5MB

    // Rollup bundling options
    rollupOptions: {
      output: {
        // Strategy for splitting chunks
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Group vendor dependencies together
            return 'vendor';
          }
        },
        // You can also explicitly split specific large dependencies
        /*
        manualChunks: {
          react: ['react', 'react-dom'],
          icons: ['lucide-react'],
          // Add other large dependencies as needed
        }
        */
      }
    },

    // Modern browser targeting
    target: 'esnext',

    // Minification (enabled by default)
    minify: true,

    // Disable sourcemaps in production for smaller builds
    sourcemap: process.env.NODE_ENV !== 'production'
  }
})