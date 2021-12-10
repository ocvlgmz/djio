<template>        
    <v-card dark color="blue-grey darken-3" flat>
        <v-card-text>
            <v-row>
                <v-col cols="12" sm="6">                        
                    <!-- CHANGE
                    -- action: Removed v-model="menu" from v-menu
                    -- reason: doesn't seem to matter in this case
                    -->
                    <v-menu
                        ref="menu"
                        :close-on-content-click="false"
                        :return-value.sync="date"
                        transition="scale-transition"
                        offset-y
                        min-width="auto"
                    >
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                                v-model="date"
                                :rules="[v => !!v || 'Required']"
                                label="Date"
                                prepend-icon="mdi-calendar"
                                readonly
                                v-bind="attrs"
                                v-on="on"
                                @input="getAvailableSlots()"
                            ></v-text-field>
                        </template>
                        <v-date-picker
                            v-model="date"
                            :min="new Date().toISOString().substr(0, 10)"
                            no-title
                            scrollable
                            @change="$refs.menu.save(date);$emit('getValue',date)"
                        >
                        </v-date-picker>
                    </v-menu>
                </v-col>
                <v-col cols="12" sm="6">
                        <v-select 
                            v-model="slot" 
                            :items="slots" 
                            prepend-icon="mdi-clock" 
                            label="Time"
                            :change="$emit('getValue', slot)"
                            >               
                        </v-select>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card> 
</template>
<script>
    export default {
        data:() => ({
            // GAPI data
            isSignedIn: null,
            // Date Picker data
            date: null,
            // Inputs selection
            slot: null,
            slots: [],
        }),
        mounted() {
            this.$gapi.isSignedIn()
        },
        watch: {
            date() { return this.getAvailableSlots() },
            slots() { return this.slots }
        },
        methods: {
            getAvailableSlots() {
                // Set the slot range to check in GAPI calendar for events (UTC format)
                const startDate = this.date+'T08:00:00.000Z'
                const endDate = this.date+'T16:00:00.000Z' 

                // Preparing the query
                const query = {
                    resource: {
                        // UTC date format like '2021-06-11T00:00:00.000Z',
                        timeMin: startDate,
                        timeMax: endDate,
                        items: [{ id: 'primary' }],
                        timeZone: 'Europe/Madrid'
                    },
                }
                // Sending the query to GAPI
                gapi.client.calendar.freebusy.query(query)
                    .then((response) => {
                        //defining an arr of available spots to be filtered depending on availability of google cal
                        let defaultSlots = ['10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30','14:00','14:30','15:00','15:30','16:00','16:30','17:00','17:30']
                        const data = response.result.calendars.primary.busy
                        console.log('FreeBusy Data:', data)
                        if(data.length){
                            //retunr an [] with free slots
                            const busySlots = []
                            data.forEach( event => {
                                // Check starting and ending date of existing event
                                const evHr = new Date(event.start).getHours()
                                const evMin = new Date(event.start).getMinutes()
                                const evSlot = evHr+':'+(evMin=='0'?'00':evMin)
                                // Add the slot to the busySlots
                                busySlots.push(evSlot)
                                // Set the next available slot based on the length of existing event
                                const start = new Date(event.start).getTime()
                                const end = new Date(event.end).getTime() 
                                const duration = (end -start)/(1000*60)
                                const next = end + duration
                                const nextHr= new Date(next).getHours()
                                const nextMin= new Date(next).getMinutes()
                                const nextSlot = nextHr+':'+(nextMin=='0'?'00':nextMin)
                                // Add the buffer slot in the busySlots
                                busySlots.push(nextSlot)
                                return this.slots=defaultSlots.filter(slot => !busySlots.includes(slot))
                            })
                        } else {
                            this.slots = defaultSlots
                        }
                    })
                    .catch(err => { console.error("GAPI Query error:", err)
                    })
            },
        }
    }
</script>