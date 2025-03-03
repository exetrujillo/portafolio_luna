// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  // Desactivar SSR y habilitar Static Site Generation
  ssr: false,

  // Base URL para GitHub Pages (cambia "mi-repo" por el nombre de tu repositorio)
  app: {
    baseURL: '/mi-repo/'
  },
  nitro: {
    prerender: {
      routes: ['/'] // Renderiza la página de inicio
    }
  }
})