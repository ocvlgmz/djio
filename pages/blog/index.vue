<template>
  <v-container fluid>
    <Hero />
    <v-container fluid mt-4>
      <v-chip outlined>
        <input
            v-model.lazy="searchQuery"
            type="search"
            autocomplete="off"
            placeholder="Search Articles"
        />
      </v-chip>
    </v-container>
    <v-row class="ma-4">
      <v-col sm="6" md="4" lg="3" v-for="article of articles" :key="article.slug" class="pa-4">
        <v-hover v-slot="{ hover }">
              <v-card tile :elevation="hover ? 12 : 2" class="anim fade-in">
                <ArticlePreview 
                  :key="article.slug"
                  :title="article.title" 
                  :summary="article.summary" 
                  :thumbnail="article.thumbnail"
                  :slug="article.slug" 
                />
              </v-card>
        </v-hover>
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
        articles: []
      }
    },
    asyncData (context) {
      return context.app.$storyapi.get('cdn/stories', {
        version: 'published',
        starts_with: 'blog/'
      }).then((res) => {
        console.log(res.data)
        return {
          articles : res.data.stories.map(bp =>{
            return {
              slug: bp.slug,
              title: bp.content.title,
              summary: bp.content.summary,
              thumbnail: bp.content.thumbnail,
            }
          })
        }
      }).catch((res) => {
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
      // --- NOTICE ---
      // This works with Nuxt/Content
      // --- --- --- ---
      // async searchQuery(searchQuery) {
      //   if (searchQuery) {
      //     this.articles = []
      //     }
      //     this.articles = await this.$content('articles')
      //       .limit(6)
      //       .search(searchQuery)
      //       .only(['title', 'description', 'img', 'slug', 'author','tags'])
      //       .sortBy('createdAt', 'asc')
      //       .fetch()
      //     // return
      // }
    },
    mounted() {
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