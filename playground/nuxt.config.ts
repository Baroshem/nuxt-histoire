import { defineNuxtConfig } from 'nuxt/config'
import MyModule from '..'

export default defineNuxtConfig({
  modules: [
    MyModule
  ],
  histoire: {
    configuration: {
      viteIgnorePlugins: [
        'vite:html',
        'vite-plugin-some-stuff',
      ],
    }
  }
})
