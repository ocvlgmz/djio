<template>
  <v-container>
    <h1>Test</h1>
    <h2>{{ `Current Feature: ${this.feature}` }}</h2>
    <div v-if="isAuthenticated">
      {{ isAuthenticated }}
      <div>{{ loggedInUser.username }}</div>
      <div>{{ this.$auth.user }}</div>
    </div>
    <div v-else>Logged out!</div>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  auth: false,
  data() {
    return {
      feature:'vercel serverless'
    };
  },
  computed: {
    ...mapGetters(["isAuthenticated", "loggedInUser"]),
  },
};
</script>

<style scoped>
</style>