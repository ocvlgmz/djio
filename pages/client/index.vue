<template>
  <v-container fluid>
    <Hero />
    <v-card flat class="mx-10">
      <v-card-title class="text-h5 font-weight-light dj-blue">
        {{ greeting }}
        <span class="text-capitalize">,&nbsp;{{ this.$auth.user.firstname }}</span>
      </v-card-title>
      <v-card-text style="background: #f2f2f2" class="text-overline">
        <v-card-subtitle>Account Summary</v-card-subtitle>
        <v-row justify="center" align="center" no-gutters>
          <v-col>
            <v-card-text class="d-flex flex-column align-center">
              <v-card-subtitle>Requests</v-card-subtitle>
              <v-avatar class="white--text" color="#FFE082" size="36">
                {{ countRequests }}
              </v-avatar>
            </v-card-text>
          </v-col>
          <v-col>
            <v-card-text class="d-flex flex-column align-center">
              <v-card-subtitle>Projects</v-card-subtitle>
              <v-avatar class="white--text" color="#00897B" size="36">
                {{ countProjects }}
              </v-avatar>
            </v-card-text>
          </v-col>
          <v-col>
            <v-card-text class="d-flex flex-column align-center">
              <v-card-subtitle>Alerts</v-card-subtitle>
              <v-avatar class="white--text" color="#FF7043" size="36">
                {{ countAlerts }}
              </v-avatar>
            </v-card-text>
          </v-col>
          <v-col>
            <v-card-text class="d-flex flex-column align-center">
              <v-card-subtitle>Credits</v-card-subtitle>
              <v-avatar class="white--text" color="#00ACC1" size="36">
                {{ countCredits }}
              </v-avatar>
            </v-card-text>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-text v-if="countProjects !== 0">
        <v-row>
          <v-col cols="4" v-for="pr in projects" :key="pr.index">
            <v-card>
              <v-card-title>
                {{ pr.title }}
              </v-card-title>
              <v-card-subtitle>{{ pr.desc }}</v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-text v-else class="text-h6 font-weight-light dj-blue">
        <p>You currently have no ongoing projects.</p>
        <p>
          You might want to check <n-link to="/blog">trendy idea</n-link> on how
          to improve CX experience, automate processes, adopt AI in your
          products/services, etc.
        </p>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  middleware: "auth",
  data() {
    return {
      projects: [
        {
          title: "CRM Training",
          desc: "Training Staff about CRM",
          cost: "150",
          duration: "10",
          status: "Initated",
          health: "Healthy",
        },
        {
          title: "ChatBot",
          desc: "Building a useful bot for clients",
          cost: "350",
          duration: "25",
          status: "In progress",
          health: "Weak",
        },
        {
          title: "Digital Marketing",
          desc: "Enhancing customer relationship",
          cost: "150",
          duration: "10",
          status: "Pending",
          health: "Discharged",
        },
      ],
      requests: "1",
      alerts: "4",
      credits: "32",
      hasProject: true,
      spoc: "",
    };
  },
  computed: {
    ...mapGetters(["isAuthenticated", "loggedInUser"]),
    greeting() {
      const moment = new Date()
      let time = moment.getHours()
      return time < 12
        ? "Good morning"
        : time > 18
        ? "Good evening"
        : "Good afternoon"
    },
    countRequests() {
      return this.requests.length
    },
    countProjects() {
      return this.projects.length
    },
    countAlerts() {
      return this.alerts
    },
    countCredits() {
      return this.credits
    },
    getProject() {
      return null
    },
  },
};
</script>