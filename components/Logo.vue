<template>
    <v-btn large outlined color="blue-grey lighten" tile :to="location" class="ma-2">
        <div class="text-uppercase text-xs-h6 text-sm-h5 text-md-h4">
            <span class="logo-dgt">digital</span>
            <span class="logo-jam">Jam</span>
        </div>
    </v-btn>
</template>
<script>
export default {
    computed:{
        location: {
            set: function() {
                // return this.$route.name == 'landing' ? this.location = '/' : this.location = '/landing'
                // console.log(this.$route.name)
            },
            get: function() {
                let path = this.$route.name
                console.log(path)
                return path!=='/about'? this.location='/about': this.location='/start'
            }
        }
    }
}
</script>
<style scoped>
.logo-dgt {
    font-family: var(--font-geo);
    font-size: 1.5rem;
    color:var(--color-blue);
    filter: saturate(2);
}
.logo-jam {
    font-family: var(--font-geo);
    font-size: 1.5rem;
    color:var(--color-orange);
    filter: saturate(0.5);
}
</style>