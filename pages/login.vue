<template>
  <v-container fluid>
    <div>
      <v-alert
          :value="alert"
          dismissible
          type="success"
          icon="mdi-information"
        >Registration successful!</v-alert>
    </div>
    <LoginForm :submitAuth="authUser" />
  </v-container>
</template>

<script>
// No need to register components with Nuxt: it works out of the box!
export default {
  layout: "default",
  data() {
    return {
      alert: false
    }
  },
  methods: {
    authUser(e, userInfo) {
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
        alert('Wrong credentials. Please try again.')
      }
    }, 
    async registerUser({ firstname, lastname, email, password }) {
      const user = {firstname,lastname,email,password}
      try {
        await this.$axios.post('/register', user)
        this.$auth.loginWith('local', { data: user })
          .then((res) => {
            console.log('Res:', res)
            this.alert = true
            setTimeout(() => {
              this.alert = false
            }, 6000)
            // this.$router.push("/client")
          })
      } catch (err) {
        alert(`Error during registration: ${err.response.status}.\nPlease try again.`)
        console.log('Registration error:', err.response.status)
      }
    },
  },
};
</script>