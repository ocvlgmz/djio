import colors from 'vuetify/es5/util/colors'

export default {
  // App settings
  ssr: true,
  target: 'server',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s',
    title: 'Digital Jam',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },

    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/global.css', '@/assets/css/transitions.css', 'animate.css/animate.min.css'
  ],
  pageTransition: 'fade',
  layoutTransition: 'fade',

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

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-plyr', mode: 'client' },
    { src: '~/plugins/vue-gapi', mode: 'client' },
  ],
  //added section to test nodemailer through middleware as suggested here:
  //https://blog.lichter.io/posts/emails-through-nuxtjs/
  serverMiddleware: [
    { path: '/api', handler: '~/api/crud.js' },
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // transpile: ['vue-google-api']
  },
  
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],
  
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // nuxt auth library
    '@nuxtjs/auth-next',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // baseURL: 'http://localhost:3000/api/',
    baseURL: process.env.NODE_ENV === 'production' ? 'https://www.digitaljam.io/api/' : 'http://localhost:3000/api/',
    credentials: true
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    nestedProperties: ['author.name']
  },

  //auth config,
  auth: {
    localStorage: false,
    strategies: {
      local: {
        endpoints: {
          login: { url: '/auth/login', method: 'post', propertyName: 'token' },
          logout: { url: '/auth/logout', method: 'get' },
          user: { url: '/user', method: 'get', propertyName: 'user' }
        }
      }
    }
  },
  
  // router: {
  //   middleware: ['auth']
  // }
  
  // publicRuntimeConfig: {
  //   baseURL: process.env.NODE_ENV === 'production' ? 'https://www.digitaljam.io' : 'http://locahost:3000',
  // },
  // privateRuntimeConfig: {
  //   // apiSecret: process.env.API_SECRET
  // }
}
