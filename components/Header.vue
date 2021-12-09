<template>
  <v-card tile class="mx-10">
    <!-- on Most -->
    <v-app-bar app elevate-on-scroll color="white" v-show="breakpoint.md || breakpoint.lg">
      <v-btn depressed color="transparent" class="mx-4" to="/">
          <span class="logo-dgt">digital</span>
          <span class="logo-jam"> Jam</span>
      </v-btn>
      <v-spacer></v-spacer>
      <div class="mx-1 font-text">
        <v-btn depressed text color="blue-grey darken-1" to="/about">About</v-btn>
        <v-btn depressed text color="blue-grey darken-1" to="/service">Service</v-btn>
        <v-btn depressed text color="blue-grey darken-1" to="/blog">Blog</v-btn>
        <!-- <v-btn depressed text color="blue-grey darken-1" to="/store">Store</v-btn> -->
      </div>
      <div class="mx-1 font-text" v-if="isAuthenticated">
        <v-btn outlined text color="lime darken-4" class="mx-1" to="/dashboard">Dashboard</v-btn>
        <v-btn outlined text color="deep-orange darken-4" class="mr-3" @click="logout">Logout</v-btn>
      </div>
      <div class="mx-1 font-text" v-else>
        <v-btn depressed color="lime lighten-4" class="mr-3" to="/login">Login</v-btn>
      </div>
    </v-app-bar>

    <!-- on Xs -->
    <v-app-bar app elevate-on-scroll color="white" v-show="breakpoint.sm">
      <v-btn depressed color="transparent" class="mx-4" to="/">
        <span class="logo-dgt">digital</span>
        <span class="logo-jam"> Jam</span>
      </v-btn>
      <v-spacer></v-spacer>
      <div class="mx-1 font-text">
        <v-btn icon color="blue-grey darken-1" to="/about">
          <v-icon >mdi-compass</v-icon></v-btn>
        <v-btn icon color="blue-grey darken-1" to="/blog">
          <v-icon >mdi-message-text</v-icon></v-btn>
        <v-btn icon color="blue-grey darken-1" to="/service">
          <v-icon >mdi-offer</v-icon></v-btn>
        <v-btn icon color="blue-grey darken-1" to="/store">
          <v-icon >mdi-cart</v-icon></v-btn>
      </div>
      <div class="mx-1 font-text" v-if="isAuthenticated">
        <v-btn icon color="lime darken-2" class="mx-1" to="/dashboard">
          <v-icon color="lime darken-4">mdi-view-dashboard</v-icon></v-btn>
        <v-btn icon color="lime darken-2" class="mr-3" @click="logout"
          ><v-icon color="deep-orange lighten-2">mdi-location-exit</v-icon></v-btn>
      </div>
      <div class="mx-1 font-text" v-else>
        <v-btn icon color="lime darken-4" class="mr-3" to="/login">
          <v-icon >mdi-account</v-icon></v-btn>
      </div>
    </v-app-bar>

    <!-- on Drawer -->
    <v-app-bar app elevate-on-scroll color="white" v-show="breakpoint.xs">
      <v-btn depressed color="transparent" class="mx-4" to="/">
        <span class="logo-dgt">digital</span>
        <span class="logo-jam"> Jam</span>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon color="blue-grey darken-1" class="font-text mr-4" @click="drawer = !drawer">
        <v-icon >mdi-menu</v-icon></v-btn>
    </v-app-bar>
      <v-navigation-drawer v-model="drawer" app bottom temporary v-if="breakpoint.xs">
        <v-list class="font-text text-uppercase">
            <v-list-item ripple color="blue-grey darken-1" nuxt to="/about" >
              <v-list-item-content class="justify-center">about</v-list-item-content></v-list-item>
            <v-list-item ripple color="blue-grey darken-1" to="/service">
              <v-list-item-content class="justify-center">service</v-list-item-content></v-list-item>
            <v-list-item ripple color="blue-grey darken-1" to="/blog">
              <v-list-item-content class="justify-center">blog</v-list-item-content></v-list-item>
            <!-- <v-list-item ripple color="blue-grey darken-1" to="/store">
              <v-list-item-content class="justify-center">store</v-list-item-content></v-list-item> -->
        </v-list>
        <v-list class="font-text" v-if="isAuthenticated">
          <v-list-item><v-list-item-content>
            <v-btn outlined text color="lime darken-4" to="/dashboard">Dashboard</v-btn>
          </v-list-item-content></v-list-item>
          <v-list-item><v-list-item-content>
            <v-btn outlined text color="deep-orange darken-4" @click="logout">Logout</v-btn>
          </v-list-item-content></v-list-item>
        </v-list>
        <v-list nav class="font-text" v-else>
          <v-list-item><v-list-item-content>
            <v-btn text color="lime darken-4" to="/login">Login</v-btn>
          </v-list-item-content></v-list-item>
        </v-list>
      </v-navigation-drawer>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  data() {
    return {
      drawer: null,
    }
  },
  computed: {
    // ...mapGetters(["isAuthenticated", "loggedInUser"]),
    ...mapGetters({
      isAuthenticated: "isAuthenticated", 
      loggedInUser: "loggedInUser"
    }),
    breakpoint () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return { xs: true, sm: false, md: false, lg: false, xl: false }
        case 'sm': return { xs: false, sm: true, md: false, lg: false, xl: false }
        case 'md': return { xs: false, sm: false, md: true, lg: false, xl: false }
        case 'lg': return { xs: false, sm: false, md: false, lg: true, xl: false }
        case 'xl': return { xs: false, sm: false, md: false, lg: false, xl: true }
      }
    },
  },
  methods: {
    async logout() {
      await this.$auth.logout()
    },
  },
}
</script>

<style scoped>
.logo-nav-btn-drawer {
  font-size: 1.5em;
  font-family: var(--font-geo);
}
.logo-dgt {
    font-family: var(--font-geo);
    font-size: 1.5rem;
    color:var(--color-blue);
}
.logo-jam {
    font-family: var(--font-geo);
    font-size: 1.5rem;
    color:var(--color-orange);
}
/* .nav-text {
  font-size: 0.925 rem;
} */
</style>