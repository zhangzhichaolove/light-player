import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import Markdown from "vite-plugin-md";
import dts from 'vite-plugin-dts'
import postcssMixins from 'postcss-mixins'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    include: [/\.vue$/, /\.md$/],
  }),
  Markdown(),
  dts()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'light-player',
      // fileName: (format) => `build.${format}.ts`
      fileName: (format) => `light-player.${format}.js`
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  css: {
    postcss: {
      plugins: [postcssMixins]
    }
  },
  server: {
    host: "0.0.0.0",
    port: 9191,
    open: true
  }
})
