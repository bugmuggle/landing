// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devServer: {
    port: 9001
  },
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/image', '@nuxt/fonts', '@nuxt/icon'],
  colorMode: {
    preference: 'light'
  },
  css: ['~/assets/main.css']
})