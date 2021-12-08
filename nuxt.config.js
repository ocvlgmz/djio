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
    '@/assets/css/global.css', 
    '@/assets/css/transitions.css', 
    'animate.css/animate.min.css'
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
    { path: '/api', handler: '~/api/index.js' },
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // transpile: ['vue-google-api']
  },
  
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/vuetify'
  ],
  
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    [
      'storyblok-nuxt', 
      {
        accessToken: process.env.NODE_ENV==='production' ? process.env.STORYBLOK_PUB : process.env.STORYBLOK_PREV,
        cacheProvider: 'memory'
      }
    ]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // --- CHANGE
    // to http://localhost:3000/api/
    // for testing mail.js
    // ---
    baseURL: process.env.NODE_ENV === 'production' ? 'https://www.digitaljam.io/api/' : 'http://localhost:3000/',
    credentials: true
  },

  // Auth config
  auth: {
    redirect: {
      // login: '/login',
      // logout: '/',
      // callback: '/login',
      home: '/dashboard'
    },
    localStorage: false,
    strategies: {
      local: {
        endpoints: {
          login: { url: process.env.NODE_ENV === 'production' ? '/login' : '/api/login', method: 'post', propertyName: 'token' },
          logout: false,
          user: { url: process.env.NODE_ENV === 'production' ? '/user' : '/api/user', method: 'get', propertyName: 'user' }
        }
      }
    }
  },
  publicRuntimeConfig: {
    gapiClientId: process.env.GAPI_CLIENT_ID,
    gapiApiKey: process.env.GAPI_API_KEY,
  },
  privateRuntimeConfig: {
    gapiSecretKey: process.env.GAPI_SECRET_KEY,
  }
}