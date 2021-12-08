<template>
  <v-row align="center" justify="center">
    <v-col xs="12" sm="8" md="6" lg="4">
        <v-card tile class="px-10 pa-10" elevation="10">
          <!-- SIGN IN -->
          <v-form class="" ref="loginForm" v-model="valid" lazy-validation v-if="signIn">
            <v-card-title class="mb-4 justify-center overline text-h4 blue-grey--text font-weight-bold">
                Sign In
            <v-card-subtitle class="">
                No account yet? <a class="deep-orange--text" @click="signIn = !signIn">Sign up</a>
            </v-card-subtitle>
            </v-card-title>
            <v-text-field class=" px-4" required flat solo background-color="lime lighten-4" label="Email"
              v-model="userLogInfo.loginEmail" :rules="loginEmailRules"></v-text-field>
            <v-text-field class=" px-4" required counter flat solo background-color="lime lighten-4" label="Password" name="some" hint="At least 8 characters" 
              v-model="userLogInfo.loginPassword"
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              :type="show ? 'text' : 'password'"
              @click:append="show = !show"
            ></v-text-field>
            <v-card-title class="pa-4">
              <v-btn class="white--text text-large" id="btn-login" background-color="lime lighten-4"
                x-large block depressed color="deep-orange" :disabled="!valid" @click="validate"
              >
                Submit
              </v-btn>
            </v-card-title>
          </v-form>
          <!-- SIGN UP -->
          <v-form class="" ref="loginForm" v-model="valid" lazy-validation v-if="!signIn">
            <v-card-title class="mb-4 justify-center overline text-h4 blue-grey--text font-weight-bold">
              Sign Up
              <v-card-subtitle class="">
                  Already have an account? <a class="deep-orange--text" @click="signIn = !signIn">Sign in</a>
              </v-card-subtitle>
            </v-card-title>

            <v-text-field class=" px-4" required flat solo background-color="lime lighten-4" label="First Name" maxlength="20" 
              v-model="userRegInfo.firstname" :rules="[rules.required]"></v-text-field>
            <v-text-field class=" px-4" required flat solo background-color="lime lighten-4" label="Last Name" maxlength="20" 
              v-model="userRegInfo.lastname" :rules="[rules.required]"></v-text-field>
            <v-text-field class=" px-4" required flat solo background-color="lime lighten-4" label="Email"
              v-model="userRegInfo.email" :rules="emailRules"></v-text-field>
            <v-text-field class=" px-4" required counter flat solo background-color="lime lighten-4" label="Password" name="regPassword" hint="At least 8 characters" 
              v-model="userRegInfo.password"
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              :type="show ? 'text' : 'password'"
              @click:append="show = !show"
            ></v-text-field>
            <v-text-field class=" px-4" required counter flat solo background-color="lime lighten-4" label="Confirm Password" name="regPassword" hint="At least 8 characters" 
              v-model="verify"
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, passwordMatch]"
              :type="show ? 'text' : 'password'"
              @click:append="show = !show"
            ></v-text-field>
            <v-card-title class="pa-4">
              <v-btn class="white--text text-large" id="btn-login" background-color="lime lighten-4"
                x-large block depressed color="deep-orange" :disabled="!valid" @click="validate"
              >
                Submit
              </v-btn>
            </v-card-title>
          </v-form>
        </v-card>
        
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ["submitAuth"],

  mounted() {
    const val = this.validate
    // const lb = document
    //   .getElementById("btn-login")
    //   .addEventListener("click", (e) => val, { once: true })
    // const rb = document
    //   .getElementById("btn-register")
    //   .addEventListener("click", (e) => val, { once: true })
  },
  computed: {
    passwordMatch() {
      return () =>
        this.userRegInfo.password === this.verify || "Password must match"
    },
  },
  methods: {
    validate(e) {
      e.preventDefault()
      this.$refs.loginForm.validate() ? this.submitAuth(e, this.userLogInfo) : this.submitAuth(e, this.userRegInfo)
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },
  },
  data: () => ({
    signIn: true,
    tab: 0,
    tabs: [
      { name: "Login", icon: "mdi-account" },
      { name: "Register", icon: "mdi-account-outline" },
    ],
    verify: null,
    valid: true,
    userRegInfo: {
      firstname: null,
      lastname: null,
      email: null,
      password: null,
    },
    userLogInfo: {
      loginPassword: null,
      loginEmail: null,
    },
    loginEmailRules: [
      (v) => !!v || "Required",
      (v) => /.+@.+\..+/.test(v) || "Email must be valid",
    ],
    emailRules: [
      (v) => !!v || "Required",
      (v) => /.+@.+\..+/.test(v) || "Email must be valid",
    ],
    show: false,
    rules: {
      required: (value) => !!value || "Required.",
      min: (v) => (v && v.length >= 8) || "Min 8 characters",
    },
  }),
}
</script>
<style scoped>
.text-large {
  font-size: 18px;
}
.text-big {
  font-size: 24px;
}
</style>
