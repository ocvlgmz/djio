<template>
  <v-container>
    <h1>Test</h1>
    <div v-for="u in users" :key="u.id">
      <v-row>
        <v-col>{{ u.attributes.name }}</v-col>
        <v-col>{{ u.attributes.email }}</v-col>
        <v-col><v-btn to="/login">login</v-btn></v-col>
      </v-row>
    </div>
    <div v-if="isAuthenticated">
      {{ isAuthenticated }}
      <div>{{ loggedInUser.username }}</div>
      <div>{{ this.$auth.user }}</div>
      <div>{{ this.$auth.$state }}</div>
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
    };
  },
  computed: {
    ...mapGetters(["isAuthenticated", "loggedInUser"]),
  },
};
</script>

<style scoped>
</style>