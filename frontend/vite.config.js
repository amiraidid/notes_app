import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy:{
      // "/notes": {
      //   target: "http://localhost:8000/"
      // },
      // "/auth": {
      //   target: "http://localhost:8000/"
      // }
    }
  }
})
