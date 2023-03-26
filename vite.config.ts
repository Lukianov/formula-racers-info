import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  base: '/formula-racers-info/',
  resolve: {
    alias: {
      '@': path.resolve('./src/components'),
      'racersImages': path.resolve('./assets/racersImages')
    }
  }
})
