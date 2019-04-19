import Vue from 'vue'
import Router from 'vue-router'
import { routes } from './route-definitions'
import { canAccess } from '../utils'

Vue.use(Router)

// Loads Pages async
const load = (name) => () => import(`../views/${name}.vue`)

// define a router instance
const routerInstance = new Router({
  routes: [
    {
      ...routes.home,
      path: '/',
      component: load('Home')
    },
    {
      ...routes.about,
      path: '/about',
      component: load('About')
    },
    {
      ...routes.cpanel,
      path: '/cpanel',
      component: load('Cpanel')
    },
    {
      ...routes.login,
      path: '/login',
      component: load('Login')
    }
  ]
})

// Attaches a beforeEach hook that is called before every route is visited.
routerInstance.beforeEach((to, from, next) => {
  // if user has access
  if (canAccess(to.meta.auth)) {
    // continue as he has access
    next()
  } else {
    // if user does not have access and tries to go to Login page, go to home
    if (to.name === 'login') return next('/')
    // otherwise go to the login
    next({ name: 'login' })
  }

  // This goes through the matched routes from last to first, finding the closest route with a title.
  // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title)

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags)

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) document.title = nearestWithTitle.meta.title

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el))

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next()

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta')

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key])
    })

    // We use this to track which meta tags we create, so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '')

    return tag
  }).forEach(tag => document.head.appendChild(tag))
  // Add the meta tags to the document head.
})

export default routerInstance
