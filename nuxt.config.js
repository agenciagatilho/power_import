export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: ' Viener | Distribuindo energia, gerando conexões.',
    htmlAttrs: {
      lang: 'pt-br'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, user-scalable=no' },
      { name: 'format-detection', content: 'telephone=no' },

      { 'http-equiv': 'Content-Type', content: 'text/html; charset=utf-8' },
      { 'http-equiv': 'Content-Language', content: 'pt-BR' },

      { name: 'robots', content: 'index,follow' },
      { name: 'author', content: 'Viener' },
      { name: 'copyright', content: 'Viener' },

      { name: 'title', content: ' Viener | Distribuindo energia, gerando conexões.' },
      { name: 'description', content: 'Trabalhamos com energias renováveis, levando às pessoas uma fonte inesgotável de benefícios e ajudando a construir um futuro melhor e mais sustentável.' },

      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://viener.com.br/' },
      { property: 'og:title', content: ' Viener | Distribuindo energia, gerando conexões.' },
      { property: 'og:description', content: 'Trabalhamos com energias renováveis, levando às pessoas uma fonte inesgotável de benefícios e ajudando a construir um futuro melhor e mais sustentável.' },

      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:url', content: 'https://viener.com.br/' },
      { property: 'twitter:title', content: ' Viener | Distribuindo energia, gerando conexões.' },
      { property: 'twitter:description', content: 'Trabalhamos com energias renováveis, levando às pessoas uma fonte inesgotável de benefícios e ajudando a construir um futuro melhor e mais sustentável.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ],
    script: [
      {
        hid: 'font-awesome-brands',
        src: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/js/brands.min.js',
        defer: true
      },
      {
        hid: 'font-awesome-solid',
        src: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/js/solid.min.js',
        defer: true
      },
      {
        hid: 'font-awesome-regular',
        src: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/js/regular.min.js',
        defer: true
      },

      {
        hid: 'font-awesome',
        src: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/js/fontawesome.min.js',
        defer: true
      }
    ]
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'assets/css/main.scss',
    'assets/css/fonts.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/GMT.js', mode: 'client' },
    { src: '~/plugins/sendEmail.js', mode: 'client' },
    { src: '~/plugins/getCities.js', mode: 'client' },
    { src: '~/plugins/firebase.js', mode: 'client' },
    { src: '~/plugins/pinia.js' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    '~/components/atoms',
    '~/components/molecules',
    '~/components/organisms'
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    'nuxt-windicss',
    '@nuxtjs/device',
    '@nuxtjs/svg',
    '@nuxtjs/composition-api/module',
    '@braid/vue-formulate/nuxt'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxt/image',
    '@nuxtjs/axios'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios

  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
