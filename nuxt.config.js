import colors from 'vuetify/es5/util/colors'
require('dotenv').config()

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: true,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - mislav-template',
    title: 'mislav-template',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200&display=swap' },
      { rel: 'stylesheet',
      href: "https://fonts.googleapis.com/css2?family=Raleway:wght@600&display=swap" },
      
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/assets/css/main.css',
    { src: './plugins/vue-carousel.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/fontawesome',
    "@nuxtjs/svg",
    '@nuxtjs/google-fonts',
    '@nuxtjs/style-resources'
  ],
  fontawesome: {
    icons: {
      solid: true
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/dotenv',
    ['nuxt-gmaps', { key: process.env.MAPS_EMBED_API }],
    '@nuxtjs/i18n',
  
  ],

  i18n: {
    locales: ['en', 'hr', 'de'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          welcome: 'Welcome'
        },
        hr: {
          welcome: 'Dobrodošli'
        },
        de: {
          welcome: 'Willkommen'
        }
      }
    }
  },
  
  styleResources: {
    scss: [
        '~/assets/scss/main.scss',
        '~assets/scss/mixins.scss',
    ]
  },
  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  
}
