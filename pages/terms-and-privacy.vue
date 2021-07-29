<template>
  <v-container fluid>
    <Hero />
    <v-card flat>
      <v-row class="my-10" justify="center">
        <v-col cols="10">
          <v-card-title>Privacy Policy</v-card-title>
          <v-card-text>
            <p>
              Last updated: <span class="dj-yellow">{{ dateNow }}</span>
            </p>
            <p>
              My Company ("us", "we", or "our") operates https://digitaljam.io
              (the "Site"). This page informs you of our policies regarding the
              collection, use and disclosure of Personal Information we receive
              from users of the Site. We use your Personal Information only for
              providing and improving the Site. By using the Site, you agree to
              the collection and use of information in accordance with this
              policy.
            </p>
          </v-card-text>

          <v-card-title>Information Collection And Use</v-card-title>
          <v-card-text>
            <p>
              While using our Site, we may ask you to provide us with certain
              personally identifiable information that can be used to contact or
              identify you. Personally identifiable information may include, but
              is not limited to your name ("Personal Information").
            </p>
          </v-card-text>

          <v-card-title>Log Data</v-card-title>
          <v-card-text>
            <p>
              Like many site operators, we collect information that your browser
              sends whenever you visit our Site ("Log Data").
            </p>
            <p>
              This Log Data may include information such as your computer's
              Internet Protocol ("IP") address, browser type, browser version,
              the pages of our Site that you visit, the time and date of your
              visit, the time spent on those pages and other statistics.
            </p>
          </v-card-text>

          <v-card-title>Communications</v-card-title>
          <v-card-text>
            <p>
              We may use your Personal Information to contact you with
              newsletters, marketing or promotional materials and other
              information that we hope will be valuable to you, and ONLY after
              having obtained your expressed consent and permission through our
              subsciption form registration.
            </p>
            <p>
              This Log Data may include information such as your computer's
              Internet Protocol ("IP") address, browser type, browser version,
              the pages of our Site that you visit, the time and date of your
              visit, the time spent on those pages and other statistics.
            </p>
          </v-card-text>

          <v-card-title>Cookies</v-card-title>
          <v-card-text>
            <p>
              Cookies are files with small amount of data, which may include an
              anonymous unique identifier. Cookies are sent to your browser from
              a web site and stored on your computer's hard drive.
            </p>
            <p>
              Like many sites, we use "cookies" to collect information. You can
              instruct your browser to refuse all cookies or to indicate when a
              cookie is being sent. However, if you do not accept cookies, you
              may not be able to use some portions of our Site.
            </p>
          </v-card-text>

          <v-card-title>Security</v-card-title>
          <v-card-text>
            <p>
              The security of your Personal Information is important to us, but
              remember that no method of transmission over the Internet, or
              method of electronic storage, is 100% secure. While we strive to
              use commercially acceptable means to protect your Personal
              Information, we cannot guarantee its absolute security.
            </p>
          </v-card-text>

          <v-card-title>Changes To This Privacy Policy</v-card-title>
          <v-card-text>
            <p>
              This Privacy Policy is effective as of (add date) and will remain
              in effect except with respect to any changes in its provisions in
              the future, which will be in effect immediately after being posted
              on this page.
            </p>
            <p>
              We reserve the right to update or change our Privacy Policy at any
              time and you should check this Privacy Policy periodically. Your
              continued use of the Service after we post any modifications to
              the Privacy Policy on this page will constitute your
              acknowledgment of the modifications and your consent to abide and
              be bound by the modified Privacy Policy.
            </p>
            <p>
              If we make any material changes to this Privacy Policy, we will
              notify you either through the email address you have provided us,
              or by placing a prominent notice on our website.
            </p>
          </v-card-text>

          <v-card-title>Contact Us</v-card-title>
          <v-card-text>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us.
            </p>
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
// import Hero from '@/components/Hero.vue'
export default {
  // layout: 'default',
  // components: { Hero },
  data: () => ({}),
  computed: {
    dateNow: function () {
      const time = new Date().toUTCString().split(" ");
      return time[2] + " " + time[3];
    },
  },
};
</script>

<style scoped>
.tmp {
  border: 1px solid red;
}
</style>