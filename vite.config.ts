import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import vike from 'vike/plugin'
import vercel from 'vite-plugin-vercel'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ViteImageOptimizer(), vercel(), vike({})],
})
