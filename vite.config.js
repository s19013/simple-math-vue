import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  outputDir: 'docs',
  publicPath: '/simple-math-vue/',
  // publicPath: './',
})
