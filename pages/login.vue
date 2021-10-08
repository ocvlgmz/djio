<template>
  <v-container>
    <v-snackbar 
      v-model="snackbar.show"
      :timeout="-1"
      :color="snackbar.type"
      >
      <v-row justify="space-between">
        <v-col class="ml-4">
      {{snackbar.message}}
        </v-col>
      <!-- <v-spacer></v-spacer> -->
        <v-col cols="2" class="d-flex justify-end"> 
      <v-btn small icon @click="snackbar.show=false"><v-icon>
          mdi-close
        </v-icon></v-btn>
        </v-col>
      </v-row>
    </v-snackbar>
    <LoginForm :submitAuth="authUser" />
  </v-container>
</template>

<script>
// No need to register components with Nuxt: it works out of the box!
export default {
  layout: "default",
  data() {
    return {
      snackbar: {show: false, type: null, message: null},
      // err: null
    }
  },
  methods: {
    authUser(e, userInfo) {
      e.currentTarget.id == "btn-login" ? this.loginUser(userInfo) : this.registerUser(userInfo)
    },
    async loginUser({ loginEmail, loginPassword }) {
      const user = { email: loginEmail, password: loginPassword }
      try {
        await this.$axios.post('/login', user)
        await this.$auth.loginWith('local', { data: user })
        this.$router.push("/dashboard")
      } catch (err) {
        this.error(err)
      }
    }, 
    async registerUser({ firstname, lastname, email, password }) {
      const user = {firstname,lastname,email,password}
      try {
        await this.$axios.post('/api/register', user)
        // ---- TODO ---- 
        // redirect to a page requiring the user to check his email for confirm!!
        // instead of loginWith + push to /dashboard
         
        await this.$auth.loginWith('local', { data: user })
        this.$router.push("/dashboard")
      } catch (err) {
        this.error(err)
      }
    },
    error(err) {
      this.snackbar.show = true
      this.snackbar.type = 'warning'
      !err.response.data.errors.else == '' ? this.snackbar.message = err.response.data.errors.else : 
      !err.response.data.errors.email == '' ? this.snackbar.message = err.response.data.errors.email : 
      !err.response.data.errors.password == '' ? this.snackbar.message = `${err.response.data.errors.password} \nPassword must be at least 9 characters long.` : null 
    }
  },
};
</script>