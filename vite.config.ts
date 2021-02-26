import {defineConfig} from 'vite'
import ViteComponents from 'vite-plugin-components'
import WindiCSS from 'vite-plugin-windicss'
import {resolve} from 'path'

export default defineConfig({
  plugins: [
    ViteComponents({
      dirs: [
        resolve('./components')
      ],
      transformer: 'vue2'
    }),
    WindiCSS({
      scan: {
        dirs: [
          resolve('./pages'),
          resolve('./components')
        ]
      }
    }),
  ]
}) 
