import { defineConfig } from 'vite'
import { mdsvex } from 'mdsvex'
import path from 'path'
import routify from '@roxi/routify/vite-plugin'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { sveltePreprocess } from 'svelte-preprocess/dist/autoProcess'

const production = process.env.NODE_ENV === 'production'

export default defineConfig({
  resolve: {
    alias: {
      $lib: path.resolve('./src/lib'),
      $asset: path.resolve('./src/asset'),
      $store: path.resolve('./src/store')
    }
  },
clearScreen: false,

plugins: [
    routify({
        devHelper: !production,
    }),
    svelte({
        emitCss: false,
        compilerOptions: {
            dev: !production,
        },
        extensions: ['.md', '.svelte'],
        preprocess: [mdsvex({ extension: 'md' }), sveltePreprocess({
            scss: {
                prependData: '@import "./src/asset/css/global.scss";'
            }
            })],
    }),
],

optimizeDeps: {
  include: ["highlight.js", "highlight.js/lib/core"],
},
server: { port: 3000 },
})
