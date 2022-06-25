export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  server: {
    port: 8080,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Portfolio & more | Tobias Kalmbach | Software Engineer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          "I'm Tobi, a software developer and student. Feel free to check out my projects or connect with me!",
      },
      { name: 'author', content: 'Tobias Kalmbach' },
      { name: 'application-name', content: 'Tobias Kalmbach' },

      { hid: 'og-type', property: 'og:type', content: 'website' },
      {
        hid: 'og-title',
        property: 'og:title',
        content: 'Portfolio & more | Tobias Kalmbach | Software Engineer',
      },
      {
        hid: 'og-description',
        property: 'og:description',
        content:
          "I'm Tobi, a software developer and student. Feel free to check out my projects or connect with me!",
      },
      { hid: 'og-url', property: 'og:url', content: 'https://kalmbach.dev/' },

      {
        hid: 'twitter-title',
        property: 'twitter:title',
        content: 'Portfolio & more | Tobias Kalmbach | Software Engineer',
      },
      {
        hid: 'twitter-description',
        property: 'twitter:description',
        content:
          "I'm Tobi, a software developer and student. Feel free to check out my projects or connect with me!",
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'canonical',
        href: 'https://kalmbach.dev/',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/style.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
