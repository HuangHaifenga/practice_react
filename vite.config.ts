import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/scss/fontface.scss";
          @import "./src/scss/scrollbar.scss";
        `
      }
    }
  },
  server: {
    host: '0.0.0.0',
    port: 8080,
  },
  build: {
    commonjsOptions: {
      include: /node_modules|superapi/
    },
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, "index.html"),
        // subpage: path.resolve(__dirname, "subpage.html"),
      }
    },
    outDir: "factory-front"
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  base: "/"
})
