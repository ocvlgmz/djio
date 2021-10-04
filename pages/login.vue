<template>
  <v-container fluid>
    <div>
      <v-alert
          :value="alert"
          dismissible
          :type="type"
          icon="mdi-information"
        >{{this.message}}</v-alert>
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
      alert: false,
      type:'success',
      message:''
    }
  },
  methods: {
    authUser(e, userInfo) {
      e.currentTarget.id == "btn-login" ? this.loginUser(userInfo) : this.registerUser(userInfo)
    },
    async loginUser({ loginEmail, loginPassword }) {
      try {
        const user = { email: loginEmail, password: loginPassword }
        await this.$axios.post('/login', user)
        this.$auth.loginWith('local', { data: user })
          .then((res) => {
            this.$router.push("/client")
          })
      } catch (err) {
        this.type = 'warning'
        this.message="Wrong credentials. Please try again."
        this.alert = true
      }

    }, 
    async registerUser({ firstname, lastname, email, password }) {
      const user = {firstname,lastname,email,password}
      try {
        await this.$axios.post('/register', user)
        this.$auth.loginWith('local', { data: user })
          .then((res) => {
            // console.log('Res:', res)
            this.$router.push("/client")
          })
      } catch (err) {
        this.type = 'warning'
        this.message=`Error during registration: ${err.response.status}.\nPlease try again.`
        this.alert = true
      }
    },
  },
};
</script>