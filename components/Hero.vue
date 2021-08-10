<template>
  <v-card flat dark tile :color="bgColor">
    <v-row no-gutters>
      <v-col>
        <v-card-title class="text-capitalize hero">
          <h1>{{ this.page }}</h1>
        </v-card-title>
      </v-col>
      <!-- <v-col v-show="this.page == ''"></v-col> -->
    </v-row>
  </v-card>
</template>
<script>
export default {
  mounted() {
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
        this.bgColor = "#4c6070";
    }
  },
};
</script>
<style scoped>
.hero {
  font-size: 48px;
  filter: opacity(50%);
  font-family: "Geo";
  color: #d0d0d0;
  /* font-weight: bold; */
}
</style>