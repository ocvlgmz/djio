<template>
  <v-container>
    <Notification :message="message" v-if="err"/>
    <LoginForm :submitAuth="authUser" />
  </v-container>
</template>

<script>
import Notifcation from '../components/Notifcation.vue';
// No need to register components with Nuxt: it works out of the box!
export default {
  components: { Notifcation },
  layout: "default",
  data() {
    return {
      alert: false,
      type: 'success',
      message: '',
      err: null
    }
  },
  methods: {
    authUser(e, userInfo) {
      e.currentTarget.id == "btn-login" ? this.loginUser(userInfo) : this.registerUser(userInfo)
    },
    async loginUser({ loginEmail, loginPassword }) {
      const user = { email: loginEmail, password: loginPassword }
      try {
        // await this.$axios.post('/login', user)
        //   .then((res) => {
        //     // console.log(res)  
        //       // this.$router.push("/client")
        //   })
        await this.$auth.loginWith('local', { data: user })
        this.$router.push("/client")
      } catch (err) {
        this.err = true
        this.type = 'warning'
        this.message="Wrong credentials. Please try again."
      }
    }, 
    async registerUser({ firstname, lastname, email, password }) {
      const user = {firstname,lastname,email,password}
      try {
        await this.$axios.post('/register', user)
        await this.$auth.loginWith('local', { data: user })
        this.$router.push("/client")
      } catch (err) {
        this.err = true
        this.type = 'warning'
        this.message=`Error during registration: ${err.response.status}.\nPlease try again.`
      }
    },
  },
};
</script>