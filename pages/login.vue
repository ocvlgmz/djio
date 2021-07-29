<template>
  <v-container fluid>
    <LoginForm :submitAuth="authUser" />
  </v-container>
</template>

<script>
// No need to register components with Nuxt: it works out of the box!
export default {
  layout: "default",
  data: () => ({
    dialog: false,
  }),
  // computed: {
  //   user() {
  //     return (this.$store.state.auth || {}).user || null;
  //   },
  // },

  methods: {
    authUser(e, userInfo) {
      // console.log("lb login", e);
      if (e.currentTarget.id == "btn-login") {
        this.loginUser(userInfo);
      } else {
        this.registerUser(userInfo);
      }
    },
    async loginUser({ loginEmail, loginPassword }) {
      alert("Login request...");
      const user = {
        email: loginEmail,
        password: loginPassword,
      };
      try {
        this.$auth
          .loginWith("local", {
            data: user,
          })
          .then((res) => {
            // this.$auth.setUser(user);
            // console.log("auth.user", this.$auth.user);
            this.$router.push("/client");
          });
      } catch (err) {
        console.log("Wrong credentials. Try again.");
      }
    },
    async registerUser({ email, password }) {
      alert("Register request...");
      const user = {
        email: email,
        password: password,
      };
      try {
        await this.$axios.post("/auth/register", user);
        console.log("Proceeding with login request...");
        this.$auth.loginWith("local", {
          data: user,
        });
      } catch (err) {
        console.log("registerUser err:", err.response.status);
      }
    },
  },
};
</script>