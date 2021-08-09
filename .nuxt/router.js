import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2bda33aa = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _2f1e324d = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _49532578 = () => interopDefault(import('..\\pages\\client\\index.vue' /* webpackChunkName: "pages/client/index" */))
const _1539b186 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _2b381592 = () => interopDefault(import('..\\pages\\service.vue' /* webpackChunkName: "pages/service" */))
const _3ee58204 = () => interopDefault(import('..\\pages\\store.vue' /* webpackChunkName: "pages/store" */))
const _b864892e = () => interopDefault(import('..\\pages\\terms-and-privacy.vue' /* webpackChunkName: "pages/terms-and-privacy" */))
const _332f5d85 = () => interopDefault(import('..\\pages\\test.vue' /* webpackChunkName: "pages/test" */))
const _74018918 = () => interopDefault(import('..\\pages\\blog\\index copy.vue' /* webpackChunkName: "pages/blog/index copy" */))
const _7ceff93a = () => interopDefault(import('..\\pages\\blog\\author\\_author.vue' /* webpackChunkName: "pages/blog/author/_author" */))
const _2d679105 = () => interopDefault(import('..\\pages\\blog\\_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _20b3b658 = () => interopDefault(import('..\\pages\\client\\_project.vue' /* webpackChunkName: "pages/client/_project" */))
const _4b920e6f = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _2bda33aa,
    name: "about"
  }, {
    path: "/blog",
    component: _2f1e324d,
    name: "blog"
  }, {
    path: "/client",
    component: _49532578,
    name: "client"
  }, {
    path: "/login",
    component: _1539b186,
    name: "login"
  }, {
    path: "/service",
    component: _2b381592,
    name: "service"
  }, {
    path: "/store",
    component: _3ee58204,
    name: "store"
  }, {
    path: "/terms-and-privacy",
    component: _b864892e,
    name: "terms-and-privacy"
  }, {
    path: "/test",
    component: _332f5d85,
    name: "test"
  }, {
    path: "/blog/index%20copy",
    component: _74018918,
    name: "blog-index copy"
  }, {
    path: "/blog/author/:author?",
    component: _7ceff93a,
    name: "blog-author-author"
  }, {
    path: "/blog/:slug",
    component: _2d679105,
    name: "blog-slug"
  }, {
    path: "/client/:project",
    component: _20b3b658,
    name: "client-project"
  }, {
    path: "/",
    component: _4b920e6f,
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
