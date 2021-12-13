<template>
  <v-container fluid>
    <!-- BREAKPOINT: lg -->
    <v-card flat tile class="ma-6" v-show="breakpoint.lg">
      <!-- SECTION: About-->
      <v-card flat tile class="mt-2 mb-8 pa-0">
      <!-- header: network of collective minds-->
        <v-row justify="center" align="center" class="">
          <v-col cols="4" order="first" class="mx-2 obs fade-in-left hidden">
            <v-card-title class="overline text-h4 text-orange-dark">
            <span class="font-bot">
              A network of collaborative minds combining data,
              technology and best practices, to enhance your value proposition.
            </span>
          </v-card-title>
          </v-col>
          <v-col cols="4" class="mx-2 d-flex justify-center obs fade-in-right hidden">
              <v-avatar size="254">
                <v-img :src="require('@/assets/img/network.png')"/>
              </v-avatar>
          </v-col>
        </v-row>
        <!-- data fuel  -->
        <v-row justify="center" align="center" class="">
          <v-col cols="8" class="obs fade-in-left hidden">
            <v-card-text class="text-h5 text-grey-dark font-weight-light">
              <p class="obs fade-in hidden">
                Data has become the "fuel" your business needs to produce value. It has to be collected, analyse and processed in order to extract value from which your selling proposition can be crafted. Since most of the information exists in a digital format, technology plays a commanding  and increasing role in this process.
              </p>
              <p class="obs fade-in hidden">
                Through decades, the digital economy has gained a certain degree of maturity, offering a wealth of invaluable lessons that can be leverage to improve existing solutions and create new ones.
              </p>
              <p class="obs fade-in hidden"> 
                The combination of these 3 elements (data, technology & best practices) represents <span class="text-orange-dark">Digital Jam's core approach</span> in designing a very specific value-oriented framework to match your company's unique reality, allowing to generate  lazer-targeted and highly valuable solutions based on verifiable and quantifiable information.
              </p>
              <p class="obs fade-in hidden">
                Digital Jam is a network of highly qualified people covering a wide range of skills, experience and background. We function as a non-hierarchical organisation, allowing a very flexible and efficient approach when it comes to engage the right resources for each particular challenge.
              </p>
              <v-list tile  color="blue-grey darken-4" class="my-10 pa-10 obs fade-in-left hidden">
                <v-list-item>
                  <v-list-item-icon class="align-self-center">
                    <v-icon large left color="deep-orange lighten-1">mdi-account-group</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content class="blue-grey--text text--lighten-3">
                    <v-list-item-title class="pa-2 text-h5 text-capitalize font-italic">our mission</v-list-item-title>
                     <p class="pa-2">
                      Help our clients improve their core value by leveraging data, technology and best practices, and take advantage of the growing number of business opportunities of the digital economy.
                     </p>
                     
                  </v-list-item-content>
                  <!-- <v-list-item-content class="text-blue-light" v-if="never">
                    <v-list-item-title class="overline text-h5 font-bot">our mission</v-list-item-title>
                     is to enhance your value proposition, placing your business in a leading spot to server your market beyond expectations.
                  </v-list-item-content> -->
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-col>
        </v-row>
      </v-card>

              <v-divider class="mb-16"></v-divider>

      <!-- SECTION: Core Team -->
      <v-card flat tile class="mt-2 mb-8 pa-0">
        <v-row justify="center" align="center" class="">
          <v-col cols="4" order="last" class="mx-2 obs fade-in-left hidden">
            <v-card-title class="overline text-h3 text-orange-dark">
            <span class="font-bot">Core Team</span>
          </v-card-title>
          </v-col>
        </v-row>
        <v-row justify="center" align="center">
          <v-col cols="3" class="mx-2 obs fade-in-up fade-in-up hidden">
            <Member name="Oliver Carvajal" :role="['Founder','Client Operations']" size="196" shape="50" type="team"/>
          </v-col>
          <v-col cols="3" class="mx-2 obs fade-in-up hidden">
            <Member name="Martin Andrews" :role="['Adviser','R&D Operations']" size="196" shape="50" type="team"/>
          </v-col>
          <v-col cols="3" class="mx-2 obs fade-in-up hidden">
            <Member name="Maureen Sandoval" :role="['Admin','Human Resources']" size="196" shape="50" type="team"/>
          </v-col>
        </v-row>
      </v-card>

        <v-divider class="mb-16"></v-divider>

      <!-- SECTION: Contact us -->
      <v-card flat tile class="mt-2 mb-8 pa-0">
        <v-row justify="center" align="center">
          <v-col cols="8" class="obs fade-in-left hidden">
            <v-card class="text-h5 text-grey-dark font-weight-light">
              <v-list tile  color="blue-grey darken-4" class="my-10 pa-10">
                <v-list-item>
                  <v-list-item-icon class="align-self-center">
                    <v-icon large left color="green lighten-1">mdi-handshake</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content class="blue-grey--text text--lighten-3">
                    <v-list-item-title class="pa-2 text-h4 text-capitalize font-italic">Growing together</v-list-item-title>
                    <p class="pa-2">
                      We are constantly looking to expand our professional network. If our service offer and teamwork approach resonate with you, feel free to send us an email to discuss collaboration or partnership. 
                    </p>
                    <ContactUs :title="'contact us'" :interest="['Collaboration', 'Partnership']"/>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-card>

    <!-- BREAKPOINT: md -->
    <v-card flat tile class="ma-6" v-show="breakpoint.md">
      <!-- SECTION: About-->
      <v-card flat tile class="mt-2 mb-8 pa-0">
      <!-- header: network of collective minds-->
        <v-row justify="center" align="center" class="">
          <v-col cols="4" order="first" class="mx-2 obs fade-in-left hidden">
            <v-card-title class="overline text-h4 text-orange-dark">
            <span class="font-bot">
              A network of collaborative minds combining data,
              technology and best practices, to enhance your value proposition.
            </span>
          </v-card-title>
          </v-col>
          <v-col cols="4" class="mx-2 d-flex justify-center obs fade-in-right hidden">
              <v-avatar size="254">
                <v-img :src="require('../assets/img/network.png')"/>
              </v-avatar>
          </v-col>
        </v-row>
        <!-- data fuel  -->
        <v-row justify="center" align="center" class="">
          <v-col cols="8" class="obs fade-in-left hidden">
            <v-card-text class="text-h5 text-grey-dark font-weight-light">
              <p class="obs fade-in hidden">
                Data has become the "fuel" your business needs to produce value. It has to be collected, analyse and processed in order to extract value from which your selling proposition can be crafted. Since most of the information exists in a digital format, technology plays a commanding  and increasing role in this process.
              </p>
              <p class="obs fade-in hidden">
                Through decades, the digital economy has gained a certain degree of maturity, offering a wealth of invaluable lessons that can be leverage to improve existing solutions and create new ones.
              </p>
              <p class="obs fade-in hidden"> 
                The combination of these 3 elements (data, technology & best practices) represents <span class="text-orange-dark">Digital Jam's core approach</span> in designing a very specific value-oriented framework to match your company's unique reality, allowing to generate  lazer-targeted and highly valuable solutions based on verifiable and quantifiable information.
              </p>
              <p class="obs fade-in hidden">
                Digital Jam is a network of highly qualified people covering a wide range of skills, experience and background. We function as a non-hierarchical organisation, allowing a very flexible and efficient approach when it comes to engage the right resources for each particular challenge.
              </p>
              <v-list tile  color="blue-grey darken-4" class="my-10 pa-10 obs fade-in-left hidden">
                <v-list-item>
                  <v-list-item-icon class="align-self-center">
                    <v-icon large left color="deep-orange lighten-1">mdi-account-group</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content class="blue-grey--text text--lighten-3">
                    <v-list-item-title class="pa-2 text-h4 text-capitalize font-italic">our mission</v-list-item-title>
                     <p class="pa-2">
                      Help our clients improve their core value by leveraging data, technology and best practices, and take advantage of the growing number of business opportunities of the digital economy.
                     </p>
                     
                  </v-list-item-content>
                  <!-- <v-list-item-content class="text-blue-light" v-if="never">
                    <v-list-item-title class="overline text-h5 font-bot">our mission</v-list-item-title>
                     is to enhance your value proposition, placing your business in a leading spot to server your market beyond expectations.
                  </v-list-item-content> -->
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-col>
        </v-row>
      </v-card>

              <v-divider class="mb-16"></v-divider>

      <!-- SECTION: Core Team -->
      <v-card flat tile class="mt-2 mb-8 pa-0">
        <v-row justify="center" align="center" class="">
          <v-col cols="6" order="last" class="mx-2 obs fade-in-left hidden">
            <v-card-title class="overline text-h3 text-orange-dark">
            <span class="font-bot">Core Team</span>
          </v-card-title>
          </v-col>
        </v-row>
        <v-row justify="center" align="center">
          <v-col cols="3" class="mx-2 obs fade-in-up fade-in-up hidden">
            <Member name="Oliver Carvajal" :role="['Founder','Client Operations']" size="196" shape="50" type="team"/>
          </v-col>
          <v-col cols="3" class="mx-2 obs fade-in-up hidden">
            <Member name="Martin Andrews" :role="['Adviser','R&D Operations']" size="196" shape="50" type="team"/>
          </v-col>
          <v-col cols="3" class="mx-2 obs fade-in-up hidden">
            <Member name="Maureen Sandoval" :role="['Admin','Human Resources']" size="196" shape="50" type="team"/>
          </v-col>
        </v-row>
      </v-card>

              <v-divider class="mb-16"></v-divider>

      <!-- SECTION: Contact us -->
      <v-card flat tile class="mt-2 mb-8 pa-0">
        <v-row justify="center" align="center">
          <v-col cols="8" class="obs fade-in-left hidden">
            <v-card class="text-h5 text-grey-dark font-weight-light">
              <v-list tile  color="blue-grey darken-4" class="my-10 pa-10">
                <v-list-item>
                  <v-list-item-icon class="align-self-center">
                    <v-icon large left color="green lighten-1">mdi-handshake</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content class="blue-grey--text text--lighten-3">
                    <v-list-item-title class="pa-2 text-h4 text-capitalize font-italic">Growing together</v-list-item-title>
                    <p class="pa-2">
                      We are constantly looking to expand our professional network. If our service offer and teamwork approach resonate with you, feel free to send us an email to discuss collaboration or partnership. 
                    </p>
                    <ContactUs :title="'contact us'" :interest="['Collaboration', 'Partnership']"/>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-card>
    
    <!-- BREAKPOINT: sm -->
    <v-card flat tile class="ma-6" v-show="breakpoint.sm">
      <!-- SECTION: About-->
      <v-card flat tile class="mt-2 mb-8 pa-0">
      <!-- header: network of collective minds-->
        <v-row justify="center" align="center" class="">
          <v-col cols="12" order="first" class="mx-2 obs fade-in-left hidden">
            <v-card-title class="overline text-h5 text-orange-dark">
            <span class="font-bot">
              A network of collaborative minds combining data,
              technology and best practices, to enhance your value proposition.
            </span>
          </v-card-title>
          </v-col>
          <!-- <v-col cols="4" class="mx-2 d-flex justify-center obs fade-in-right hidden">
              <v-avatar size="254">
                <v-img :src="require('../assets/img/network.png')"/>
              </v-avatar>
          </v-col> -->
        </v-row>
        <!-- data fuel  -->
        <v-row justify="center" align="center" class="">
          <v-col cols="12" class="obs fade-in-left hidden">
            <v-card-text class="text-h6 text-grey-dark font-weight-light">
              <p class="obs fade-in hidden">
                Data has become the "fuel" your business needs to produce value. It has to be collected, analyse and processed in order to extract value from which your selling proposition can be crafted. Since most of the information exists in a digital format, technology plays a commanding  and increasing role in this process.
              </p>
              <p class="obs fade-in hidden">
                Through decades, the digital economy has gained a certain degree of maturity, offering a wealth of invaluable lessons that can be leverage to improve existing solutions and create new ones.
              </p>
              <p class="obs fade-in hidden"> 
                The combination of these 3 elements (data, technology & best practices) represents <span class="text-orange-dark">Digital Jam's core approach</span> in designing a very specific value-oriented framework to match your company's unique reality, allowing to generate  lazer-targeted and highly valuable solutions based on verifiable and quantifiable information.
              </p>
              <p class="obs fade-in hidden">
                Digital Jam is a network of highly qualified people covering a wide range of skills, experience and background. We function as a non-hierarchical organisation, allowing a very flexible and efficient approach when it comes to engage the right resources for each particular challenge.
              </p>
              <v-list tile  color="blue-grey darken-4" class="my-5 pa-5 obs fade-in-left hidden">
                <v-list-item>
                  <v-list-item-icon class="align-self-center">
                    <v-icon left color="deep-orange lighten-1">mdi-account-group</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content class="blue-grey--text text--lighten-3">
                    <v-list-item-title class="pa-2 text-h5 text-capitalize font-italic">our mission</v-list-item-title>
                     <p class="pa-2">
                      Help our clients improve their core value by leveraging data, technology and best practices, and take advantage of the growing number of business opportunities of the digital economy.
                     </p>
                     
                  </v-list-item-content>
                  <!-- <v-list-item-content class="text-blue-light" v-if="never">
                    <v-list-item-title class="overline text-h5 font-bot">our mission</v-list-item-title>
                     is to enhance your value proposition, placing your business in a leading spot to server your market beyond expectations.
                  </v-list-item-content> -->
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-col>
        </v-row>
      </v-card>

              <v-divider class="mb-16"></v-divider>

      <!-- SECTION: Core Team -->
      <v-card flat tile class="mt-2 mb-8 pa-0">
        <v-row justify="center" align="center" class="">
          <v-col cols="12" order="last" class="mx-2 obs fade-in-left hidden">
            <v-card-title class="overline text-h4 text-orange-dark">
            <span class="font-bot">Core Team</span>
          </v-card-title>
          </v-col>
        </v-row>
        <v-row justify="center" align="center">
          <v-col cols="3" class="mx-2 obs fade-in-up fade-in-up hidden">
            <Member name="Oliver Carvajal" :role="['Founder','Client Operations']" size="196" shape="50" type="team"/>
          </v-col>
          <v-col cols="3" class="mx-2 obs fade-in-up hidden">
            <Member name="Martin Andrews" :role="['Adviser','R&D Operations']" size="196" shape="50" type="team"/>
          </v-col>
          <v-col cols="3" class="mx-2 obs fade-in-up hidden">
            <Member name="Maureen Sandoval" :role="['Admin','Human Resources']" size="196" shape="50" type="team"/>
          </v-col>
        </v-row>
      </v-card>

              <v-divider class="mb-16"></v-divider>

      <!-- SECTION: Contact us -->
      <v-card flat tile class="mt-2 mb-8 pa-0">
        <v-row justify="center" align="center">
          <v-col cols="12" class="obs fade-in-left hidden">
            <v-card class="text-h6 text-grey-dark font-weight-light">
              <v-list tile  color="blue-grey darken-4" class="my-5 pa-5">
                <v-list-item>
                  <v-list-item-icon class="align-self-center">
                    <v-icon left color="green lighten-1">mdi-handshake</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content class="blue-grey--text text--lighten-3">
                    <v-list-item-title class="pa-2 text-h5 text-capitalize font-italic">Growing together</v-list-item-title>
                    <p class="pa-2">
                      We are constantly looking to expand our professional network. If our service offer and teamwork approach resonate with you, feel free to send us an email to discuss collaboration or partnership. 
                    </p>
                    <ContactUs :title="'contact us'" :interest="['Collaboration', 'Partnership']"/>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
              
            </v-card>
          </v-col>
        </v-row>

      </v-card>
    </v-card>
    <!-- BREAKPOINT: xs (same as sm)-->
    <v-card flat tile class="ma-6" v-show="breakpoint.xs">
      <!-- SECTION: About-->
      <v-card flat tile class="mt-2 mb-8 pa-0">
      <!-- header: network of collective minds-->
        <v-row justify="center" align="center" class="">
          <v-col cols="12" order="first" class="mx-2 obs fade-in-left hidden">
            <v-card-title class="overline text-h5 text-orange-dark">
            <span class="font-bot">
              A network of collaborative minds combining data,
              technology and best practices, to enhance your value proposition.
            </span>
          </v-card-title>
          </v-col>
          <!-- <v-col cols="4" class="mx-2 d-flex justify-center obs fade-in-right hidden">
              <v-avatar size="254">
                <v-img :src="require('../assets/img/network.png')"/>
              </v-avatar>
          </v-col> -->
        </v-row>
        <!-- data fuel  -->
        <v-row justify="center" align="center" class="">
          <v-col cols="12" class="obs fade-in-left hidden">
            <v-card-text class="text-h6 text-grey-dark font-weight-light">
              <p class="obs fade-in hidden">
                Data has become the "fuel" your business needs to produce value. It has to be collected, analyse and processed in order to extract value from which your selling proposition can be crafted. Since most of the information exists in a digital format, technology plays a commanding  and increasing role in this process.
              </p>
              <p class="obs fade-in hidden">
                Through decades, the digital economy has gained a certain degree of maturity, offering a wealth of invaluable lessons that can be leverage to improve existing solutions and create new ones.
              </p>
              <p class="obs fade-in hidden"> 
                The combination of these 3 elements (data, technology & best practices) represents <span class="text-orange-dark">Digital Jam's core approach</span> in designing a very specific value-oriented framework to match your company's unique reality, allowing to generate  lazer-targeted and highly valuable solutions based on verifiable and quantifiable information.
              </p>
              <p class="obs fade-in hidden">
                Digital Jam is a network of highly qualified people covering a wide range of skills, experience and background. We function as a non-hierarchical organisation, allowing a very flexible and efficient approach when it comes to engage the right resources for each particular challenge.
              </p>
              <v-list tile  color="blue-grey darken-4" class="my-5 pa-4 obs fade-in-right hidden">
                <v-list-item class="d-flex flex-column">
                  <v-list-item-icon class="align-self-center">
                    <v-icon left color="deep-orange lighten-1">mdi-account-group</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content class="blue-grey--text text--lighten-3">
                    <v-list-item-title class="pa-2 text-h5 text-capitalize font-italic">our mission</v-list-item-title>
                     <p class="">
                      Help our clients improve their core value by leveraging data, technology and best practices, and take advantage of the growing number of business opportunities of the digital economy.
                     </p>
                     
                  </v-list-item-content>
                  <!-- <v-list-item-content class="text-blue-light" v-if="never">
                    <v-list-item-title class="overline text-h5 font-bot">our mission</v-list-item-title>
                     is to enhance your value proposition, placing your business in a leading spot to server your market beyond expectations.
                  </v-list-item-content> -->
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-col>
        </v-row>
      </v-card>

              <v-divider class="mb-16"></v-divider>

      <!-- SECTION: Core Team -->
      <v-card flat tile class="mt-2 mb-8 pa-0">
        <v-row justify="center" align="center" class="">
          <v-col cols="12" order="last" class="mx-2 obs fade-in-left hidden">
            <v-card-title class="overline text-h4 text-orange-dark">
            <span class="font-bot">Core Team</span>
          </v-card-title>
          </v-col>
        </v-row>
        <v-row justify="center" align="center">
          <v-col cols="3" class="mx-2 obs fade-in-up fade-in-up hidden">
            <Member name="Oliver Carvajal" :role="['Founder','Client Operations']" size="196" shape="50" type="team"/>
          </v-col>
          <v-col cols="3" class="mx-2 obs fade-in-up hidden">
            <Member name="Martin Andrews" :role="['Adviser','R&D Operations']" size="196" shape="50" type="team"/>
          </v-col>
          <v-col cols="3" class="mx-2 obs fade-in-up hidden">
            <Member name="Maureen Sandoval" :role="['Admin','Human Resources']" size="196" shape="50" type="team"/>
          </v-col>
        </v-row>
      </v-card>

              <v-divider class="mb-16"></v-divider>

      <!-- SECTION: Contact us -->
      <v-card flat tile class="mt-2 mb-8 pa-0">
        <v-row justify="center" align="center">
          <v-col cols="12" class="obs fade-in-right hidden">
            <v-card class="text-h6 text-grey-dark font-weight-light">
              <v-list tile  color="blue-grey darken-4" class="my-2 pa-4">
                <v-list-item class="d-flex flex-column">
                  <v-list-item-icon class="pt-2 align-self-center">
                    <v-icon left color="green lighten-1">mdi-handshake</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content class="blue-grey--text text--lighten-3">
                    <v-list-item-title class="pa-2 text-h5 text-capitalize font-italic">Growing together</v-list-item-title>
                    <p class="">
                      We are constantly looking to expand our professional network. If our service offer and teamwork approach resonate with you, feel free to send us an email to discuss collaboration or partnership. 
                    </p>
                    <ContactUs :title="title" :interest="interest"/>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
              
            </v-card>
          </v-col>
        </v-row>

      </v-card>
    </v-card>

  </v-container>
