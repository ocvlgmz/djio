<template>
  <v-container fluid>
    <v-card elevation="3">
      <v-card-text>
        <article>
          <h1>{{ title }}</h1>
          <img :src="thumbnail" alt="alt" />
          <p>{{ content }}</p>
          <!-- <p>Article last updated: {{ formatDate(date) }}</p> -->
          <!-- <author :author="author" /> -->
        </article>
      </v-card-text>
    </v-card>
    <div>
      <!-- <PrevNext :prev="prev" :next="next" /> -->
    </div>
  </v-container>
</template>
<script>
  export default {
    asyncData(context){
      return context.app.$storyapi.get('cdn/stories/blog/'+context.params.postId, {
        version: 'draft',
      }).then( res => {
            return {
                title: res.data.story.content.title,
                thumbnail: res.data.story.content.thumbnail,
                content: res.data.story.content.content,
            }
      })
    },
  }
</script>
<style scoped>
</style>