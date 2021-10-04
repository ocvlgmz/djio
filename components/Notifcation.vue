<template>
<v-row justify="center">
    <v-col cols="6" xsm="12">
        <v-alert
            :type="type"
            icon="mdi-information"
            >{{ message }}
        </v-alert>
    </v-col>
</v-row>
</template>

<script>
export default {
  name: 'Notification',
  props: ['message']
}
</script>