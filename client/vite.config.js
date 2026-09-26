import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/shadow_tour_packages/', // Replace with your exact GitHub repository name
})