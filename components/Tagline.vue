<template>
    <v-card flat color="transparent" class="d-flex flex-column align-center justify-center"> 
        <v-card-title class="gf-geo">
            <v-btn depressed to="/about">
                <div class="text-h6 text-sm-h5 text-md-h4">
                    <span class="gf-geo dj-blue">digital</span>
                    <span class="gf-geo dj-yellow"> Jam</span>
                </div>
            </v-btn>
        </v-card-title>
        <v-card-subtitle class="overline animate__animated animate__headShake">
            <div :style="`font-size:${size}px;`">// decoding value</div>
        </v-card-subtitle>
    </v-card>
</template>

<script>
export default {
computed: {
      size () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return 8
          case 'sm': return 10
          default : return 12
        }
      },
    },
}
</script>

<style>

</style>