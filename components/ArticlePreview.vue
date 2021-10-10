<template>
    <NuxtLink :to="`/blog/${slug}`">
        <v-card>
            <v-img :style="{backgroundImage: `url(${thumbnail})`}" class="thumbnail"></v-img>
            <v-spacer></v-spacer>
            <v-card-title class="dj-blue">
                {{title}}
            </v-card-title>
            <v-card-text class="dj-blue">
                {{summary}}
            </v-card-text>
        </v-card>
    </NuxtLink>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            require: true
        },
        summary: {
            type: String,
            require: true
        },
        thumbnail: {
            type: String,
            require: true
        },
        slug: {
            type: String,
            require: true
        }
    }
}
</script>
<style scoped>
.thumbnail {
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 10rem;
}
</style>