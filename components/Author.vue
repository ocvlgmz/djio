<template>
  <v-row align="center" justify="center" no-gutters>
    <v-col class="pa-1 tmpr">
      <a :href="`https://www.twitter.com/${handle}`" target="_blank">
        <v-avatar size="32">
          <img src="./../assets/img/oliver.png" alt="Oliver">
        </v-avatar>
        <v-icon color="deep-orange" left>mdi-twitter</v-icon> @{{handle}}
      </a>
    </v-col>
  </v-row>
</template>
<script>
  export default {
    props: {
      handle: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        twitter: "ocjlgmz"
      }
    }
  }
</script>