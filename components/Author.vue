<template>
    <NuxtLink :to="`/blog/author/${author.name}`">
        <v-card elevation="3">
          <v-row>
            <v-col class="mx-2">
              <v-avatar size="254">
                <img :src="author.img" alt="Oliver">
              </v-avatar>
            </v-col>
            <v-col>
              <h4>Author</h4>
              <p>{{ author.name }}</p>
              <p>{{ author.bio }}</p>
              <p>{{ author.link }}</p>
            </v-col>
          </v-row>
        </v-card>
    </NuxtLink>
</template>
<script>
  export default {
    props: {
      author: {
        type: Object,
        required: true
      }
    }
  }
</script>