</template>

<script>
// No need to register components with Nuxt: it works out of the box!
export default {
  // layout: "default",
  data: () => ({
    never: null,
    dialog: false,
    title:'contact us',
    interest:['Collaboration', 'Partnership']

  }),
  mounted() {
    this.observer = new IntersectionObserver(this.onIntersect, {
      root: null,
      rootMargin: "0px 0px 0px 0px",
      threshold: 0,
    })
    document.querySelectorAll(".obs").forEach((el) => {
      this.observer.observe(el);
    })
  },
  methods: {
    onIntersect(entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          switch (entry.target.classList.contains("obs")) {
            case entry.target.classList.contains("head-shake"):
              entry.target.classList.add(
                "animate__animated",
                "animate__headShake"
              );
              entry.target.classList.remove("hidden");
              observer.unobserve(entry.target);
              break;
            case entry.target.classList.contains("fade-in-left"):
              entry.target.classList.add(
                "animate__animated",
                "animate__fadeInLeft"
              );
              entry.target.classList.remove("hidden");
              observer.unobserve(entry.target);
              break;
            case entry.target.classList.contains("fade-in-right"):
              entry.target.classList.add(
                "animate__animated",
                "animate__fadeInRight"
              );
              entry.target.classList.remove("hidden");
              observer.unobserve(entry.target);
              break;
            case entry.target.classList.contains("fade-in"):
              entry.target.classList.add(
                "animate__animated",
                "animate__fadeIn"
              );
              entry.target.classList.remove("hidden");
              observer.unobserve(entry.target);
              break;
            case entry.target.classList.contains("fade-in-up"):
              entry.target.classList.add(
                "animate__animated",
                "animate__fadeInUp",
                "animate__delay-1s"
              );
              entry.target.classList.remove("hidden");
              observer.unobserve(entry.target);
              break;
            case entry.target.classList.contains("fade-in-down"):
              entry.target.classList.add(
                "animate__animated",
                "animate__fadeInDown",
                "animate__delay-1s"
              );
              entry.target.classList.remove("hidden");
              observer.unobserve(entry.target);
              break;
          }
        }
      })
    },
  },
  computed: {
    breakpoint () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return { xs: true, sm: false, md: false, lg: false, xl: false, name:'xs' }
        case 'sm': return { xs: false, sm: true, md: false, lg: false, xl: false, name:'sm' }
        case 'md': return { xs: false, sm: false, md: true, lg: false, xl: false, name:'md' }
        case 'lg': return { xs: false, sm: false, md: false, lg: true, xl: false, name:'lg' }
        case 'xl': return { xs: false, sm: false, md: false, lg: false, xl: true, name:'xl' }
      }
    }
  }
}
</script>
<style scoped>
.font-bot {
  font-family: var(--font-geo);
}
</style>