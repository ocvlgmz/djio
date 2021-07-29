<template>
  <v-container fluid>
    <Hero />
    <!-- ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------  -->
    <!-- Let's boost your digital strategy -->
    <!-- ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------  -->
    <v-card flat class="ma-6">
      <v-row justify="center" align="center" class="hidden-lg-and-up">
        <v-col cols="6" order="first" class="anim fade-in-left hidden">
          <v-card-title class="overline text-h4 text-sm-h3 dj-blue">
            <span class="gf-geo">Let's boost your digital strategy</span>
          </v-card-title>
        </v-col>
        <v-col cols="4" class="anim fade-in-right hidden">
          <v-img :src="require('../assets/img/thinking.png')" />
        </v-col>
      </v-row>
      <v-row justify="center" align="center" class="hidden-lg-and-up">
        <v-col cols="10" class="anim fade-in hidden">
          <v-card-text class="text-h6 text-md-h5 font-weight-light dj-blue">
            <p>
              The digitalization of our economy is accelerating and touching
              everything: products, services, assets, processes, collaboration,
              etc.
            </p>
            <p>
              Regardless of your industry, there are
              <strong>3 keys dimensions</strong> your business shouldn't ignore
              anymore: <strong>Data</strong>, <strong>AI</strong> and
              <strong>CX</strong> (Customer eXperience).
            </p>
            <p>
              We can help you organisation embark on this inevitable DX (Digital
              Tranformation) journey by providing the following top-notch
              professional services:
            </p>
            <v-list>
              <v-list-item>
                <v-list-item-icon class="align-self-center">
                  <v-icon left>mdi-console</v-icon>
                </v-list-item-icon>
                <v-list-item-content class="dj-blue">
                  Technical expertise to help you understand, choose and
                  implement the relevant technology that best fit for purpose.
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon class="align-self-center">
                  <v-icon left>mdi-strategy</v-icon>
                </v-list-item-icon>
                <v-list-item-content class="dj-blue">
                  Analytical capabilities to assess, capture and translate
                  business needs into functional & technical requirements to
                  generate a desirable outomce in line with your specific goals.
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-col>
      </v-row>
      <!-- lg display -->
      <v-row justify="center" align="center" class="hidden-md-and-down">
        <v-col cols="6" order="first" class="anim fade-in-left hidden">
          <v-card-title class="overline text-lg-h2 dj-blue">
            <span class="gf-geo">Let's boost your digital strategy</span>
          </v-card-title>
          <v-card-text
            class="text-h5 font-weight-light dj-blue anim fade-in hidden"
          >
            <p>
              The digitalization of our economy is accelerating and touching
              everything: products, services, assets, processes, collaboration,
              etc.
            </p>
            <p>
              Regardless of your industry, there are
              <strong>3 keys dimensions</strong> your business shouldn't ignore
              anymore: <strong>Data</strong>, <strong>AI</strong> and
              <strong>CX</strong> (Customer eXperience).
            </p>
            <p>
              We can help you organisation embark on this inevitable DX (Digital
              Tranformation) journey by providing the following top-notch
              professional services:
            </p>
            <v-list>
              <v-list-item>
                <v-list-item-icon class="align-self-center">
                  <v-icon left>mdi-console</v-icon>
                </v-list-item-icon>
                <v-list-item-content class="dj-blue">
                  Technical expertise to help you understand, choose and
                  implement the relevant technology that best fit for purpose.
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon class="align-self-center">
                  <v-icon left>mdi-strategy</v-icon>
                </v-list-item-icon>
                <v-list-item-content class="dj-blue">
                  Analytical capabilities to assess, capture and translate
                  business needs into functional & technical requirements to
                  generate a desirable outomce in line with your specific goals.
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-col>
        <v-col cols="4" class="hidden-xs-only anim fade-in-right hidden">
          <v-img :src="require('../assets/img/thinking.png')" />
        </v-col>
      </v-row>
    </v-card>

    <!-- ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------  -->
    <!-- the customer, the  value and the tech. -->
    <!-- ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------  -->

    <v-card flat class="ma-6">
      <v-row justify="center" align="center" class="hidden-lg-and-up">
        <v-col cols="6" order="last" class="anim fade-in-right hidden">
          <v-card-title class="overline text-h4 text-sm-h3 dj-blue">
            <span class="gf-geo">the customer, the value and the tech.</span>
          </v-card-title>
        </v-col>
        <v-col cols="4" class="anim fade-in-left hidden">
          <v-img :src="require('../assets/img/value.png')" />
        </v-col>
      </v-row>
      <v-row justify="center" align="center" class="hidden-lg-and-up">
        <v-col cols="10" class="anim fade-in hidden">
          <v-card-text class="text-h6 text-md-h5 font-weight-light dj-blue">
            <p>
              Because technology plays a leading role in digital transformation,
              it's a natural to think of it as the adoption of cutting edge
              systems to ensure peak performances and all the good stuff. In
              fact, the real purpose of digital transformation consists of
              <strong>leverage technology</strong> to
              <strong>improve your value proposition</strong> and
              <strong>create a better customer experience</strong>.
            </p>
            <p>
              Therefore, the success of your digital transformation will
              <strong>require a holistic approach</strong> involving, in
              addition to technology, other dimensions such as customer
              relationship, value proposition, team collaboration, processes,
              strategy, leadership, etc.
            </p>
          </v-card-text>
        </v-col>
      </v-row>
      <!-- lg display -->
      <v-row justify="center" align="center" class="hidden-md-and-down">
        <v-col cols="6" order="last" class="anim fade-in-right hidden">
          <v-card-title class="overline text-lg-h2 dj-blue">
            <span class="gf-geo">the customer, the value and the tech.</span>
          </v-card-title>
          <v-card-text class="text-h5 font-weight-light dj-blue">
            <p>
              Because technology plays a leading role in digital transformation,
              it's a natural to think of it as the adoption of cutting edge
              systems to ensure peak performances and all the good stuff. In
              fact, the real purpose of digital transformation consists of
              <strong>leverage technology</strong> to
              <strong>improve your value proposition</strong> and
              <strong>create a better customer experience</strong>.
            </p>
            <p>
              Therefore, the success of your digital transformation will
              <strong>require a holistic approach</strong> involving, in
              addition to technology, other dimensions such as customer
              relationship, value proposition, team collaboration, processes,
              strategy, leadership, etc.
            </p>
          </v-card-text>
        </v-col>
        <v-col cols="4" class="anim fade-in-left hidden">
          <v-img :src="require('../assets/img/value.png')" />
        </v-col>
      </v-row>
    </v-card>

    <!-- ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------  -->
    <!-- 4 STEPS WORKFLOW -->
    <!-- ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------  -->

    <v-card flat color="transparent" class="ma-6">
      <v-row justify="center" align="center">
        <v-col
          cols="6"
          order="first"
          class="d-flex justify-center anim fade-in-left hidden"
        >
          <v-card-title class="overline text-h4 text-sm-h3 text-lg-h2 dj-blue">
            <span class="gf-geo">Our 4 step action plan</span>
          </v-card-title>
        </v-col>
        <v-col cols="4" class="anim fade-in-right hidden">
          <v-img :src="require('../assets/img/chess.png')" />
        </v-col>
      </v-row>
      <!-- small & down displays -->
      <v-row class="hidden-md-and-up">
        <v-timeline dense>
          <!-- Step #1 -->
          <v-timeline-item large icon="mdi-numeric-1" color="indigo lighten">
            <div slot="opposite" class="bg-wf-assess anim fade-in hidden"></div>
            <v-card-title
              class="overline text-h6 text-sm-h5 dj-blue anim fade-in hidden"
            >
              <span class="wb">Assess the situation</span>
            </v-card-title>
            <v-card-text
              class="
                text-h6 text-md-h5
                font-weight-light
                dj-blue
                anim
                fade-in
                hidden
              "
            >
              <p>
                We check the 4 areas of your business (customer, offer,
                operation and organisation) and assess how each of them helps
                generating value. The following tasks will be done:
              </p>
              <v-list>
                <v-list-item>
                  <v-list-item-icon class="align-self-center">
                    <v-icon left>mdi-clipboard-edit-outline</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content class="dj-blue">
                    Identify a broad list of things that would be subject to
                    digitalization
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-icon class="align-self-center">
                    <v-icon left>mdi-map</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content class="dj-blue">
                    Build a digital roadmap taking into consideration your
                    company's circumstances, priorities, targets and goals."
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-timeline-item>

          <!-- Step #2 -->
          <v-timeline-item large icon="mdi-numeric-2" color="red darken-2">
            <div slot="opposite" class="bg-wf-frame anim fade-in hidden"></div>
            <v-card-subtitle
              class="overline text-h6 text-sm-h5 dj-blue anim fade-in hidden"
            >
              <span class="wb">Frame the opportunity</span>
            </v-card-subtitle>
            <v-card-text
              class="
                text-h6 text-md-h5
                font-weight-light
                dj-blue
                anim
                fade-in
                hidden
              "
            >
              <p>
                Based on the findings of the previous step, we'll need to decide
                where to place the focus by defining a very specific aspect of
                the business that will improve or add more value to it. We'll
                work on the following:
              </p>
              <v-list>
                <v-list-item>
                  <v-list-item-icon class="align-self-center">
                    <v-icon left>mdi-magnify-scan</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content class="dj-blue">
                    Identify the most important challenges to address
                    (opportunity/threat assessment)
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-icon class="align-self-center">
                    <v-icon left>mdi-star</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content class="dj-blue">
                    Select the best opportunity to go for (risk/reward of
                    assessment)
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-timeline-item>

          <!-- Step #3 -->
          <v-timeline-item large icon="mdi-numeric-3" color="orange darken-2">
            <div slot="opposite" class="bg-wf-case anim fade-in hidden"></div>
            <v-card-subtitle
              class="overline text-h6 text-sm-h5 dj-blue anim fade-in hidden"
            >
              <span class="wb">Build the case</span>
            </v-card-subtitle>
            <v-card-text
              class="
                text-h6 text-md-h5
                font-weight-light
                dj-blue
                anim
                fade-in
                hidden
              "
            >
              <p>
                Once the current focus identified and selected, we'll translate
                it into a business proposition and examine how to implement it.
                We will work on the following:
              </p>
              <v-list>
                <v-list-item>
                  <v-list-item-icon class="align-self-center">
                    <v-icon left>mdi-bullseye</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content class="dj-blue">
                    Define the use case (scenario, scope and goal)
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-icon class="align-self-center">
                    <v-icon left>mdi-sparkles</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content class="dj-blue">
                    Specify the benefits and the outcome
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-icon class="align-self-center">
                    <v-icon left>mdi-puzzle</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content class="dj-blue">
                    Identify the moving parts (resources, technology, processes)
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-timeline-item>

          <!-- Step #4 -->
          <v-timeline-item large icon="mdi-numeric-4" color="cyan darken-3">
            <div
              slot="opposite"
              class="bg-wf-project anim fade-in hidden"
            ></div>
            <v-card-subtitle
              class="overline text-h6 text-sm-h5 dj-blue anim fade-in hidden"
            >
              <span class="wb">Implement the solution</span>
            </v-card-subtitle>
            <v-card-text
              class="
                text-h6 text-md-h5
                font-weight-light
                dj-blue
                anim
                fade-in
                hidden
              "
            >
              <p>
                Once the business case is validated, we're ready to launch the
                project. I will take care of the following:
              </p>
              <v-list>
                <v-list-item>
                  <v-list-item-icon class="align-self-center">
                    <v-icon left>mdi-chart-gantt</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content class="dj-blue">
                    Define the planning (activities, processes, resources)
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-icon class="align-self-center">
                    <v-icon left>mdi-tune-variant</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content class="dj-blue">
                    Specify the metrics (cost, kpi, timeline)
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-icon class="align-self-center">
                    <v-icon left>mdi-ship-wheel</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content class="dj-blue">
                    Manage the exectution of the project from start to finish.
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-timeline-item>
        </v-timeline>
      </v-row>
      <!-- medium & up displays -->
      <v-row class="hidden-sm-and-down">
        <v-timeline>
          <!-- Step #1 -->
          <v-timeline-item large icon="mdi-numeric-1" color="indigo lighten">
            <div slot="opposite" class="bg-wf-assess anim fade-in hidden"></div>
            <v-card-title
              class="overline text-h5 text-md-h5 dj-blue anim fade-in hidden"
            >
              <span class="wb">Assess the situation</span>
            </v-card-title>
            <v-card-text
              class="
                text-h6 text-md-h5
                font-weight-light
                dj-blue
                anim
                fade-in
                hidden
              "
            >
              <p>
                We check the 4 areas of your business (customer, offer,
                operation and organisation) and assess how each of them helps
                generating value. The following tasks will be done:
              </p>
              <v-list>
                <v-list-item>
                  <v-list-item-icon class="align-self-center">
                    <v-icon left>mdi-clipboard-edit-outline</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content class="dj-blue">
                    Identify a broad list of things that would be subject to
                    digitalization
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-icon class="align-self-center">
                    <v-icon left>mdi-map</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content class="dj-blue">
                    Build a digital roadmap taking into consideration your
                    company's circumstances, priorities, targets and goals."
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-timeline-item>

          <!-- Step #2 -->
          <v-timeline-item large icon="mdi-numeric-2" color="red darken-2">
            <div slot="opposite" class="bg-wf-frame anim fade-in hidden"></div>
            <v-card-subtitle
              class="overline text-h6 text-md-h5 dj-blue anim fade-in hidden"
            >
              <span class="wb">Frame the opportunity</span>
            </v-card-subtitle>
            <v-card-text
              class="
                text-h6 text-md-h5
                font-weight-light
                dj-blue
                anim
                fade-in
                hidden
              "
            >
              <p>
                Based on the findings of the previous step, we'll need to decide
                where to place the focus by defining a very specific aspect of
                the business that will improve or add more value to it. We'll
                work on the following:
              </p>
              <v-list>
                <v-list-item>
                  <v-list-item-icon class="align-self-center">
                    <v-icon left>mdi-magnify-scan</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content class="dj-blue">
                    Identify the most important challenges to address
                    (opportunity/threat assessment)
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-icon class="align-self-center">
                    <v-icon left>mdi-star</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content class="dj-blue">
                    Select the best opportunity to go for (risk/reward of
                    assessment)
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-timeline-item>

          <!-- Step #3 -->
          <v-timeline-item large icon="mdi-numeric-3" color="orange darken-2">
            <div slot="opposite" class="bg-wf-case anim fade-in hidden"></div>
            <v-card-subtitle
              class="overline text-h6 text-md-h5 dj-blue anim fade-in hidden"
            >
              <span class="wb">Build the case</span>
            </v-card-subtitle>
            <v-card-text
              class="
                text-h6 text-md-h5
                font-weight-light
                dj-blue
                anim
                fade-in
                hidden
              "
            >
              <p>
                Once the current focus identified and selected, we'll translate
                it into a business proposition and examine how to implement it.
                We will work on the following:
              </p>
              <v-list>
                <v-list-item>
                  <v-list-item-icon class="align-self-center">
                    <v-icon left>mdi-bullseye</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content class="dj-blue">
                    Define the use case (scenario, scope and goal)
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-icon class="align-self-center">
                    <v-icon left>mdi-sparkles</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content class="dj-blue">
                    Specify the benefits and the outcome
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-icon class="align-self-center">
                    <v-icon left>mdi-puzzle</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content class="dj-blue">
                    Identify the moving parts (resources, technology, processes)
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-timeline-item>

          <!-- Step #4 -->
          <v-timeline-item large icon="mdi-numeric-4" color="cyan darken-3">
            <div
              slot="opposite"
              class="bg-wf-project anim fade-in hidden"
            ></div>
            <v-card-subtitle
              class="overline text-h6 text-md-h5 dj-blue anim fade-in hidden"
            >
              <span class="wb">Implement the solution</span>
            </v-card-subtitle>
            <v-card-text
              class="
                text-h6 text-md-h5
                font-weight-light
                dj-blue
                anim
                fade-in
                hidden
              "
            >
              <p>
                Once the business case is validated, we're ready to launch the
                project. I will take care of the following:
              </p>
              <v-list>
                <v-list-item>
                  <v-list-item-icon class="align-self-center">
                    <v-icon left>mdi-chart-gantt</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content class="dj-blue">
                    Define the planning (activities, processes, resources)
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-icon class="align-self-center">
                    <v-icon left>mdi-tune-variant</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content class="dj-blue">
                    Specify the metrics (cost, kpi, timeline)
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-icon class="align-self-center">
                    <v-icon left>mdi-ship-wheel</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content class="dj-blue">
                    Manage the exectution of the project from start to finish.
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-timeline-item>
        </v-timeline>
      </v-row>
    </v-card>

    <!-- ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------  -->
    <!-- References -->
    <!-- ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------  -->

    <v-card flat>
      <v-row class="my-10" justify="center">
        <v-col cols="10">
          <v-card-title
            class="
              overline
              text-h4 text-sm-h3 text-lg-h2
              dj-blue
              anim
              fade-in-right
              hidden
            "
          >
            <span class="gf-geo">Organisations who trusted us</span>
          </v-card-title>
          <v-card-text class="anim fade-in-up hidden">
            <v-row align="center" class="my-6">
              <v-col
                v-for="itm in refs"
                :key="itm.id"
                class="mx-6 d-flex justify-center"
              >
                <v-img
                  :src="itm.pic"
                  :lazy-src="itm.pic"
                  :max-height="itm.maxH"
                  :max-width="itm.maxW"
                  class="filter"
                >
                </v-img>
              </v-col>
            </v-row>
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>
<script>
export default {
  // layout: "default",
  data: () => ({
    observer: null,
    refs: [
      {
        name: "genesys",
        pic: require("@/assets/img/genesys.png"),
        maxH: "75",
        maxW: "150",
        link: "genesy.com",
      },
      {
        name: "accenture",
        pic: require("@/assets/img/accenture.png"),
        maxH: "75",
        maxW: "200",
        link: ".com",
      },
      {
        name: "axa",
        pic: require("@/assets/img/axa.png"),
        maxH: "120",
        maxW: "120",
        link: ".com",
      },
      {
        name: "base",
        pic: require("@/assets/img/base.png"),
        maxH: "75",
        maxW: "150",
        link: ".com",
      },
      {
        name: "nxo",
        pic: require("@/assets/img/nxo.png"),
        maxH: "75",
        maxW: "120",
        link: ".com",
      },
      {
        name: "canal+",
        pic: require("@/assets/img/canal+.png"),
        maxH: "100",
        maxW: "200",
        link: ".com",
      },
      {
        name: "proximus",
        pic: require("@/assets/img/proximus.png"),
        maxH: "100",
        maxW: "200",
        link: ".com",
      },
      {
        name: "leroy-merlin",
        pic: require("@/assets/img/leroy-merlin.png"),
        maxH: "120",
        maxW: "180",
        link: ".com",
      },
      {
        name: "isracard",
        pic: require("@/assets/img/isracard.png"),
        maxH: "100",
        maxW: "200",
        link: ".com",
      },
      {
        name: "deutchebank",
        pic: require("@/assets/img/deutchebank.png"),
        maxH: "180",
        maxW: "180",
        link: ".com",
      },
      {
        name: "dexia",
        pic: require("@/assets/img/dexia.png"),
        maxH: "100",
        maxW: "200",
        link: ".com",
      },
      {
        name: "euroclear",
        pic: require("@/assets/img/euroclear.png"),
        maxH: "150",
        maxW: "170",
        link: ".com",
      },
      {
        name: "atos",
        pic: require("@/assets/img/atos.png"),
        maxH: "120",
        maxW: "180",
        link: ".com",
      },
    ],
  }),
  mounted() {
    this.observer = new IntersectionObserver(this.onIntersect, {
      root: null,
      rootMargin: "0px 0px 0px 0px",
      threshold: 0,
    });
    document.querySelectorAll(".anim").forEach((el) => {
      this.observer.observe(el);
    });
  },
  methods: {
    onIntersect(entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          switch (entry.target.classList.contains("anim")) {
            case entry.target.classList.contains("head-shake"):
              console.log("case = fil");
              entry.target.classList.add(
                "animate__animated",
                "animate__headShake"
              );
              entry.target.classList.remove("hidden");
              observer.unobserve(entry.target);
              break;
            case entry.target.classList.contains("fade-in-left"):
              console.log("case = fil");
              entry.target.classList.add(
                "animate__animated",
                "animate__fadeInLeft"
              );
              entry.target.classList.remove("hidden");
              observer.unobserve(entry.target);
              break;
            case entry.target.classList.contains("fade-in-right"):
              console.log("case = fir");
              entry.target.classList.add(
                "animate__animated",
                "animate__fadeInRight"
              );
              entry.target.classList.remove("hidden");
              observer.unobserve(entry.target);
              break;
            case entry.target.classList.contains("fade-in"):
              console.log("case = fi");
              entry.target.classList.add(
                "animate__animated",
                "animate__fadeIn"
              );
              entry.target.classList.remove("hidden");
              observer.unobserve(entry.target);
              break;
            case entry.target.classList.contains("fade-in-up"):
              console.log("case = fiu");
              entry.target.classList.add(
                "animate__animated",
                "animate__fadeInUp",
                "animate__delay-1s"
              );
              entry.target.classList.remove("hidden");
              observer.unobserve(entry.target);
              break;
            case entry.target.classList.contains("fade-in-down"):
              console.log("case = fid");
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
      });
    },
  },
};
</script>
<style>
.filter {
  filter: grayscale(0.66);
}
.bg-value {
  background-image: url(../assets/img/value.png);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 250px;
}
.bg-wf-assess {
  background-image: url(../assets/img/assess.png);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 250px;
  /* border: 1px solid red; */
}
.bg-wf-frame {
  background-image: url(../assets/img/frame.png);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 250px;
}
.bg-wf-case {
  background-image: url(../assets/img/case.png);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 250px;
}
.bg-wf-project {
  background-image: url(../assets/img/project.png);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 250px;
}
</style>