<template>
  <div :class="`${target}`"></div>
</template>

<script>
export default {
  props: ['target'],
  data() {
    return {
      observer: null,
    }
  },
  mounted() {
    this.observer = new IntersectionObserver((this.onIntersect), {
      root: null,
      rootMargin: '0px 0px 0px 0px',
      threshold: 0.5,
    })
    document.querySelectorAll('.anim').forEach(
      el => {this.observer.observe(el)}
    )

    // this.observer.observe(this.$el)
  },
  destroyed() {
    this.observer.disconnect()
    this.observer = null
  },
  methods: {
    onIntersect(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting){
          switch(entry.target.classList.contains('anim')) {
            case (entry.target.classList.contains('head-shake')):
              // console.log('case = fil')
              entry.target.classList.add('animate__animated', 'animate__headShake', 'animate__delay-1s')
              entry.target.classList.remove('hidden')
              observer.unobserve(entry.target)
              break;
            case (entry.target.classList.contains('fade-in-left')):
              // console.log('case = fil')
              entry.target.classList.add('animate__animated', 'animate__fadeInLeft')
              entry.target.classList.remove('hidden')
              observer.unobserve(entry.target)
              break;
            case (entry.target.classList.contains('fade-in-right')):
              // console.log('case = fir')
              entry.target.classList.add('animate__animated', 'animate__fadeInRight')
              entry.target.classList.remove('hidden')
              observer.unobserve(entry.target)
              break;
            case (entry.target.classList.contains('fade-in')):
              // console.log('case = fi')
              entry.target.classList.add('animate__animated', 'animate__fadeIn')
              entry.target.classList.remove('hidden')
              observer.unobserve(entry.target)
              break;
            case (entry.target.classList.contains('fade-in-up')):
              // console.log('case = fiu')
              entry.target.classList.add('animate__animated', 'animate__fadeInUp')
              entry.target.classList.remove('hidden')
              observer.unobserve(entry.target)
              break;
            case (entry.target.classList.contains('fade-in-down')):
              // console.log('case = fid')
              entry.target.classList.add('animate__animated', 'animate__fadeInDown')
              entry.target.classList.remove('hidden')
              observer.unobserve(entry.target)
              break;
          }
        } 
      })
    }
  }
}
</script>