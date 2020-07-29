export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ['@/plugins/composition-api.js', '@/plugins/vuelidate.js'],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/firebase',
  ],
  firebase: {
    config: {
      apiKey: 'AIzaSyB1KxXuIzBmSpZuk1Z8YXIcK_6dmLNIMUI',
      authDomain: 'days-of-a5da8.firebaseapp.com',
      databaseURL: 'https://days-of-a5da8.firebaseio.com',
      projectId: 'days-of-a5da8',
      storageBucket: 'days-of-a5da8.appspot.com',
      messagingSenderId: '971937063349',
      appId: '1:971937063349:web:2164a8901b4fa70baf79fc',
    },
    services: {
      auth: true,
    },
  },
  /*
  ** firebase config
  */
  firebase: {
    config: {
      apiKey: "AIzaSyB1KxXuIzBmSpZuk1Z8YXIcK_6dmLNIMUI",
      authDomain: "days-of-a5da8.firebaseapp.com",
      databaseURL: "https://days-of-a5da8.firebaseio.com",
      projectId: "days-of-a5da8",
      storageBucket: "days-of-a5da8.appspot.com",
      messagingSenderId: "971937063349",
      appId: "1:971937063349:web:2164a8901b4fa70baf79fc"
      },
      services: {
        auth: true // Just as example. Can be any other service.
      }
    },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
}
