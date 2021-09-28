<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="#fabb28" v-bind="attrs" v-on="on">{{ title }}</v-btn>
    </template>
    <form>
      <v-card tile color="#f1f1f1">
        <v-card-title>
          <span class="headline text-h2 dj-blue text-capitalize"
            ><span class="gf-geo">{{ title }}</span></span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="form.name"
                  label="Name"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="form.email"
                  label="Email"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="form.job"
                  label="Job Title"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  v-model="form.purpose"
                  :items="$props['interest']"
                  label="Purpose"
                  required
                ></v-select>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="6">
                <small>
                  <v-icon small left color="red">mdi-alert-circle</v-icon>All fields required</small>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-text>
          <slot></slot>
          <!-- <Calendar /> -->
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn type="submit" dark color="#4C6070" @click.prevent="send()">
            Confirm
          </v-btn>
          <v-btn dark color="warning" @click="dialog = false"> Cancel </v-btn>
        </v-card-actions>
      </v-card>
    </form>
  </v-dialog>
</template>

<script>
  export default {
      props: {
        name: { type: String },
        title: { type: String },
        interest: { type: Array },
      },
    // props: ["title"],
    data: () => ({
      dialog: false,
      form: { title: "Marketing", name: "", email: "", job: "", purpose: "" },
    }),
    methods: {
      send() {
        const inputs = {
          title: this.form.title,
          name: this.form.name,
          email: this.form.email,
          job: this.form.job,
          purpose: this.form.purpose,
        }
        fetch("../api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            inputs,
          }),
        })
          .then((response) => response.json())
          .then((response) => {
            console.log("Success:", inputs);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      },
    },
  }
</script>