import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  base: '/portafolio/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(import.meta.dirname, 'index.html'),
        restaurant: path.resolve(import.meta.dirname, 'proyectos/restaurante/index.html'),
        hotel: path.resolve(import.meta.dirname, 'proyectos/hotel/index.html'),
        taller: path.resolve(import.meta.dirname, 'proyectos/taller/index.html'),
      },
    },
  },
})
