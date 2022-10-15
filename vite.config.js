import { svelte } from '@sveltejs/vite-plugin-svelte'
import routify from '@roxi/routify/vite-plugin'
import { defineConfig } from 'vite'
import { mdsvex } from 'mdsvex'
import { sveltePreprocess } from 'svelte-preprocess/dist/autoProcess'


const production = process.env.NODE_ENV === 'production'

export default defineConfig({
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

    server: { port: 3000 },
})
