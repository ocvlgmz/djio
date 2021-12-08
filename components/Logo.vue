<template>
    <v-btn block depressed tile :to="location" class="ma-2">
        <div class="text-uppercase text-xs-h6 text-sm-h5 text-md-h4">
            <span class="dj-bot text--dj-blue">digital</span>
            <span class="dj-bot text--dj-yellow">Jam</span>
        </div>
    </v-btn>
</template>
<script>
export default {
    data(){
        return{
            // location: null
    }},
    methods:{
        // Using computed instead
        // toggleLocation(){
        //     let path = this.$route.name
        //     console.log(path)
        //     path=='/landing'? this.location='/': this.location='/landing'
        //     console.log(this.location)
        //     return this.location
        // }
    },
    computed:{
        location: {
            set: function(){
                // return this.$route.name == 'landing' ? this.location = '/' : this.location = '/landing'
                // console.log(this.$route.name)
            },
            get: function(){
                let path = this.$route.name
                console.log(path)
                return path!=='/about'? this.location='/about': this.location='/start'
            }
        }
    }
}
</script>
<style scoped>
/* .v-btn {
    padding: 5px !important;
    background: #fff !important;
    border-radius: 2px;
}
.v-btn:hover {
    background: #ccc !important;
}
.v-btn:hover span:nth-child(1) {
    color: whitesmoke !important;
} */
</style>