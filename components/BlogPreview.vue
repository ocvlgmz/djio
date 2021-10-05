<template>
    <nuxt-link :to="`/blog/`+id">
        <article>
            <div :style="{backgroundImage : 'url(' + thumbnail + ')'}" class="post-prev-thumbnail"></div>
            <div>
                <h1>{{ title }}</h1>
                <p>{{ summary }}</p>
            </div>
        </article>
    </nuxt-link>
</template>
<script>
export default {
    props:{
        title:{
            type: String,
            required: true
        },
        summary:{
            type: String,
            required: true
        },
        thumbnail:{
            type: String,
            required: true
        },
        id:{
            type: String,
            required: true
        },
    },
}
</script>
<style scoped>
.post-prev-thumbnail {
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 10rem;
}
</style>