// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  // Importante: para GitHub Pages, necesitamos generar estático (no SSR)
  ssr: false,

  // Base URL para GitHub Pages
  app: {
    baseURL: '/portafolio_luna/', // Cambiado a solo /portafolio_luna/ sin /docs/
    buildAssetsDir: '/_nuxt/',
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/portafolio_luna/favicon.ico' }
      ]
    }
  },

  // Exponer la configuración al cliente
  runtimeConfig: {
    public: {
      baseUrl: '/portafolio_luna/' // Sin /docs/ para simplificar
    }
  },

  // Configuración de los módulos
  modules: [],

  // Configura Vite para usar la misma ruta base
  vite: {
    base: '/portafolio_luna/', // Mismo valor que en app.baseURL
  },

  // Configuración para generar un sitio estático completo
  nitro: {
    preset: 'github-pages',
    // No necesitamos prerender rutas específicas con preset github-pages
  }
})