<template>
  <v-container>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn large depressed color="green darken-1" class="mt-2" v-bind="attrs" v-on="on">
          <span class="blue-grey--text text--lighten-4">{{ title }}</span>
        </v-btn>
      </template>
        <v-card tile color="blue-grey darken-4">
          <v-card-title class="mx-2">
            <v-row align=center justify="center" class="d-flex flex-column ma-2">
              <v-card-title class="mx-2">
                <span class="text-h4 blue-grey--text text--lighten-3 font-weight-bold text-capitalize">{{ title }}</span>
              </v-card-title>
              <v-col>
                <v-text-field v-model="form.name" label="Name" required flat solo background-color="blue-grey lighten-4"></v-text-field>
              </v-col>
              <v-col >
                <v-text-field v-model="form.email" label="Email"  required flat solo background-color="blue-grey lighten-4"></v-text-field>
              </v-col>
              <v-col >
                <v-text-field v-model="form.job" label="Job Title"  required flat solo background-color="blue-grey lighten-4"></v-text-field>
              </v-col>
              <v-col>
                <v-select v-model="form.purpose" :items="interest" label="Purpose" required flat solo background-color="blue-grey lighten-4"></v-select>
              </v-col>
              <v-col>
                <v-textarea v-model="form.msg" label="Your message"  required flat solo background-color="blue-grey lighten-4"></v-textarea>
              </v-col>
            </v-row>
          </v-card-title>
          <v-card-actions>
            <v-card-subtitle>
              <v-icon left color="deep-orange darken-3">mdi-alert-circle</v-icon>All fields required
            </v-card-subtitle>
            <v-spacer></v-spacer>
            <v-card-title>
              <v-btn depressed class="mr-2" type="submit" dark color="blue-grey darken-3" @click.prevent="callMailRoute">
                Confirm
              </v-btn>
              <v-btn depressed dark color="deep-orange darken-3" @click="dialog = false"> Cancel </v-btn>
            </v-card-title>
          </v-card-actions>
        </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
  export default {
    props: {
      title: { type: String },
      theme: { type: String },
      interest: { type: Array },
    },
    data: () => ({
      err: false,
      dialog: false,
      snackbar: { show: false, type: null, message: null },
      form: { name: null, email: null, job: null, purpose: null, message: null },
    }),
    methods: {
      async callMailRoute(inputs){
        this.err
        try {
          await this.$axios.post(process.env.NODE_ENV === 'production' ? '/mail' : '/api/mail', inputs)
          this.error(this.err)
        } catch (error) {
          console.log('mail route > err!!!')
          this.err = true
          this.error(this.err, error)
        }
      },
      error(err, error) {
        this.dialog = false
        this.snackbar.show = true
        if(err){
          this.snackbar.type = 'warning'
          this.snackbar.message = error.response.data.message
          return
        }
        this.snackbar.type = 'success'
        this.snackbar.message = 'Thanks for your message! We\'ll come back to you asap.'
      },
    },
  }
</script>
style <style scoped>
.wb {
  word-break: keep-all;
}
</style>
