<template>
  <v-container fluid>
    <Hero />
    <!-- ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------  -->
    <!-- Network of collaborative minds -->
    <!-- ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------  -->
    <v-card flat class="ma-10">
      <v-row justify="center" align="center">
        <v-col cols="10" md="4" order="last">
          <Tagline />
        </v-col>
        <v-col cols="10" md="6" class="animate__animated animate__headShake">
          <v-card-title class="overline text-h4 dj-blue">
            <span class="gf-geo"
              >A network of
              <span class="dj-yellow">collaborative minds</span> combining data,
              technology and lesson learned, to
              <span class="dj-yellow"
                >enhance your value proposition.</span
              ></span
            >
          </v-card-title>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="10">
          <v-card-text class="text-h6 font-weight-light dj-blue">
            <p class="anim fade-in hidden">
              Data (customer, market, inputs, etc) has become the "fuel" your
              business needs to produce value. It needs to be collected, analyse
              and processed in order to extract value from which your selling
              proposition can be crafted. Since most of the information exists
              in a digital format, technology plays a commanding role in this
              process. Through decades, the digital economy has gained a certain
              degree of maturity, offering a wealth of invaluable lessons that
              can be leverage to improve existing solutions and create new ones.
            </p>
            <p class="anim fade-in hidden">
              The combination of these 3 elements (data, technology & lesson
              learned) represents Digital Jam's core approach in designing a
              very specific value-oriented framework to match your company's
              unique reality, allowing to produce lazer-targeted and highly
              valuable solutions based on verifiable and quantifiable
              information.
            </p>
            <p class="anim fade-in hidden">
              Digital Jam is a network of awesome people coming from around the
              world, covering a wide range of skills and experience. We work as
              a non-hierarchical organisation, allowing a very flexible and
              efficient approach when it comes to engage the right resources for
              each particular challenge.
            </p>
            <p class="anim fade-in-left hidden overline text-h5 dj-blue">
              <span class="dj-yellow">Bottom line:</span> Our mission is to
              enhance your value proposition, placing your business in a leading
              spot to server your market beyond expectations.
            </p>
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
    <!-- ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------  -->
    <!-- Core Team -->
    <!-- ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------  -->

    <v-card flat class="ma-10">
      <v-card-title
        class="mb-4 overline text-h2 dj-blue d-flex flex-column align-center"
      >
        <span class="gf-geo">Core Team</span>
      </v-card-title>
      <v-row justify="center" class="mx-10">
        <v-col cols="12" sm="6" md="4" lg="3" class="my-2">
          <Member
            name="Oliver Carvajal"
            :role="['Project Ops']"
            size="128"
            display="50"
            type="team"
          />
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="3" class="my-2">
          <Member
            name="Martin Andrews"
            :role="['HR Ops']"
            size="128"
            display="50"
            type="team"
          />
        </v-col>
        <v-col sm="6" md="4" lg="3" class="my-2">
          <Member
            name="Maureen Sandoval"
            :role="['Admin Ops']"
            size="128"
            display="50"
            type="team"
          />
        </v-col>
      </v-row>
    </v-card>
    <!-- ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------  -->
    <!-- Partners -->
    <!-- ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------  -->
    <v-card flat class="ma-10">
      <v-card-title
        class="mb-4 overline text-h2 dj-blue d-flex flex-column align-center"
      >
        <span class="gf-geo">Valued Partners</span>
      </v-card-title>
      <v-row justify="center">
        <v-col cols="4" sm="3" md="2" class="my-2">
          <Member
            name="H2O"
            size="128"
            display="0"
            :role="['Machine Learning']"
            type="tech"
          />
        </v-col>
        <v-col cols="4" sm="3" md="2" class="my-2">
          <Member
            name="databricks"
            size="128"
            display="0"
            :role="['Data Intelligence']"
            type="tech"
          />
        </v-col>
        <v-col cols="4" sm="3" md="2" class="my-2">
          <Member
            name="Rainbird"
            size="128"
            display="0"
            :role="['AI Automation']"
            type="tech"
          />
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col sm="10">
          <v-card-text
            class="
              anim
              fade-in-up
              hidden
              text-h6
              font-weight-light
              mt-10
              dj-blue
            "
          >
            We are constantly looking to expand our professional network. If our
            service approach and teamwork business model resonate with you, feel
            free to
            <Contact
              :title="'contact us'"
              :interest="['Collaboration', 'Partnership']"
              />
            to discuss collaboration or partnership.
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>

    <!-- ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------  -->
    <!-- Included Components -->
    <!-- ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------  -->

    <Observer target="" />
  </v-container>
</template>

<script>
// No need to register components with Nuxt: it works out of the box!
export default {
  // layout: "default",
  data: () => ({
    dialog: false,
  }),
};
</script>