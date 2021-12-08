<template>
    <v-row class="tmpb">
        <v-col class="d-flex justify-end">
            <v-btn depressed icon>
                <a href="https://www.linkedin.com/shareArticle?mini=true&url=https://digitaljam.io/blog/my-first-pod&title=articleTitle&summary=articleSummary&source=articleSource" target="_blank"><v-icon color="blue-grey">mdi-linkedin</v-icon></a>
            </v-btn>
            <v-btn depressed icon>
                <a :href="`http://www.linkedin.com/shareArticle?mini=true&amp;ro=true&amp;title=title&amp;url=https%3A%2F%2Fdigitaljam.io%2Fblog%2F${link}&amp;summary=A%20Post%20Summary&amp;source=digitaljam`" target="_blank"><v-icon color="blue-grey">mdi-linkedin</v-icon></a>
            </v-btn>
            <v-btn depressed icon>
                <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdigitaljam.io/blog/%2F" target="_blank"><v-icon color="blue-grey">mdi-facebook</v-icon></a>
            </v-btn>
            <v-btn depressed icon>
                <a class="social-share-icon icon-twitter" href="https://twitter.com/intent/tweet?text=vue-social-share&amp;url=https%3A%2F%2Fdigitaljam.io/blog/%2F&amp;via=https%3A%2F%2Fdigitaljam.io" target="_blank">
                <v-icon color="blue-grey">mdi-twitter</v-icon></a>
            </v-btn>
            <v-btn depressed icon>
                <a class="social-share-icon icon-google" href="https://plus.google.com/share?url=https%3A%2F%2Fdigitaljam.io/blog/%2F" target="_blank"><v-icon color="blue-grey">mdi-google</v-icon></a>
            </v-btn>
        </v-col>
        <div>{{ link }}</div>
    </v-row>
</template>
<script>
export default {
    props:{
        link:{ type:String, required: true },
    }
}
</script>
<style scoped>
.color-share {
    color: var(--color-grey-dark);
}
</style>