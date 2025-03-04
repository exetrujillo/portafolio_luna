// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  ssr: true,

  // Base URL para GitHub Pages
  app: {
    baseURL: '/portafolio_luna/docs/',  // Esto es válido para la base URL en la sección app
    buildAssetsDir: '/_nuxt/' // Asegura que los assets estén en una carpeta con este prefijo
  },

  // Configuración de los módulos
  modules: [
    // Aquí incluir módulos
  ],

  build: {
    transpile: [],
  },

  vite: {
    base: '/portafolio_luna/docs/', // Ruta base para todos los recursos estáticos
  },

  nitro: {
    prerender: {
      routes: ['/'] // Renderiza la página de inicio
    }
  },

  // Exponer la configuración al cliente para acceder a app.baseURL
  runtimeConfig: {
    public: {
      app: {
        baseURL: '/portafolio_luna/docs/'
      }
    }
  }
})