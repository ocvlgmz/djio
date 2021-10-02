<template>
  <v-row justify="center">
    <v-col cols="6" xsm="12">
      <v-card>
        <v-tabs
          v-model="tab"
          show-arrows
          background-color="#4C6070"
          icons-and-text
          dark
          grow
        >
          <v-tabs-slider color="#FABB28"></v-tabs-slider>
          <v-tab v-for="tab in tabs" :key="tab.name">
            <!-- <v-icon >{{ tab.icon }}</v-icon> -->
            <v-card-title class="gf-geo py-1">{{ tab.name }}</v-card-title>
          </v-tab>
          <v-tab-item>
            <v-card class="px-4">
              <v-card-text>
                <v-form ref="loginForm" v-model="valid" lazy-validation>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field
                        v-model="userLogInfo.loginEmail"
                        :rules="loginEmailRules"
                        label="E-mail"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        v-model="userLogInfo.loginPassword"
                        :append-icon="show1 ? 'eye' : 'eye-off'"
                        :rules="[rules.required, rules.min]"
                        :type="show1 ? 'text' : 'password'"
                        name="input-10-1"
                        label="Password"
                        hint="At least 8 characters"
                        counter
                        @click:append="show1 = !show1"
                      ></v-text-field>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col class="d-flex">
                      <v-btn
                        class="gf-geo amber--text text-large"
                        id="btn-login"
                        x-large
                        block
                        depressed
                        :disabled="!valid"
                        @click="validate"
                      >
                        Submit
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-form>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item eager>
            <v-card class="px-4">
              <v-card-text>
                <v-form ref="registerForm" v-model="valid" lazy-validation>
                  <v-row>
                    <v-col cols="12" sm="6" xsm="8">
                      <v-text-field
                        v-model="userRegInfo.firstName"
                        :rules="[rules.required]"
                        label="First Name"
                        maxlength="20"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="userRegInfo.lastName"
                        :rules="[rules.required]"
                        label="Last Name"
                        maxlength="20"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        v-model="userRegInfo.email"
                        :rules="emailRules"
                        label="E-mail"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        v-model="userRegInfo.password"
                        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                        :rules="[rules.required, rules.min]"
                        :type="show1 ? 'text' : 'password'"
                        name="input-10-1"
                        label="Password"
                        hint="At least 8 characters"
                        counter
                        @click:append="show1 = !show1"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        block
                        v-model="verify"
                        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                        :rules="[rules.required, passwordMatch]"
                        :type="show1 ? 'text' : 'password'"
                        name="input-10-1"
                        label="Confirm Password"
                        counter
                        @click:append="show1 = !show1"
                      ></v-text-field>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col class="d-flex">
                      <v-btn
                        class="gf-geo amber--text text-large"
                        id="btn-register"
                        x-large
                        depressed
                        block
                        :disabled="!valid"
                        color="grey lighten-4"
                        @click="validate"
                        >Submit</v-btn
                      >
                    </v-col>
                  </v-row>
                </v-form>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  mounted() {
    const val = this.validate;
    const lb = document
      .getElementById("btn-login")
      .addEventListener("click", (e) => val, { once: true })
    const rb = document
      .getElementById("btn-register")
      .addEventListener("click", (e) => val, { once: true })
  },
  computed: {
    passwordMatch() {
      return () =>
        this.userRegInfo.password === this.verify || "Password must match"
    },
  },
  methods: {
    validate(e) {
      e.preventDefault();
      if (this.$refs.loginForm.validate()) {
        console.log("login")
        // submit form to server/API here...
        this.submitAuth(e, this.userLogInfo)
        return;
      }
      console.log("register")
      this.submitAuth(e, this.userRegInfo)
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },
  },
  data: () => ({
    tab: 0,
    tabs: [
      { name: "Login", icon: "mdi-account" },
      { name: "Register", icon: "mdi-account-outline" },
    ],
    valid: true,
    userRegInfo: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    verify: "",
    userLogInfo: {
      loginPassword: "",
      loginEmail: "",
    },
    loginEmailRules: [
      (v) => !!v || "Required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    emailRules: [
      (v) => !!v || "Required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    show1: false,
    rules: {
      required: (value) => !!value || "Required.",
      min: (v) => (v && v.length >= 8) || "Min 8 characters",
    },
  }),
  props: ["submitAuth"],
};
</script>
<style scoped>
.text-large {
  font-size: 18px;
}
.text-big {
  font-size: 24px;
}
</style>
