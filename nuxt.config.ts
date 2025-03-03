// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  ssr: true,

  // Base URL para GitHub Pages
  app: {
    baseURL: '/portafolio_luna/',  // Esto es válido para la base URL en la sección app
  },

  // Configuración de los módulos (ahora todos se agregan aquí)
  modules: [
    // Aquí incluir módulos
  
  ],

  build: {
    // Aquí puedes dejar configuraciones específicas de build como transpile
    transpile: [],
  },

  vite: {
    // Aquí se usa la propiedad `base` en lugar de `publicPath`
    base: '/portafolio_luna/', // Ruta base para todos los recursos estáticos
    build: {
      assetsDir: '_nuxt', // Establece la carpeta de los activos generados
    }
  },

  nitro: {
    prerender: {
      routes: ['/'] // Renderiza la página de inicio
    }
  }
})
