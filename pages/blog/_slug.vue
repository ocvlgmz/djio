<template>
  <v-container fluid>
    <v-card elevation="3">
      <v-card-text>
        <article>
          <h1>{{ article.title }}</h1>
          <p>{{ article.description }}</p>
          <img :src="article.img" :alt="article.alt" />
          <p>Article last updated: {{ formatDate(article.updatedAt) }}</p>
          <nuxt-content :document="article" />
          <author :author="article.author" />
        </article>
      </v-card-text>
    </v-card>
    <div>
      <prev-next :prev="prev" :next="next" />
    </div>
  
  </v-container>
</template>
<script>
  export default {
    async asyncData({ $content, params }) {
      const article = await $content('articles', params.slug).fetch()

      const [prev, next] = await $content('articles')
        .only(['title', 'slug'])
        .sortBy('createdAt', 'asc')
        .surround(params.slug)
        .fetch()

      return {
        article, prev, next
      }
    },
    methods: {
      formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        return new Date(date).toLocaleDateString('en', options)
      }
    }
  }
</script>