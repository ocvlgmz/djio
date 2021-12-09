<template>
<v-container fluid v-editable="posts[0].blok">
  <!-- <v-container fluid > -->
     <v-row justify="center">
       <!-- <v-col sm="2" md="3" class="d-flex justify-self-end tmpr hidden-sm-and-down">
       </v-col> -->
      <v-col xs="12" sm="10" md="8" lg="6">
        <v-card flat>
          <v-row no-gutters>
            <v-col>
             <v-img :src="posts[0].thumbnail" class="pa-2 tmpr"></v-img>
            </v-col>
            <v-col>
              <Share :slug="posts[0].slug" :title="posts[0].title"/>
            </v-col>
            <v-col>
              <Author handle="ocjlgmz"/>
            </v-col>
          </v-row>
            <v-card-title class="blue-grey--text">
                {{posts[0].title}} 
            </v-card-title>
            <v-card-text class="blue-grey--text">
                {{posts[0].summary}}
            </v-card-text>
            <audio v-if="posts[0].media" :src="posts[0].media" controls>
            </audio>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
  export default {
    head () {
      return {
        meta: [
          { property: 'og:title', content: this.posts[0].title },
          { property: 'og:image', content: this.posts[0].thumbnail },
          { property: 'og:description', content: this.posts[0].summary },
          { property: 'og:url', content: 'https://digitaljam.io' + this.$route.path }
        ]
      }// title: this.title
    },
    data() {
      return {
        observer:null,
        searchQuery: '',
      }
    },
    asyncData (context) {
      console.log('context.params: ', context.params)
      return context.app.$storyapi.get('cdn/stories', { version: 'published', /*starts_with: 'blog/'*/ })
        .then((res) => {
          console.log('stories: ', res.data.stories)
          return {
            posts: res.data.stories
                    .filter( story => story.slug == context.params.slug )
                    .map( post => {
                      console.log('post: ',post)
                      return {
                            blok: post.content,
                            title: post.content.title,
                            summary: post.content.summary,
                            thumbnail: /^pods/.test(post.full_slug)? post.content.image : post.content.thumbnail,
                            media: /^pods/.test(post.full_slug)? post.content.file.filename : null,
                            slug: post.slug
                      }
                    }),
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
/* input {
  outline: none;
} */
</style>