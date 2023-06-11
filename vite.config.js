import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  publicPath: '/simple-math-vue/',
  // publicPath: './',
  build: {
    outDir: "docs",
  },
})
