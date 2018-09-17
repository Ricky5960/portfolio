const { resolve } = require('path')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Portfolio',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Nuxt.js project'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  css: [
    // node.js module but we specify the lang
    { src: 'bulma', lang: 'sass' },
    // Css file in the project
    // It is important to give an absolute path
    resolve(__dirname, 'css/main.css')
  ],
  /*
  ** Customize the progress bar color
  */
  loading: {color: '#3B8070'},
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, {isDev, isClient}) {
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
  /*
  ** Cached Components
  */
  cache: true,
  /*
  ** Custom Loading
  */
  loading: 'components/loading.vue'
}

