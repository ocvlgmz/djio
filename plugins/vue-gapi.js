import Vue from 'vue'
import VueGapi from 'vue-gapi'

Vue.use(VueGapi, {
  apiKey: process.env.GAPI_API_KEY,
  clientId: '232288744858-118pjnna54b5k53btp3e2r49mde9u7ae.apps.googleusercontent.com',
  discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
  scope: 'https://www.googleapis.com/auth/calendar',
})
// Vue.use(VueGapi, {
//   apiKey: 'AIzaSyAzyWuZ0DYY7kiQFQZpcz4tHoQ6qsx3l9E',
//   clientId: '232288744858-a4pva893m78n7m8ns3bkftsae61esnkn.apps.googleusercontent.com',
//   discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
//   scope: 'https://www.googleapis.com/auth/calendar',
// })
