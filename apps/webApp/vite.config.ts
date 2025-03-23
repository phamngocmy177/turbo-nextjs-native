
import react from '@vitejs/plugin-react'
import { tamaguiPlugin } from '@tamagui/vite-plugin'


// https://vite.dev/config/
export default {
  plugins: [
    react(),
    tamaguiPlugin(),
  ].filter(Boolean),
}