import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: Replace 'tima-2027' with your EXACT GitHub repository name
  // Make sure to keep the forward slashes before and after!
  base: '/tima-2027/', 
})
