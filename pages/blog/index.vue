<template>
  <v-container fluid>
    <!-- LG display -->
    <v-row align="center" justify="center" v-show="breakpoint.lg">
      <v-col cols="8">
        <v-row align="center" justify="space-between">
          <v-col cols="6" class="">
            <v-tabs class="align-self-center" show-arrows background-color="transparent" color="deep-orange" v-model="tab">
              <v-tab class="lg-text-tabs" v-for="section in sections" :key="section.index">
                {{ section }}
              </v-tab>
            </v-tabs>
          </v-col>
          <v-col cols="4" class="">
            <v-text-field rounded background-color="lime lighten-4" color="deep-orange" append-icon="mdi-magnify" placeholder="search"></v-text-field>
          </v-col>
        </v-row>
        <v-tabs-items v-model="tab">
          <v-tab-item >
            <v-row class="mt-4">
              <v-col cols="6" v-for="story in articles" :key="story.name">
                <v-hover v-slot="{ hover }">
                  <NuxtLink :to="`/blog/${story.slug}`">
                    <v-card :elevation="hover ? 6 : 0" class="ma-4"  height="auto">
                        <BlogPreview
                          :title="story.title" 
                          :summary="story.summary" 
                          :thumbnail="story.thumbnail"
                          
                        />
                    </v-card>
                  </NuxtLink>
                </v-hover>
              </v-col>
            </v-row>
          </v-tab-item>
          <v-tab-item >
            <v-row class="mt-4">
              <v-col cols="6" v-for="story in podcasts" :key="story.name">
                <v-hover v-slot="{ hover }">
                  <NuxtLink :to="`/blog/${story.slug}`">
                    <v-card :elevation="hover ? 6 : 0" class="ma-4"  height="auto">
                        <BlogPreview
                          :title="story.title" 
                          :summary="story.summary" 
                          :thumbnail="story.thumbnail"
                        />
                    </v-card>
                  </NuxtLink>
                </v-hover>
              </v-col>
            </v-row>
          </v-tab-item>
          <v-tab-item >
            <v-row class="mt-4">
              <v-col cols="6" v-for="post in events" :key="post.name">
                <v-hover v-slot="{ hover }">
                  <NuxtLink :to="`/blog/${post.slug}`">
                    <v-card :elevation="hover ? 6 : 0" class="ma-4"  height="auto">
                        <BlogPreview
                          :title="post.title" 
                          :summary="post.summary" 
                          :thumbnail="post.thumbnail"
                          
                        />
                    </v-card>
                  </NuxtLink>
                </v-hover>
              </v-col>
            </v-row>
          </v-tab-item>
        </v-tabs-items>
      </v-col>
    </v-row>
    <!-- MD display -->
    <v-row align="center" justify="center" v-show="breakpoint.md">
      <v-col md="9">
        <v-row align="center" justify="space-between">
          <v-col cols="7" class="">
            <v-tabs class="align-self-center" show-arrows background-color="transparent" color="deep-orange" v-model="tab">
              <v-tab class="md-text-tabs" v-for="section in sections" :key="section.index">
                {{ section }}
              </v-tab>
            </v-tabs>
          </v-col>
          <v-col cols="5" class="">
            <v-text-field rounded background-color="lime lighten-4" color="deep-orange" append-icon="mdi-magnify" placeholder="search"></v-text-field>
          </v-col>
        </v-row>
        <v-tabs-items v-model="tab">
          <v-tab-item >
            <v-row class="mt-4 d-flex " >
              <v-col cols="6" v-for="story in articles" :key="story.name" class="">
                <v-hover v-slot="{ hover }">
                  <NuxtLink :to="`/blog/${story.slug}`">
                    <v-card :elevation="hover ? 6 : 0" class="ma-4"  fill-height>
                        <BlogPreview
                          :title="story.title" 
                          :summary="story.summary" 
                          :thumbnail="story.thumbnail"
                          
                        />
                    </v-card>
                  </NuxtLink>
                </v-hover>
              </v-col>
            </v-row>
          </v-tab-item>
          <v-tab-item >
            <v-row class="mt-4">
              <v-col cols="6" v-for="story in podcasts" :key="story.name">
                <v-hover v-slot="{ hover }">
                  <NuxtLink :to="`/blog/${story.slug}`">
                    <v-card :elevation="hover ? 6 : 0" class="ma-4"  height="auto">
                        <BlogPreview
                          :title="story.title" 
                          :summary="story.summary" 
                          :thumbnail="story.thumbnail"
                        />
                    </v-card>
                  </NuxtLink>
                </v-hover>
              </v-col>
            </v-row>
          </v-tab-item>
          <v-tab-item >
            <v-row class="mt-4">
              <v-col cols="6" v-for="post in events" :key="post.name">
                <v-hover v-slot="{ hover }">
                  <NuxtLink :to="`/blog/${post.slug}`">
                    <v-card :elevation="hover ? 6 : 0" class="ma-4"  height="auto">
                        <BlogPreview
                          :title="post.title" 
                          :summary="post.summary" 
                          :thumbnail="post.thumbnail"
                          
                        />
                    </v-card>
                  </NuxtLink>
                </v-hover>
              </v-col>
            </v-row>
          </v-tab-item>
        </v-tabs-items>
      </v-col>
    </v-row>
    <!-- SM display -->
    <v-row align="center" justify="center" v-show="breakpoint.sm">
      <v-col md="10">
        <v-row align="center" justify="center" class="d-flex flex-column">
          <v-col cols="12" class="">
            <v-tabs class="d-flex justify-center" show-arrows background-color="transparent" color="deep-orange" v-model="tab">
              <v-tab class="md-text-tabs" v-for="section in sections" :key="section.index">
                {{ section }}
              </v-tab>
            </v-tabs>
          </v-col>
          <v-col cols="6" class="">
            <v-text-field rounded background-color="lime lighten-4" color="deep-orange" append-icon="mdi-magnify" placeholder="search"></v-text-field>
          </v-col>
        </v-row>
        <v-tabs-items v-model="tab">
          <v-tab-item >
            <v-row class="mt-4">
              <v-col cols="6" v-for="story in articles" :key="story.name">
                <v-hover v-slot="{ hover }">
                  <NuxtLink :to="`/blog/${story.slug}`">
                    <v-card :elevation="hover ? 6 : 0" class="ma-4"  height="auto">
                        <BlogPreview
                          :title="story.title" 
                          :summary="story.summary" 
                          :thumbnail="story.thumbnail"
                          
                        />
                    </v-card>
                  </NuxtLink>
                </v-hover>
              </v-col>
            </v-row>
          </v-tab-item>
          <v-tab-item >
            <v-row class="mt-5">
              <v-col cols="4" v-for="story in podcasts" :key="story.name">
                <v-hover v-slot="{ hover }">
                  <NuxtLink :to="`/blog/${story.slug}`">
                    <v-card :elevation="hover ? 6 : 0" class="ma-4"  height="auto">
                        <BlogPreview
                          :title="story.title" 
                          :summary="story.summary" 
                          :thumbnail="story.thumbnail"
                        />
                    </v-card>
                  </NuxtLink>
                </v-hover>
              </v-col>
            </v-row>
          </v-tab-item>
          <v-tab-item >
            <v-row class="mt-5">
              <v-col cols="4" v-for="post in events" :key="post.name">
                <v-hover v-slot="{ hover }">
                  <NuxtLink :to="`/blog/${post.slug}`">
                    <v-card :elevation="hover ? 6 : 0" class="ma-4"  height="auto">
                        <BlogPreview
                          :title="post.title" 
                          :summary="post.summary" 
                          :thumbnail="post.thumbnail"
                          
                        />
                    </v-card>
                  </NuxtLink>
                </v-hover>
              </v-col>
            </v-row>
          </v-tab-item>
        </v-tabs-items>
      </v-col>
    </v-row>
    <!-- XS display -->
    <v-row align="center" justify="center" v-show="breakpoint.xs">
      <v-col md="10">
        <v-row align="center" justify="center" class="d-flex flex-column">
          <v-col cols="12" class="">
            <v-tabs class="d-flex justify-center" show-arrows background-color="transparent" color="deep-orange" v-model="tab">
              <v-tab class="md-text-tabs" v-for="section in sections" :key="section.index">
                {{ section }}
              </v-tab>
            </v-tabs>
          </v-col>
          <v-col cols="6" class="">
            <v-text-field rounded background-color="lime lighten-4" color="deep-orange" append-icon="mdi-magnify" placeholder="search"></v-text-field>
          </v-col>
        </v-row>
        <v-tabs-items v-model="tab">
          <v-tab-item >
            <v-row class="mt-4">
              <v-col cols="12" v-for="story in articles" :key="story.name">
                <v-hover v-slot="{ hover }">
                  <NuxtLink :to="`/blog/${story.slug}`">
                    <v-card :elevation="hover ? 6 : 0" class="ma-4"  height="auto">
                        <BlogPreview
                          :title="story.title" 
                          :summary="story.summary" 
                          :thumbnail="story.thumbnail"
                          
                        />
                    </v-card>
                  </NuxtLink>
                </v-hover>
              </v-col>
            </v-row>
          </v-tab-item>
          <v-tab-item >
            <v-row class="mt-4">
              <v-col cols="12" v-for="story in podcasts" :key="story.name">
                <v-hover v-slot="{ hover }">
                  <NuxtLink :to="`/blog/${story.slug}`">
                    <v-card :elevation="hover ? 6 : 0" class="ma-4"  height="auto">
                        <BlogPreview
                          :title="story.title" 
                          :summary="story.summary" 
                          :thumbnail="story.thumbnail"
                        />
                    </v-card>
                  </NuxtLink>
                </v-hover>
              </v-col>
            </v-row>
          </v-tab-item>
          <v-tab-item >
            <v-row class="mt-4">
              <v-col cols="12" v-for="post in events" :key="post.name">
                <v-hover v-slot="{ hover }">
                  <NuxtLink :to="`/blog/${post.slug}`">
                    <v-card :elevation="hover ? 6 : 0" class="ma-4"  height="auto">
                        <BlogPreview
                          :title="post.title" 
                          :summary="post.summary" 
                          :thumbnail="post.thumbnail"
                          
                        />
                    </v-card>
                  </NuxtLink>
                </v-hover>
              </v-col>
            </v-row>
          </v-tab-item>
        </v-tabs-items>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
  export default {
    data() {
      return {
        observer: null,
        searchQuery: '',
        sections: ['Articles','Podcasts','Events'],
        tab: null,
      }
    },
    asyncData (context) {
      return context.app.$storyapi.get('cdn/stories', {
        version: 'published',
        // starts_with: 'blog/'
      }).then((res) => {
          console.log('stories: ', res.data.stories)
          return {
            articles: res.data.stories
                        .filter( story => /^articles/.test(story.full_slug))
                        .map( post => {
                          console.log('articles: ', post)
                          return {
                            slug:post.slug,
                            title: post.content.title,
                            summary: post.content.summary,
                            thumbnail: post.content.thumbnail,
                          }
                        }),
            podcasts: res.data.stories
                        .filter( story => /^pods/.test(story.full_slug))
                        .map( post => {
                          console.log('pods: ', post)
                          return {
                            slug:post.slug,
                            title: post.content.title,
                            summary: post.content.summary,
                            thumbnail: post.content.image,
                          }
                        }),
            events: res.data.stories
                        .filter( story => /^events/.test(story.full_slug))
                        .map( post => {
                          console.log('events: ', post)
                          return {
                            slug:post.slug,
                            title: post.content.title,
                            summary: post.content.summary,
                            thumbnail: post.content.thumbnail,
                          }
                        }),
          }
      }).catch((res) => {
        if (!res.response) {
          // console.error(res)
          context.error({ statusCode: 404, message: 'Failed to receive content form api' })
        } else {
          // console.error(res.response.data)
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
    },
    computed: {
      breakpoint () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return { xs: true, sm: false, md: false, lg: false, xl: false, name:'xs' }
          case 'sm': return { xs: false, sm: true, md: false, lg: false, xl: false, name:'sm' }
          case 'md': return { xs: false, sm: false, md: true, lg: false, xl: false, name:'md' }
          case 'lg': return { xs: false, sm: false, md: false, lg: true, xl: false, name:'lg' }
          case 'xl': return { xs: false, sm: false, md: false, lg: false, xl: true, name:'xl' }
        }
      }
    }
  }
</script>
<style scoped>
.bg-post {
  /* background-image: url('../../assets/img/dummy.png'); */
  background-position: center;
  background-repeat: no-repeat;
}
.cover {
  display: inline-block;
  background-color: chocolate;
}
.lg-text-tabs {
  font-family: var(--font-roboto);
  font-size: 1.1rem;
}
.md-text-tabs {
  font-family: var(--font-roboto);
  font-size: 1rem;
}
.sm-text-tabs, .xs-text-tabs {
  font-family: var(--font-roboto);
  /* font-size: 1rem; */
}
</style>