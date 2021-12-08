<template>
  <v-card flat dark tile :color="bgColor">
    <v-row no-gutters>
      <v-col>
        <v-card-title class="text-capitalize hero">
            <NuxtLink class="" to="/blog" v-if="slug"><h1>{{ slug?'Blog':this.page }}</h1></NuxtLink>
            <h1 v-else>{{ slug?'Blog':this.page }}</h1>
        </v-card-title>
      </v-col>
      <v-col v-if="slug">
        <!-- TODO :
        -- Add a search component that allows finding any posts from blog, and redirect to the blog main page for results 
        -->
        <v-card-subtitle class="text-capitalize slug d-flex justify-end">
          <h3>{{ slug }}</h3>
        </v-card-subtitle>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
export default {
  props:{
    slug: {
      type: String,
      require: false
    },
  },
  data () {
    return {
      bgColor: '',
    }
  },
  created() {
    this.page = this.$route.name;
    switch (this.page) {
      case "about":
        this.bgColor = "#605070";
        break;
      case "service":
        this.bgColor = "#406070";
        break;
      case "blog":
        this.bgColor = "#505050";
        break;
      case "store":
        this.bgColor = "#607060";
        break;
      default:
        this.bgColor = "#4C6070";
        // this.bgColor = "#4c6070";
    }
  },
};
</script>
<style scoped>
.hero {
  font-size: 48px;
  /* filter: opacity(50%); */
  font-family: "Geo";
  color: #e2e2e2;
  /* font-weight: bold; */
}
.slug {
  font-size: 36px;
  font-family: "Roboto";
  color: #FFF;
  /* font-weight: bold; */
}
.nuxt-link-active {
  color: #e2e2e2;
}
.nuxt-link-active:hover {
  color: var(--color-dj-yellow);
  filter: opacity(0.8);
}
</style>