import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server:{
    host:"192.168.43.81",
    port:"5173",
    proxy: {
      "/api": {
        target: "http://10.20.97.131:8080",
        secure:false,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
      "/go": {
        target: "https://ids.cqupt.edu.cn",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/go/, ""),
      },
    }
  }
})
