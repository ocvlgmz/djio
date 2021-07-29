import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  InfoBox: () => import('../..\\components\\global\\InfoBox.vue' /* webpackChunkName: "components/info-box" */).then(c => wrapFunctional(c.default || c)),
  Author: () => import('../..\\components\\Author.vue' /* webpackChunkName: "components/author" */).then(c => wrapFunctional(c.default || c)),
  Calendar: () => import('../..\\components\\Calendar.vue' /* webpackChunkName: "components/calendar" */).then(c => wrapFunctional(c.default || c)),
  Contact: () => import('../..\\components\\Contact.vue' /* webpackChunkName: "components/contact" */).then(c => wrapFunctional(c.default || c)),
  Email: () => import('../..\\components\\Email.vue' /* webpackChunkName: "components/email" */).then(c => wrapFunctional(c.default || c)),
  Footer: () => import('../..\\components\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c)),
  Header: () => import('../..\\components\\Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c)),
  Hero: () => import('../..\\components\\Hero.vue' /* webpackChunkName: "components/hero" */).then(c => wrapFunctional(c.default || c)),
  LoginForm: () => import('../..\\components\\LoginForm.vue' /* webpackChunkName: "components/login-form" */).then(c => wrapFunctional(c.default || c)),
  Logo: () => import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c)),
  Member: () => import('../..\\components\\Member.vue' /* webpackChunkName: "components/member" */).then(c => wrapFunctional(c.default || c)),
  Observer: () => import('../..\\components\\Observer.vue' /* webpackChunkName: "components/observer" */).then(c => wrapFunctional(c.default || c)),
  PrevNext: () => import('../..\\components\\PrevNext.vue' /* webpackChunkName: "components/prev-next" */).then(c => wrapFunctional(c.default || c)),
  Search: () => import('../..\\components\\Search.vue' /* webpackChunkName: "components/search" */).then(c => wrapFunctional(c.default || c)),
  Tagline: () => import('../..\\components\\Tagline.vue' /* webpackChunkName: "components/tagline" */).then(c => wrapFunctional(c.default || c)),
  Title: () => import('../..\\components\\Title.vue' /* webpackChunkName: "components/title" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
