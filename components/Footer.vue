<template>
    <v-footer app>
        <v-app-bar dense flat class="d-flex justify-center">
            <v-container d-flex align-center >
                <div class="hidden-sm-and-down">
                    <v-btn small fab dark outlined color="blue-grey darken-1" class="mx-2" :href="twitter"><v-icon >mdi-twitter</v-icon></v-btn>
                    <v-btn small fab dark outlined color="blue-grey darken-1" class="mx-2" :href="facebook"><v-icon>mdi-facebook</v-icon></v-btn>
                    <v-btn small fab dark outlined color="blue-grey darken-1" class="mx-2" :href="linkedin"><v-icon>mdi-linkedin</v-icon></v-btn>
                    <!-- <v-btn small fab dark outlined color="blue-grey darken-1" class="mx-2"><v-icon>mdi-youtube</v-icon></v-btn> -->
                    <!-- <v-btn small fab dark outlined color="blue-grey darken-1" class="mx-2"><v-icon>mdi-telegram</v-icon></v-btn> -->
                    <v-btn small fab dark outlined color="blue-grey darken-1" class="mx-2" :href="whatsapp"><v-icon>mdi-whatsapp</v-icon></v-btn>
                    <v-spacer></v-spacer>
                    <!-- <v-icon left color="#FABB28">mdi-cellphone-android</v-icon><v-btn plain color="blue-grey darken-1">+34 633 65 99 36</v-btn> -->
                    <!-- <v-icon left color="#FABB28">mdi-email</v-icon><v-btn plain color="blue-grey darken-1">msg@digitaljam.io</v-btn> -->
                    <!-- <v-btn outlined color="blue-grey darken-1"><v-icon color="#FABB28">mdi-chat</v-icon></v-btn> -->
                </div>
                <div class="hidden-md-and-up">
                    <v-btn icon small fab dark outlined color="blue-grey darken-1" class="mx-2" :href="twitter"><v-icon small>mdi-twitter</v-icon></v-btn>
                    <v-btn icon small fab dark outlined color="blue-grey darken-1" class="mx-2" :href="facebook"><v-icon small>mdi-facebook</v-icon></v-btn>
                    <v-btn icon small fab dark outlined color="blue-grey darken-1" class="mx-2" :href="linkedin"><v-icon small>mdi-linkedin</v-icon></v-btn>
                    <!-- <v-btn icon small fab dark outlined color="blue-grey darken-1" class="mx-2"><v-icon small>mdi-youtube</v-icon></v-btn> -->
                    <!-- <v-btn icon small fab dark outlined color="blue-grey darken-1" class="mx-2"><v-icon small>mdi-telegram</v-icon></v-btn> -->
                    <v-btn icon small fab dark outlined color="blue-grey darken-1" class="mx-2" :href="whatsapp"><v-icon small>mdi-whatsapp</v-icon></v-btn>
                    <v-spacer></v-spacer>
                    <!-- <v-icon small left color="#FABB28">mdi-cellphone-android</v-icon><v-btn plain color="blue-grey darken-1">+34 633 65 99 36</v-btn> -->
                    <!-- <v-icon small left color="#FABB28">mdi-email</v-icon><v-btn plain color="blue-grey darken-1">msg@digitaljam.io</v-btn> -->
                    <!-- <v-btn icon small outlined color="blue-grey darken-1"><v-icon small color="#FABB28">mdi-chat</v-icon></v-btn> -->
                </div>
            </v-container>
        </v-app-bar>
    </v-footer>
</template>
<script>
export default {
    data () {
        return {
            linkedin: 'https://www.linkedin.com/company/14463850',
            facebook: 'https://www.facebook.com/digitaljam.io',
            twitter: 'https://twitter.com/digitaljamIO',
            whatsapp: 'https://wa.me/+34633659936'
        }
    }
}
</script>
<style scoped>
.txt-default {
  font-size:24px;
}
.txt-small {
  font-size:20px;
}
</style>
