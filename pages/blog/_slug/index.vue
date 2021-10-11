<template>
  <v-container fluid v-editable="blok">
    <Hero :slug="title" />
    <v-row class="ma-4">
      <v-col class="pa-4">
        <v-card flat > 
            <v-img :style="{backgroundImage: `url(${thumbnail})`}" class="thumbnail"></v-img>
            <v-card-title class="dj-blue">
                {{title}} 
            </v-card-title>
            <v-card-text class="dj-blue">
                {{summary}}
            </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
  export default {
    data() {
      return {
        observer:null,
        searchQuery: '',
      }
    },
    asyncData (context) {
      return context.app.$storyapi
        .get('cdn/stories/blog/'+context.params.slug, {
          version: 'published',
          // starts_with: 'blog/'
        })
        .then((res) => {
          console.log(res.data)
          return {
            blok: res.data.story.content,
            slug: res.data.story.slug,
            title: res.data.story.content.title,
            summary: res.data.story.content.summary,
            thumbnail: res.data.story.content.thumbnail,
          }
        })
        .catch((res) => {
          if (!res.response) {
            console.error(res)
            context.error({ statusCode: 404, message: 'Failed to receive content form api' })
          } else {
            console.error(res.response.data)
            context.error({ statusCode: res.response.status, message: res.response.data })
          }
        })
    },
    watch: {
      async searchQuery(searchQuery) {
        if (searchQuery) {
          this.articles = []
          }
          this.articles = await this.$content('articles')
            .limit(6)
            .search(searchQuery)
            .only(['title', 'description', 'img', 'slug', 'author','tags'])
            .sortBy('createdAt', 'asc')
            .fetch()
          // return
      }
    },
    mounted() {
      this.$storybridge(() => {
        const storyblokInstance = new StoryblokBridge()
  
        // Listen to Storyblok's Visual Editor event
        storyblokInstance.on(['input', 'published', 'change'], (event) => {
          if (event.action == 'input') {
            if (event.story.id === this.story.id) {
              this.story.content = event.story.content
            }
          } else {
            this.$nuxt.$router.go({
              path: this.$nuxt.$router.currentRoute,
              force: true,
            })
          }
          // reload page if save or publish is clicked
          location.reload()
        })
      }, (error) => {
        console.error(error)
      })
      this.observer = new IntersectionObserver((this.onIntersect), {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.75,
      })
      document.querySelectorAll('.anim').forEach(
        el => {this.observer.observe(el)}
      )
    },
    methods: {
      onIntersect(entries, observer) {
        entries.forEach(entry => {
          if (entry.isIntersecting){
            switch(entry.target.classList.contains('anim')) {
              case (entry.target.classList.contains('head-shake')):
                console.log('case = fil')
                entry.target.classList.add('animate__animated', 'animate__headShake', 'animate__delay-1s')
                entry.target.classList.remove('hidden')
                observer.unobserve(entry.target)
                break;
              case (entry.target.classList.contains('fade-in-left')):
                console.log('case = fil')
                entry.target.classList.add('animate__animated', 'animate__fadeInLeft')
                entry.target.classList.remove('hidden')
                observer.unobserve(entry.target)
                break;
              case (entry.target.classList.contains('fade-in-right')):
                console.log('case = fir')
                entry.target.classList.add('animate__animated', 'animate__fadeInRight')
                entry.target.classList.remove('hidden')
                observer.unobserve(entry.target)
                break;
              case (entry.target.classList.contains('fade-in')):
                console.log('case = fi')
                entry.target.classList.add('animate__animated', 'animate__fadeIn')
                entry.target.classList.remove('hidden')
                observer.unobserve(entry.target)
                break;
              case (entry.target.classList.contains('fade-in-up')):
                console.log('case = fiu')
                entry.target.classList.add('animate__animated', 'animate__fadeInUp')
                entry.target.classList.remove('hidden')
                observer.unobserve(entry.target)
                break;
              case (entry.target.classList.contains('fade-in-down')):
                console.log('case = fid')
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
<style scoped>
input {
  outline: none;
}
</style>