<template>
    <v-card dark color="#4c6070" tile elevation="3">
        <v-card-text>
            <v-row>
                <v-col cols="12" sm="6">                        
                    <v-menu
                        ref="menu"
                        v-model="menu"
                        :close-on-content-click="false"
                        :return-value.sync="date"
                        transition="scale-transition"
                        offset-y
                        min-width="auto"
                    >
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                                v-model="date"
                                label="Date"
                                prepend-icon="mdi-calendar"
                                readonly
                                v-bind="attrs"
                                v-on="on"
                                @input="calendarSlot()"
                            ></v-text-field>
                        </template>
                        <v-date-picker
                            v-model="date"
                            :min="new Date().toISOString().substr(0, 10)"
                            no-title
                            scrollable
                            @change="$refs.menu.save(date)"
                        >
                        </v-date-picker>
                    </v-menu>
                </v-col>
                <v-col cols="12" sm="6">
                        <v-select v-model="slot" :items="slots" prepend-icon="mdi-clock" label="Time">               
                        </v-select>
                </v-col>
            </v-row>
            <div> {{ username }}
            </div>
        </v-card-text> 
    </v-card> 
</template>
<script>
    export default {
        data: () => ({
            // Form data
            slots: [],
            slot: null,
            inputs: [{ttl:'ttl'}, {loc:'loc'}, {desc:'desc'}, {start:'start'}, {end:'end'}, {tz:'tz'}, {color:'color'}],
            // Google Auth data
            isSignedIn: null,
            // Google Calendar data
            calID: 'primary',
            cal: null,
            start:null,
            end:null,
            // Date picker data
            date: null,
            menu: false,
            modal: false,
            startTime: null,
            endTime: null
        }),
        mounted() {
            this.$gapi.listenUserSignIn((isSignedIn) => {
                this.isSignedIn = isSignedIn
                console.log('Value of isSignedIn',isSignedIn)
            })
        },
        watch:{
            date:function(){
                return this.calendarSlot()
            },
            slots:function(){
                return this.slots
            }
        },
        methods: {
            calendarList (){
                gapi.client.calendar.calendarList.list({
                        maxResults: 250,
                        minAccessRole: 'writer',
                    })
                    .execute(calendarListResponse => {
                        let calendars = calendarListResponse.items;
                        console.log(calendars.map(cal => cal.summary));
                    });
            },
            calendarSlot () {
                this.menu = false
                const startDate = this.date+'T10:00:00.000Z' 
                const endDate = this.date+'T18:00:00.000Z' 
                const startTime = new Date(startDate).getTime()
                const endTime = startTime + 30*60000
                this.startTime = startTime
                this.endTime = endTime
                    console.log('Start Date:',startDate)
                    console.log('Start Time:',startTime)
                    console.log('End Time:',endTime)
                const calendarId = this.calID
                const query = {
                    resource: {
                        // date format like '2021-06-11T00:00:00.000Z',
                        timeMin: startDate,
                        timeMax: endDate,
                        items: [{ id: calendarId }],
                    },
                }
                gapi.client.calendar.freebusy.query(query)
                    .then((response) => {
                        //defining an arr of available spots to be filtered depending on availability of google cal
                        let defaultSlots = ['10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30','14:00','14:30','15:00','15:30','16:00','16:30','17:00','17:30']
                        this.slots = defaultSlots
                        const data = response.result.calendars.primary.busy;
                        console.log('FreeBusy Data:', data);
                        if(data.length){
                            //retunr an arr with free slots
                            data.forEach( e => {
                                //extract the time of each event
                                let ev = e.start.substr(11,5)
                                return this.slots=this.slots.filter(slot => slot!==ev)


                                let st = e.start.substr(11,2)+e.start.substr(14,2)
                                let et = e.end.substr(11,2)+e.end.substr(14,2)
                                console.log('data val:',val)
                                console.log('data st:',st)
                                console.log('data et:',et)

//this part should shoudnt be there, it has to be placed when the user has already selected a date and time and the evnet is ready to be created.
//It actually doesnt make sense to test for slot availability since we already did it just before to determine the slot range to choose from!!!

                                //let's get the lenght of each event to determine the next slot
                                e.start = new Date(e.start).getTime()
                                e.end = new Date(e.end).getTime()
                                let est = e.start
                                let eet = e.end
                                let rd = this.reqDate
                                let buffer = 60*60000
                                //req meet with not be accepted if less than 60 min before the next event
                                // or at 30 min after the previous one.
                                if (!rd <= est-buffer || !rd >= eet+buffer/2){
                                    return console.log('Slot not available!')
                                }else
                                console.log('Booked!')
                                //ko if start event is = chosen time
                                // e.start !== this.reqDate
                                //ko if selected time is within 60min from next start event
                                //ko if selected time is during existing event
                                //ko if selected time is less than 30min after existing events  
                                return this.slots
                            })
                            console.log('Updated Slots:',this.slots)
                            console.log('There are some events!')
                        } else {
                            this.slots = defaultSlots
                            console.log('Slots:',this.slots)
                            console.log('No events!')
                            // return this.addCall()
                        }

                    },
                    function(err) { console.error("Execute error", err)
                    })
            },
            addCall(){
                // console.log('chosen slot:',this.slot)
                let st = this.date + 'T' + this.slot + ':00.000Z'
                st = new Date(st).getTime()
                let et = st+30*60000
                st = new Date(st).toISOString()
                et = new Date(et).toISOString()
                console.log('format ST:',st)
                console.log('format ET:',et)
                const event = {
                    // start: { dateTime: "2021-01-01T00:00:00.000+09:00" },
                    start:{
                        'dateTime': st,
                        // 'timeZone': 'Europe/Madrid',
                    },
                    end:{
                        'dateTime': et,
                        // 'timeZone': 'Europe/Madrid',
                    },
                        // start: { dateTime: this.startTime },
                        // end: { dateTime: this.endTime },
                    attendees: [{ email: "msg@digitaljam.io" }],
                    conferenceData: {
                        createRequest: {
                        requestId: "7qxalsvy0e",
                        conferenceSolutionKey: { type: "hangoutsMeet" },
                        },
                    },
                    summary: "sample event with Meet link",
                    description: "sample description",
                }
            },
        },
        computed: {
            //Google Auth computed data
            username() {
                const user = this.$gapi.getUserData()
                if (user) {
                    return user.firstName + ' ' + user.lastName 
                } else {
                    console.log('username error!')
                }
            },
            reqDate(){
                return this.date + this.slot
            }
        },
    }
</script>
<style scoped>

</style>