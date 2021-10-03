<template>
  <v-container fluid>
    <LoginForm :submitAuth="authUser" />
  </v-container>
</template>

<script>
// No need to register components with Nuxt: it works out of the box!
export default {
  layout: "default",
  methods: {
    authUser(e, userInfo) {
      // if (e.currentTarget.id == "btn-login") {
      //   this.loginUser(userInfo)
      // } else {
      //   this.registerUser(userInfo)
      // }
      e.currentTarget.id == "btn-login" ? this.loginUser(userInfo) : this.registerUser(userInfo)
    },
    async loginUser({ loginEmail, loginPassword }) {
      const user = {
        email: loginEmail,
        password: loginPassword
      }
      try {
        await this.$axios.post('/login', user)
        this.$auth.loginWith('local', { data: user })
          .then((res) => {
            console.log('Res:', res)
            this.$router.push("/client")
          })
      } catch (err) {
        alert('Wrong credentials. Try again.')
      }
    }, 
    async registerUser({ firstname, lastname, email, password }) {
      const user = {
        firstname : firstname,
        lastname : lastname,
        email: email,
        password: password,
      }
      try {
        await this.$axios.post('/register', user)
        // console.log("Proceeding with login request...")
        this.$auth.loginWith('local', { data: user })
      } catch (err) {
        console.log('Registration error:', err.response.status)
      }
    },
  },
};
</script>