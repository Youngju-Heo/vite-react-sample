import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(
    {
      jsxImportSource: '@emotion/react',
    }
  )],
  server: {
    proxy: {
      "/api": {
        target: "https://httpbin.org",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""),
      }
    },
    watch: {
      usePolling: true,
    }
  }
})
