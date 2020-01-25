const dynamicRoutes = async () => {
  const fs = require('fs')

  const blogFetch = fs.readdirSync('./assets/content/blog').map(file => {
    return {
      route: `/blog/${file.slice(0, -5)}/`,
      payload: require(`./assets/content/blog/${file}`)
    }
  })

  const projectsFetch = fs
    .readdirSync('./assets/content/projects')
    .map(file => {
      return {
        route: `/projects/${file.slice(0, -5)}/`,
        payload: require(`./assets/content/projects/${file}`)
      }
    })

  const routes = blogFetch.concat(projectsFetch)

  return routes
}
export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: '8025 studio - Creative Digital Design studio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        src:
          'https://polyfill.io/v2/polyfill.min.js?features=IntersectionObserver'
      }
    ]
  },
  generate: {
    routes: dynamicRoutes
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
      src: '~/plugins/locomotiveScroll.js',
      ssr: false
    }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/markdownit'],
  markdownit: {
    injected: true
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
