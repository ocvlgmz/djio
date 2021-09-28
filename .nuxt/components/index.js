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
export { default as ProjectForm } from '../..\\components\\ProjectForm.vue'
export { default as Search } from '../..\\components\\Search.vue'
export { default as Tagline } from '../..\\components\\Tagline.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
