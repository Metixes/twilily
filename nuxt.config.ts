// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      // script: [
      //   { src: 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js' },
      //   { src: '/node_modules/@lottiefiles/lottie-player/dist/lottie-player.js' }
      // ],
      link: [
        // { rel: 'stylesheet', href: 'https://awesome-lib.css' }
      ],
      style: [
        // <style type="text/css">:root { color: red }</style>
      ],
      noscript: [
      ]
    }
  },
  modules: [
    '@vueuse/nuxt',
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxt/image",
    "@nuxt/icon",
  ],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  }
})