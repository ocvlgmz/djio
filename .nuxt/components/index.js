import { wrapFunctional } from './utils'

export { default as InfoBox } from '../..\\components\\global\\InfoBox.vue'
export { default as Author } from '../..\\components\\Author.vue'
export { default as Calendar } from '../..\\components\\Calendar.vue'
export { default as Contact } from '../..\\components\\Contact.vue'
export { default as Email } from '../..\\components\\Email.vue'
export { default as Footer } from '../..\\components\\Footer.vue'
export { default as Header } from '../..\\components\\Header.vue'
export { default as Hero } from '../..\\components\\Hero.vue'
export { default as LoginForm } from '../..\\components\\LoginForm.vue'
export { default as Logo } from '../..\\components\\Logo.vue'
export { default as Member } from '../..\\components\\Member.vue'
export { default as Observer } from '../..\\components\\Observer.vue'
export { default as PrevNext } from '../..\\components\\PrevNext.vue'
export { default as Search } from '../..\\components\\Search.vue'
export { default as Tagline } from '../..\\components\\Tagline.vue'
export { default as Title } from '../..\\components\\Title.vue'

export const LazyInfoBox = import('../..\\components\\global\\InfoBox.vue' /* webpackChunkName: "components/info-box" */).then(c => wrapFunctional(c.default || c))
export const LazyAuthor = import('../..\\components\\Author.vue' /* webpackChunkName: "components/author" */).then(c => wrapFunctional(c.default || c))
export const LazyCalendar = import('../..\\components\\Calendar.vue' /* webpackChunkName: "components/calendar" */).then(c => wrapFunctional(c.default || c))
export const LazyContact = import('../..\\components\\Contact.vue' /* webpackChunkName: "components/contact" */).then(c => wrapFunctional(c.default || c))
export const LazyEmail = import('../..\\components\\Email.vue' /* webpackChunkName: "components/email" */).then(c => wrapFunctional(c.default || c))
export const LazyFooter = import('../..\\components\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const LazyHeader = import('../..\\components\\Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const LazyHero = import('../..\\components\\Hero.vue' /* webpackChunkName: "components/hero" */).then(c => wrapFunctional(c.default || c))
export const LazyLoginForm = import('../..\\components\\LoginForm.vue' /* webpackChunkName: "components/login-form" */).then(c => wrapFunctional(c.default || c))
export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazyMember = import('../..\\components\\Member.vue' /* webpackChunkName: "components/member" */).then(c => wrapFunctional(c.default || c))
export const LazyObserver = import('../..\\components\\Observer.vue' /* webpackChunkName: "components/observer" */).then(c => wrapFunctional(c.default || c))
export const LazyPrevNext = import('../..\\components\\PrevNext.vue' /* webpackChunkName: "components/prev-next" */).then(c => wrapFunctional(c.default || c))
export const LazySearch = import('../..\\components\\Search.vue' /* webpackChunkName: "components/search" */).then(c => wrapFunctional(c.default || c))
export const LazyTagline = import('../..\\components\\Tagline.vue' /* webpackChunkName: "components/tagline" */).then(c => wrapFunctional(c.default || c))
export const LazyTitle = import('../..\\components\\Title.vue' /* webpackChunkName: "components/title" */).then(c => wrapFunctional(c.default || c))
