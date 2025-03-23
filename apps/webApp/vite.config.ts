import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // Configure alias for React and other shared dependencies
    alias: {
      'react': path.resolve('../../node_modules/react'),
      'react-dom': path.resolve('../../node_modules/react-dom'),
      'tamagui': path.resolve('../../node_modules/tamagui'),
      '@tamagui/config': path.resolve('../../node_modules/@tamagui/config'),
      '@tamagui/core': path.resolve('../../node_modules/@tamagui/core'),
      '@tamagui/get-button-sized': path.resolve('../../node_modules/@tamagui/get-button-sized'),
    }
  }
})
