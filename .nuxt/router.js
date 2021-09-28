import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _a0449b2c = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _62b7a10d = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _e361a7f8 = () => interopDefault(import('..\\pages\\client\\index.vue' /* webpackChunkName: "pages/client/index" */))
const _cd859f74 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _8752375c = () => interopDefault(import('..\\pages\\service.vue' /* webpackChunkName: "pages/service" */))
const _6490bdbe = () => interopDefault(import('..\\pages\\store.vue' /* webpackChunkName: "pages/store" */))
const _ca6dcbae = () => interopDefault(import('..\\pages\\terms-and-privacy.vue' /* webpackChunkName: "pages/terms-and-privacy" */))
const _153df276 = () => interopDefault(import('..\\pages\\test.vue' /* webpackChunkName: "pages/test" */))
const _d6815b50 = () => interopDefault(import('..\\pages\\blog\\index copy.vue' /* webpackChunkName: "pages/blog/index copy" */))
const _94c4100c = () => interopDefault(import('..\\pages\\blog\\author\\_author.vue' /* webpackChunkName: "pages/blog/author/_author" */))
const _6100ffc5 = () => interopDefault(import('..\\pages\\blog\\_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _41717f98 = () => interopDefault(import('..\\pages\\client\\_project.vue' /* webpackChunkName: "pages/client/_project" */))
const _60d4e5a2 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _a0449b2c,
    name: "about"
  }, {
    path: "/blog",
    component: _62b7a10d,
    name: "blog"
  }, {
    path: "/client",
    component: _e361a7f8,
    name: "client"
  }, {
    path: "/login",
    component: _cd859f74,
    name: "login"
  }, {
    path: "/service",
    component: _8752375c,
    name: "service"
  }, {
    path: "/store",
    component: _6490bdbe,
    name: "store"
  }, {
    path: "/terms-and-privacy",
    component: _ca6dcbae,
    name: "terms-and-privacy"
  }, {
    path: "/test",
    component: _153df276,
    name: "test"
  }, {
    path: "/blog/index%20copy",
    component: _d6815b50,
    name: "blog-index copy"
  }, {
    path: "/blog/author/:author?",
    component: _94c4100c,
    name: "blog-author-author"
  }, {
    path: "/blog/:slug",
    component: _6100ffc5,
    name: "blog-slug"
  }, {
    path: "/client/:project",
    component: _41717f98,
    name: "client-project"
  }, {
    path: "/",
    component: _60d4e5a2,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
