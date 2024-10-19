import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import dotenv from 'dotenv';

dotenv.config();

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '/api': {
        //target: "http://localhost:8080.local",
        //target: "http://172.18.48.1:8081",
        target: process.env.VITE_API_URL,
        changeOrigin: true,
        secure: false,
        ws: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    },
    host: true
  }
})
