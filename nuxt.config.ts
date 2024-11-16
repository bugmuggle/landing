// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devServer: {
    port: 9001
  },
  devtools: { enabled: true },
  app: {
    head: {
      "meta": [
        {
          "name": "viewport",
          "content": "width=device-width, initial-scale=1"
        },
        {
          "charset": "utf-8"
        }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },
  },
  modules: ['@nuxt/ui', '@nuxt/image', '@nuxt/fonts', '@nuxt/icon'],
  colorMode: {
    preference: 'light'
  },
  css: ['~/assets/main.css']
})