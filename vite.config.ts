import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// Repo is named swastik-git.github.io (user site), so assets are served from the root.
export default defineConfig({
  base: '/',
  plugins: [react()],
})
