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
        pos: path.resolve(import.meta.dirname, 'proyectos/punto-de-venta/index.html'),
        confeccion: path.resolve(import.meta.dirname, 'proyectos/confeccion/index.html'),
        editorial: path.resolve(import.meta.dirname, 'proyectos/produccion-editorial/index.html'),
        crm: path.resolve(import.meta.dirname, 'proyectos/crm/index.html'),
        erp: path.resolve(import.meta.dirname, 'proyectos/erp/index.html'),
      },
    },
  },
})
