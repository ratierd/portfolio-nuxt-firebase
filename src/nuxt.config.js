module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  build: {
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  router: {
    middleware: 'i18n'
  },

  plugins: ['~/plugins/i18n.js'],

  generate: {
    dir: "../public",
    routes: [
      '/',
      '/resume',
      '/projects',
        '/projects/courseworkAndroidApp',
        '/projects/favouriteShowManager',
        '/projects/MOA',
        '/projects/pacman',
        '/projects/ruzzle',
        '/projects/viettech',
      '/contact',
      '/en',
      '/en/resume',
      '/en/projects',
        '/en/projects/courseworkAndroidApp',
        '/en/projects/favouriteShowManager',
        '/en/projects/MOA',
        '/en/projects/pacman',
        '/en/projects/ruzzle',
        '/en/projects/viettech',
      '/en/contact'
    ]
  },
}
