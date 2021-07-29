<template>
  <v-card tile class="px-10">
    <v-app-bar app elevate-on-scroll color="white" class="hidden-sm-and-down">
      <v-btn
        depressed
        color="transparent"
        class="gf-geo txt-default mx-2"
        to="/"
      >
        <span class="dj-blue">digital</span><span class="dj-yellow"> Jam</span>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn depressed text color="#4C6070" class="mx-1" to="/about"
        >About</v-btn
      >
      <v-btn depressed text color="#4C6070" class="mx-1" to="/blog">Blog</v-btn>
      <v-btn depressed text color="#4C6070" class="mx-1" to="/service"
        >Service</v-btn
      >
      <v-btn depressed text color="#FABB28" class="mx-1" to="/store"
        >Store</v-btn
      >
      <div v-if="isAuthenticated">
        <v-btn depressed text color="#4C6070" class="mx-1" to="/client"
          >My Area</v-btn
        >
        <v-btn outlined color="#4C6070" class="mx-1" @click="logout"
          >Logout<v-icon color="red" right>mdi-account</v-icon></v-btn
        >
      </div>
      <div v-else>
        <v-btn outlined color="#4C6070" class="mx-1" to="/login"
          >Login<v-icon right>mdi-account</v-icon></v-btn
        >
      </div>
    </v-app-bar>
    <v-app-bar app elevate-on-scroll color="white" class="hidden-md-and-up">
      <v-btn depressed color="transparent" class="gf-geo txt-small mx-2" to="/">
        <span class="dj-blue">digital</span><span class="dj-yellow"> Jam</span>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon small depressed text color="#4C6070" class="mx-1" to="/about"
        ><v-icon small>mdi-compass</v-icon></v-btn
      >
      <v-btn icon small depressed text color="#4C6070" class="mx-1" to="/blog"
        ><v-icon small>mdi-message-text</v-icon></v-btn
      >
      <v-btn icon small depressed text color="#4C6070" class="mx-1" to="/service"
        ><v-icon small>mdi-offer</v-icon></v-btn
      >
      <v-btn icon small depressed text color="#FABB28" class="mx-1" to="/store"
        ><v-icon small>mdi-cart</v-icon></v-btn
      >
      <div v-if="$auth.loggedIn">
        <v-btn icon small outlined color="#4C6070" class="mx-1" @click="logout"
          ><v-icon small color="red">mdi-account</v-icon></v-btn
        >{{ $auth.user.name }}
      </div>
      <div v-else>
        <v-btn icon small outlined color="#4C6070" class="mx-1" to="/login"
          ><v-icon small>mdi-account</v-icon></v-btn
        >
      </div>
    </v-app-bar>
  </v-card>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["isAuthenticated", "loggedInUser"]),
  },
  methods: {
    async logout() {
      await this.$auth.logout();
    },
  },
};
</script>

<style scoped>
.txt-default {
  font-size: 24px;
}
.txt-small {
  font-size: 20px;
}
.v-btn:hover:before {
  background-color: #4c6070;
}
</style>