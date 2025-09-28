import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({

  server : {
    proxy : {
      '/api' : {
        target: 'https://blood-banks-near-me.vercel.app',
        changeOrigin: true,
      }
    },
  },
  
  plugins: [react(), tailwindcss()  ],
})
