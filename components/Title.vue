<template>
    <v-card flat color="transparent" class="d-flex flex-column align-center"> 
        <v-card-title class="gf-geo">
            <v-btn depressed>
                <div v-for="(word,index) in words" :key="index" class="color">
                        <h2>{{' ' + word + ' '}}</h2>
                </div>
            </v-btn>
        </v-card-title>
    </v-card>
</template>
<script>
export default ({
    props: {words:Array},
})
</script>
<style scoped>
.color:nth-child(odd) {
    color:#4c6070;
    font-weight:400;
}
.color:nth-child(even) {
    color:#fabb28;
    font-weight:400;
}
</style>