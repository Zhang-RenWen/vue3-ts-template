// Plugins
import vue from '@vitejs/plugin-vue';
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';
import ViteFonts from 'unplugin-fonts/vite';

// Utilities
import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';
import 'dotenv/config';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
    vuetify({
      autoImport: true,
    }),
    ViteFonts({
      google: {
        families: [
          {
            name: 'Roboto',
            styles: 'wght@100;300;400;500;700;900',
          },
        ],
      },
    }),
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
    extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue'],
  },
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    proxy: {
      '/api': {
        target: `${process.env.VITE_APP_BASE_URL}/`,
        changeOrigin: true, // 是否跨域
        secure: false, // target https 要開啟
        // rewrite: (path) => path.replace(/^\/api/, ''),
        // cookiePathRewrite: {
        //   '/api': '/',
        // },
      },
      // '/KYCSW': {
      //   target: `${process.env.VITE_APP_BASE_URL}/`,
      //   changeOrigin: true, // 是否跨域
      //   secure: false, // target https 要開啟
      //   // rewrite: (path) => path.replace(/^\/KYCSW/, ''),
      //   // cookiePathRewrite: {
      //   //   '/KYCSW': '/',
      //   // },
      // },
    },
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash:8].[ext]',
        chunkFileNames: 'chunks/[name].[hash:8].js',
        entryFileNames: 'entries/[name].[hash:8].js',
      },
    },
    sourcemap: false,
  },
});
