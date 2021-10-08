<template>
  <v-container fluid>
    <Hero />
    <v-row class="ma-4">
      <v-col sm="6" md="4" lg="3" v-for="article of articles" :key="article.slug" class="pa-4">
        <v-hover v-slot="{ hover }">
              <v-card tile :elevation="hover ? 12 : 2">
                <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
                  <v-img :src="article.img" />
                  <v-card-text class="dj-blue">
                    <h2>{{ article.title }}</h2>
                    <p>by {{ article.author.name }}</p>
                    <p>{{ article.description }}</p>
                  </v-card-text>
                </NuxtLink>
                <v-card-text>
                  <v-chip-group dark>
                    <v-chip v-for="tag in article.tags" :key="tag.id" color="#505050">#{{tag}}</v-chip>
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
    async asyncData({ $content, params }) {
      const articles = await $content('articles')
        .only(['title', 'description', 'img', 'slug', 'author','tags'])
        .sortBy('createdAt', 'asc')
        .fetch()

      return {
        articles
      }
    },
  }
</script>
<style scoped>
.color {
  color:#440033;
}
</style>