import vue from '@vitejs/plugin-vue'
import { getEnv } from './utils.js'
import { defineConfig } from 'vite'
export const buildDevConfig = async () => {
  return {
    base:await getEnv(),
    plugins: [vue()],
  }
}
