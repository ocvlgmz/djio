<template>
  <v-container fluid>
    <Hero />
    <v-card flat class="my-4">
      <v-row class="my-10" justify="center" align="center">
        <v-col cols="10" md="6" order="last">
          <v-card-title class="overline text-h4 dj-blue">
            Available soon...
          </v-card-title>
          <v-card-text class="text-h6 font-weight-light dj-blue">
            <p>
              This is the shop where you can find our courses, workshops and
              other valuable stuff for your business.
            </p>
          </v-card-text>
        </v-col>
        <v-col cols="10" md="4">
          <v-img :src="require('../assets/img/design.png')" />
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import Hero from "@/components/Hero.vue";
export default {
  // layout: "default",
  data: () => ({
    title: "Store",
  }),
};
</script>