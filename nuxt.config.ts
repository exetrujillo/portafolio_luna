// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  ssr: true,

  // Base URL para GitHub Pages
  app: {
    baseURL: '/'
  },
  nitro: {
    prerender: {
      routes: ['/'] // Renderiza la página de inicio
    }
  }
})
