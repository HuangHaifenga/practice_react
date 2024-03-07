import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import visualizer from 'rollup-plugin-visualizer';
import { VitePWA } from 'vite-plugin-pwa';


const plugins = [];


if (process.env.NODE_ENV === 'production') {
  plugins.push(
      visualizer({
        open: true,
        gzipSize: true,
        brotliSize: true,
      }),
  );
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [...plugins, react(), VitePWA({})],
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@homepage': path.resolve(__dirname, 'src/pages/homepage'),
      '@login': path.resolve(__dirname, 'src/pages/login'),
      '@mine': path.resolve(__dirname, 'src/pages/mine'),
      'antd/dist/antd.less$': path.resolve(__dirname, './src/antd.less'),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
});