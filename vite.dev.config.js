import vue from '@vitejs/plugin-vue'
import { getEnv } from './utils.js'
import { defineConfig } from 'vite'
export const buildDevConfig = defineConfig(() => {
  return {
    base:'/',
    plugins: [vue()],
  }
})
