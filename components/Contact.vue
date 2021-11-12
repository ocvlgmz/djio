<template>
  <v-container>
    <v-snackbar 
      v-model="snackbar.show"
      timeout="4000"
      :color="snackbar.type"
      absolute
      >
      <v-row justify="space-between">
        <v-col class="ml-4">
        {{snackbar.message}}
        </v-col>
        <v-col cols="2" class="d-flex justify-end">
          <!-- method 'pageRedirect' is called to push to a specific page after clicking to close the snackbar manually -->
          <v-btn small icon @click="pageRedirect(err,0,'/blog')">
            <v-icon>
            mdi-close
            </v-icon></v-btn>
        </v-col>
      </v-row>
    </v-snackbar>
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
                    :items="interest"
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
            <!-- Slot tags 
            -- This 'Contact' component is declared in the template of index.vue, 
            -- and it contains its own template tags whose content will end up been displayed between the slot tags here! -->
            <!-- <slot></slot> -->
            <!-- getSchedule can be referred without () although the "@getValue" is sent by the component Calendar with the value "slot" -->
            <Calendar @getValue="getSchedule"/>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn type="submit" dark color="#4C6070" @click.prevent="scheduleCall">
              Confirm
            </v-btn>
            <v-btn dark color="warning" @click="dialog = false"> Cancel </v-btn>
          </v-card-actions>
        </v-card>
      </form>
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
      form: { name: null, email: null, job: null, purpose: null },
      schedule: { date:null, time:null }
    }),
    methods: {
      getSchedule(slot) {
        // This method gets the "emitted" values from the Calendar date picker (slot selection), 
        // so that this module can passed them along with the form inputs and 
        // ultimately create an email with the full details of the scheduled call
        // At startup, the slot value will be empty, and will create an error if not caught! Hence the if statement!!! 
        if(!slot) return slot = ""
        slot.length == 5 ? this.schedule.time = slot : this.schedule.date = slot
      },
      async scheduleCall() {
        // ---- TODO ---- 
        // redirect to a page requiring the user to check his email for confirm!!
        // instead of loginWith + push to /dashboard
          await this.createEvent()
        // try {
        //   // let err = false
        //   // this.error(err)
        //   // this.pageRedirect(err,'4000','/blog')
        // } catch (error) {
        //   // err = true
        //   // this.error(err, error)
        // }
      },
      async createEvent(){
        // Inputs required for the email notification
        let inputs = {
          theme: this.theme,
          name: this.form.name,
          email: this.form.email,
          job: this.form.job,
          purpose: this.form.purpose,
          date: this.schedule.date,
          time: this.schedule.time,
          sched: this.schedule.sched,
          link: null
        }
        // Preparing event information
        const madrid = new Date()
        let diff = new Date(madrid).getTimezoneOffset()
        let offset = null
        diff == -60 ? offset=':00+01:00' : offset=':00+02:00'

        const start = this.schedule.date + 'T' + this.schedule.time + offset
        console.log('start'+start)
        const { st, et } = this.timeFrame(start)
        inputs.sched = st
        let event = {
            start: {
                'dateTime': st,
                'timeZone': 'Europe/Madrid',
            },
            end: {
                'dateTime': et,
                'timeZone': 'Europe/Madrid',
            },
            attendees: [{ email: this.form.email }],
            conferenceData: {
                createRequest: {
                    requestId: process.env.GAPI_REQ_ID,
                    conferenceSolutionKey: { type: "hangoutsMeet" },
                },
            },
            summary: this.theme,
            description: `Short conversation (30min) on how your company can benefit from a digital transformation, with a special focus on ${this.form.purpose}.`,
        }
        await gapi.client.calendar.events
          .insert({
            'calendarId': 'primary',
            'resource': event
          })
          .execute((ev) => {
            inputs.link = ev.htmlLink
            this.callMailRoute(inputs)
          })
      },
      async callMailRoute(inputs){
        this.err
        try {
          await this.$axios.post(process.env.NODE_ENV === 'production' ? '/mail' : '/api/mail', inputs)
          this.error(this.err)
          this.pageRedirect(this.err,'4000','/blog')
        } catch (error) {
          console.log('mail route > err!!!')
          this.err = true
          this.error(this.err, error)
        }
      },
      
      timeFrame(start){
          //format of value > this.schedule.date + 'T' + this.schedule.time + ':00.000Z'
          let st = new Date(start).getTime()
          let et = st+(1000*60*30)
          st = new Date(st).toISOString()
          et = new Date(et).toISOString()
          const dates = { st, et }
          return dates
      },
      pageRedirect(err, timeOut, destination){
        if(err) {
          this.snackbar.show = false
          return
        }
        setTimeout(() => this.$router.push(destination), timeOut)
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
        this.snackbar.message = 'Done! Your Discovery Call is scheduled.\nYou\'ll receive an email with details and instructions.'
      },
    },
  }
</script>
