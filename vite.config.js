import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mui from '@mui/material'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),mui()],
})
