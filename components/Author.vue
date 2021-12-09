<template>
  <v-row align="center" justify="center" class="" no-gutters>
    <v-col class="py-1 pr-2 d-flex align-center justify-end">
      <span class="blue-grey--text mr-4">
        Author: {{ name }} 
      </span>
      <a :href="`https://www.twitter.com/${handle}`" target="_blank">
        <v-avatar size="32">
          <img src="./../assets/img/oliver.png" alt="Oliver">
        </v-avatar>
        <!-- <v-icon color="blue-grey" right>mdi-twitter</v-icon> -->
      </a>
    </v-col> 
  </v-row>
</template>
<script>
  export default {
    props: {
      name: { type: String, required: true },
      handle: { type: String, required: true }
    },
    data() {
      return {
        twitter: "ocjlgmz"
      }
    }
  }
</script>