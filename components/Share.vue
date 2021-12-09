<template>
    <v-row class="" no-gutters>
        <v-col class="">
            <!-- <v-btn depressed icon>
                <a :href="`https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fdigitaljam.io/blog/%2F${link}`" target="_blank"><v-icon color="blue-grey">mdi-linkedin</v-icon></a>
            </v-btn> -->
            <v-btn depressed icon>
                <a :href="`https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fdigitaljam.io/blog/%2F${slug}`" target="_blank"><v-icon color="blue-grey">mdi-linkedin</v-icon></a>
            </v-btn>
            <v-btn depressed icon>
                <a :href="`https://www.facebook.com/sharer/sharer.php?u=https://digitaljam.io/blog/${slug}`" target="_blank"><v-icon color="blue-grey">mdi-facebook</v-icon></a>
            </v-btn>
            <v-btn depressed icon>
                <a :href="`https://twitter.com/intent/tweet?text=${title}&amp;url=https%3A%2F%2Fdigitaljam.io/blog%2F${slug}`" target="_blank">
                <v-icon color="blue-grey">mdi-twitter</v-icon></a>
            </v-btn>
        </v-col>
    </v-row>
</template>
<script>
export default {
    props:{
        slug:{ type:String, required: true },
        title:{ type:String, required: true },
    },
}
</script>