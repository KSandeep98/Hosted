import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),],
  assetsInclude: ["**/*.JPG"],
  server:{
    host:'192.168.29.76',
    port:3000
  }
  
})
