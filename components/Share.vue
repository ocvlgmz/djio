<template>
    <v-row class="tmpb" no-gutters>
        <v-col class="tmpr d-flex align-self-start justify-end">
            <v-btn depressed icon>
                <a :href="`https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fdigitaljam.io/blog/%2F${link}`" target="_blank"><v-icon color="blue-grey">mdi-linkedin</v-icon></a>
            </v-btn>
            <v-btn depressed icon>
                <a :href="`https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fdigitaljam.io/blog/%2F${link}`" target="_blank"><v-icon color="blue-grey">mdi-linkedin</v-icon></a>
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
    </v-row>
</template>
<script>
export default {
    props:{
        link:{ type:String, required: true },
        title:{ type:String, required: true },
    },
    // computed: {
    //     title() { 
    //         return this.link.replace('-', x => ' ')
    //     }
    // }
}
</script>
<style scoped>
/* .color-share {
    color: var(--color-grey-dark);
}
.fixed {
    position: fixed;
    top: 200px;
} */
</style>