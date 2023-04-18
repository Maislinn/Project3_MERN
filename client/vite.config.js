import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    optimizeDeps: {
      include: ['linked-dep'],
    },
    build: {
      commonjsOptions: {
        include: [/linked-dep/, /node_modules/],
      },
    },
  plugins: [react()],
})
