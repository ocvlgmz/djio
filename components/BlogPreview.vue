<template>    
    <v-card>
        <!-- <v-img :style="{backgroundImage: `url(${thumbnail})`}" class="thumbnail"></v-img> -->
        <v-img :src="thumbnail" class="thumbnail"></v-img>
        <v-card-title class="blue-grey--text">
            {{title}}
        </v-card-title>
        <v-card-text class="blue-grey--text">
            {{summary}}
        </v-card-text>
        <!-- <v-card-text class="blue-grey--text" v-if="media!==undefined">
            <v-icon>mdi-audio</v-icon>
        </v-card-text> -->
    </v-card>
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
        media: {
            type: String,
            // require: true
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