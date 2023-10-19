import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/animal-fun-facts/',
  plugins: [react()],
})
