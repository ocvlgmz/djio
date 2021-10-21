import Vue from 'vue'
import VueGapi from 'vue-gapi'

export default ({ $config: { gapiApiKey, gapiClientId } }) => {
  Vue.use(VueGapi, {
    apiKey: gapiApiKey,
    clientId: gapiClientId,
    discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
    scope: 'https://www.googleapis.com/auth/calendar',
  })
}

