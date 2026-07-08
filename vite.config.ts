import { devtools } from '@tanstack/devtools-vite'
import { defineConfig } from 'vite'

import { tanstackRouter } from '@tanstack/router-plugin/vite'

import tailwindcss from '@tailwindcss/vite'
import viteReact from '@vitejs/plugin-react'
import path from 'path'
import svgr from 'vite-plugin-svgr'

const config = defineConfig({
  resolve: {
    tsconfigPaths: true, alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    devtools(),
    tailwindcss(),
    tanstackRouter({ target: 'react', autoCodeSplitting: true }),
    viteReact(),
    svgr(),
  ],
})

export default config
