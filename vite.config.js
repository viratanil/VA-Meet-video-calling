import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
  ],
  server: {
    allowedHosts: ["6f0c-2409-40e3-58-963e-7f20-407-22c9-a6e9.ngrok-free.app"],
  },
})
