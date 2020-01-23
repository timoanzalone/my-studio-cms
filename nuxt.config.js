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
    title: '8025studio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
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
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
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
