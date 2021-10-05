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
      <v-col sm="6" md="4" lg="3" v-for="post in posts" :key="post.id" class="pa-4">
        <v-hover v-slot="{ hover }">
              <v-card tile :elevation="hover ? 12 : 2" class="anim fade-in">
                <BlogPreview 
                    :id="post.id" 
                    :title="post.title" 
                    :summary="post.summary" 
                    :thumbnail="post.thumbnail"/>
                <v-card-text>
                  <v-chip-group dark>
                    <!-- <v-chip v-for="tag in article.tags" :key="tag.id" color="#505050">#{{tag}}</v-chip> -->
                  </v-chip-group>
                </v-card-text>
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
    asyncData({app}){
      return app.$storyapi.get('cdn/stories/', {
        version: 'draft',
        starts_with: 'blog/'
      }).then( res => {
        return {
          posts: res.data.stories.map(bp => {
            return {
              id: bp.slug,
              title: bp.content.title,
              summary: bp.content.summary,
              content: bp.content.content,
              thumbnail: bp.content.thumbnail
            }
          })
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