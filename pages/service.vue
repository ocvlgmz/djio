<template>
  <v-container fluid>
    <!-- BREAKPOINT: lg -->
    <v-card flat tile class="ma-6" v-show="breakpoint.lg">
      <!-- SECTION: Strategy-->
      <v-card flat tile class="mt-2 mb-8 pa-0">
      <!-- header: strategy-->
        <v-row justify="center" align="center" class="">
          <v-col cols="4" order="first" class="mx-2 anim fade-in-left hidden">
            <v-card-title class="overline text-h3 text-orange-dark">
              <span class="font-bot">Let's craft your digital strategy</span>
            </v-card-title>
          </v-col>
          <v-col cols="4" class="mx-2 d-flex justify-center anim fade-in-right hidden">
              <v-avatar size="254">
                <v-img :src="require('../assets/img/thinking.png')"/>
              </v-avatar>
          </v-col>
        </v-row>
        <!-- top-notch professional services -->
        <v-row justify="center" align="center" class="">
          <v-col cols="8" class="anim fade-in-left hidden">
            <v-card-text class="text-h5 text-grey-dark font-weight-light">
              <p>
                The digitalization of our economy is accelerating and disrupting almost everything we can think of: from how we operate to what we consume and everything in between.
              </p>
              <p>
                Failing to recognize the necessity to adjust to the current digital reality will soon put your organisation at risk. The wait and see period is over!
              </p>
              <p>
                Regardless of the industry, every organisation should focus on the following <span class="text-orange-dark">3 keys</span> aspects in order to stay relevant and competitive: <span class="text-orange-dark">data</span>, <span class="text-orange-dark">technology</span> and <span class="text-orange-dark">customer experience</span>.
              </p>
              <p>
                We can help your organisation embark on this inevitable <strong>digital tranformation</strong> journey by providing the following <strong>top-notch professional services</strong>:
              </p>
              <v-list tile  color="blue-grey darken-4" class="my-10 pa-10">
                <v-list-item>
                  <v-list-item-icon class="align-self-center">
                    <v-icon large left color="blue-grey lighten-3">mdi-console</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content class="blue-grey--text text--lighten-3">
                    <v-list-item-title class="pa-2 text-h5 text-capitalize font-italic">Technical expertise</v-list-item-title> 
                    <p class="pa-2">
                      To help you understand, choose and implement the relevant technology that best fit for purpose.
                    </p>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-icon class="align-self-center">
                    <v-icon large left color="deep-orange lighten-1">mdi-strategy</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content class="text-orange-light">
                    <v-list-item-title class="pa-2 text-h5 text-capitalize font-italic">Analytical capabilities</v-list-item-title>
                    <p class="pa-2">
                      To assess, capture and translate business needs into functional & technical requirements to generate a desirable outcome in line with your specific goals.
                    </p>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-col>
        </v-row>
      </v-card>

              <v-divider class="mb-16"></v-divider>

      <!-- SECTION: Improve Value -->
      <v-card flat tile class="mt-2 mb-8 pa-0">
        <!-- header: the value-->
        <v-row justify="center" align="center">
          <v-col cols="4" order="last" class="mx-2 anim fade-in-right hidden">
            <v-card-title class="overline text-h3 text-orange-dark">
              <span class="font-bot">improve your value proposition</span>
              <!-- alt wording: enhance, supercharge, boost,  -->
            </v-card-title>
          </v-col>
          <v-col cols="4" class="mx-2 d-flex justify-center anim fade-in-left hidden">
              <v-avatar size="254">
                <v-img :src="require('../assets/img/value.png')"/>
              </v-avatar>
          </v-col>
        </v-row>
        <v-row justify="center" align="center">
          <v-col cols="8" class="anim fade-in-left hidden">
            <v-card-text class="text-h5 text-grey-dark font-weight-light">
              <p>
                The digital transformation service we are offering consists in guiding your organisation through the process of <span class="text-orange-dark">adopting current technology trends</span> to stay competitive, <span class="text-orange-dark">offering an up-to-date professional environment</span> to attract valuable resources and partners, and <span class="text-orange-dark">improving your core value</span>, all of which in turn will greatly <span class="text-orange-dark">help your organisation seize new business opportunities</span> which otherwise wouldn't be available.
              </p>
              <p>
                Results won't be happen overnight let alone without challenges, such as technology adoption & learning curve, resistance to change from within the organisation, developing a meaningful strategic vision or confidently making the transition from trusted legacy system to cloud solutions, only to mention a few.
              </p> 
              <p>
                That's why this process <span class="text-orange-dark">requires a holistic approach</span> involving, along with technology, other dimensions such as value proposition, customer interaction, business goals, human resources and most likely a bunch of other considerations.
              </p>
            </v-card-text>
          </v-col>
        </v-row>
         <!-- extra text to work out -->
              <div v-if="never">
                      <p>We offer an warm up approach when guiding a client throught the process of digital transformation. Could take couple of sessions as following:
                        1. Conversational survey to define the context
                        2. Discovery workshop to identify internal culture, business reality & priority
                        3. Nex steps suggestions to startup the process of digitalization.
                        4. Following up with the 4 step action plan.
                      </p>
                      <p >We believe that our 20+ years of professional experience working in the complexity of private corporations and government institutions, is a decent and meaningful background that will benefit you. We commit on 2 things: we deliver what we promise, we work with your interest in mind. 
                        Let us guide you through the process of your business digital transformation successfully.</p>
              </div>
      </v-card>

              <v-divider class="mb-16"></v-divider>

      <!-- SECTION: Action Plan -->
      <v-card flat tile class="mt-2 mb-8 pa-0">
        <v-row justify="center" align="center">
          <v-col cols="4" order="first" class="d-flex justify-center anim fade-in-left hidden">
            <v-card-title class="overline text-h3 text-orange-dark">
              <span class="font-bot">Our 4 step action plan</span>
            </v-card-title>
          </v-col>
          <v-col cols="4" class="mx-2 d-flex justify-center anim fade-in-right hidden">
              <v-avatar size="254">
                <v-img :src="require('../assets/img/chess.png')"/>
              </v-avatar>
          </v-col>
        </v-row>
        <v-row justify="center" align="center">
          <v-col cols="8" class="mx-2 anim fade-in-right hidden">
            <!-- Tab element -->
            <v-card flat tile color="" class="my-2 px-8 py-4">
              <v-tabs centered fixed-tabs background-color="" color="deep-orange">
                <v-tab >Step 1</v-tab>
                <v-tab >Step 2</v-tab>
                <v-tab >Step 3</v-tab>
                <v-tab >Step 4</v-tab>
                <!-- no need of observer for the tabs items >> removing class 'hidden' -->
                <!-- STEP1 -->
                <v-tab-item class="py-4"> 
                  <v-row>
                    <v-col order="first">
                      <v-card-title class="overline text-h5 text-blue-light">
                        Assess the situation
                      </v-card-title>
                      <v-card-text class="text-h5 text-grey-dark">
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
                            <v-list-item-content class="text-blue-dark">
                              Identify a broad list of things that would be subject to
                              digitalization
                            </v-list-item-content>
                          </v-list-item>
                          <v-list-item>
                            <v-list-item-icon class="align-self-center">
                              <v-icon left>mdi-map</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content class="text-blue-dark">
                              Build a digital roadmap taking into consideration your
                              company's circumstances, priorities, targets and goals.
                            </v-list-item-content>
                          </v-list-item>
                        </v-list>
                      </v-card-text>
                    </v-col>
                    <v-col cols="4" class="d-flex align-center justify-center">
                      <v-avatar size="254">
                        <v-img class="grayscale-plus" :src="require('../assets/img/assess.png')"/>
                      </v-avatar>
                    </v-col>
                  </v-row>
                </v-tab-item>

                <!-- STEP2 -->
                <v-tab-item class="py-4"> 
                  <v-row>
                    <v-col order="first">
                      <v-card-title class="overline text-h5 text-blue-light">
                        Frame the opportunity
                      </v-card-title>
                      <v-card-text class="text-h5 text-grey-dark">
                        <p>
                          Based on the findings of the previous step, we'll need to decide where to place the focus by defining a very specific aspect of the business that will improve or add more value to it. We'll work on the following:
                        </p>
                        <v-list>
                          <v-list-item>
                            <v-list-item-icon class="align-self-center">
                              <v-icon left>mdi-magnify-scan</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content class="text-blue-dark">
                              Identify the most important challenges to address (opportunity/threat assessment)
                            </v-list-item-content>
                          </v-list-item>
                          <v-list-item>
                            <v-list-item-icon class="align-self-center">
                              <v-icon left>mdi-star</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content class="text-blue-dark">
                              Select the best opportunity to go for (risk/reward of assessment)
                            </v-list-item-content>
                          </v-list-item>
                        </v-list>
                      </v-card-text>
                    </v-col>
                    <v-col cols="4" class="d-flex align-center justify-center">
                      <v-avatar size="254">
                        <v-img class="grayscale" :src="require('../assets/img/frame.png')"/>
                      </v-avatar>
                    </v-col>
                  </v-row>
                </v-tab-item>
                
                <!-- STEP3 -->
                <v-tab-item class="py-4"> 
                  <v-row>
                    <v-col order="first">
                      <v-card-title class="overline text-h5 text-blue-light">
                        Build the case
                      </v-card-title>
                      <v-card-text class="text-h5 text-grey-dark">
                        <p>
                          Once the current focus identified and selected, we'll translate it into a business proposition and examine how to implement it. We will work on the following:
                        </p>
                        <v-list>
                          <v-list-item>
                            <v-list-item-icon class="align-self-center">
                              <v-icon left>mdi-bullseye</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content class="text-blue-dark">
                              Define the use case (scenario, scope and goal)
                            </v-list-item-content>
                          </v-list-item>
                          <v-list-item>
                            <v-list-item-icon class="align-self-center">
                              <v-icon left>mdi-shimmer</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content class="text-blue-dark">
                              Specify the benefits and the outcome
                            </v-list-item-content>
                          </v-list-item>
                          <v-list-item>
                            <v-list-item-icon class="align-self-center">
                              <v-icon left>mdi-puzzle</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content class="text-blue-dark">
                              Identify the moving parts (resources, technology, processes)
                            </v-list-item-content>
                          </v-list-item>
                        </v-list>
                      </v-card-text>
                    </v-col>
                    <v-col cols="4" class="d-flex align-center justify-center">
                      <v-avatar size="254">
                        <v-img class="grayscale" :src="require('../assets/img/case.png')"/>
                      </v-avatar>
                    </v-col>
                  </v-row>
                    

                </v-tab-item>

                <!-- STEP4 -->
                <v-tab-item class="py-4"> 
                  <v-row>
                    <v-col order="first">
                      <v-card-title class="overline text-h5 text-blue-light">
                        Implement the solution
                      </v-card-title>
                      <v-card-text class="text-h5 text-grey-dark">
                        <p>
                          Once the business case is validated, we're ready to launch the project. I will take care of the following:
                        </p>
                        <v-list>
                          <v-list-item>
                            <v-list-item-icon class="align-self-center">
                              <v-icon left>mdi-chart-gantt</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content class="text-blue-dark">
                              Define the planning (activities, processes, resources)
                            </v-list-item-content>
                          </v-list-item>
                          <v-list-item>
                            <v-list-item-icon class="align-self-center">
                              <v-icon left>mdi-tune-variant</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content class="text-blue-dark">
                              Specify the metrics (cost, kpi, timeline)
                            </v-list-item-content>
                          </v-list-item>
                          <v-list-item>
                            <v-list-item-icon class="align-self-center">
                              <v-icon left>mdi-ship-wheel</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content class="text-blue-dark">
                              Manage the exectution of the project from start to finish.
                            </v-list-item-content>
                          </v-list-item>
                        </v-list>
                      </v-card-text>
                    </v-col>
                    <v-col cols="4" class="d-flex align-center justify-center">
                      <v-avatar size="254">
                        <v-img class="grayscale" :src="require('../assets/img/project.png')"/>
                      </v-avatar>
                    </v-col>
                  </v-row>
                    

                </v-tab-item>
              </v-tabs>
            </v-card>
          </v-col>
        </v-row>
      </v-card>

              <v-divider class="mb-16"></v-divider>

      <!-- SECTION: References -->
      <v-card flat tile class="mt-2 mb-8 pa-0">
        <v-row justify="center" align="center" class="d-flex flex-column">
          <v-col cols="8" order="first" class="anim fade-in-left hidden">
            <v-card-title class="overline text-h3 text-orange-dark">
              <span class="font-bot">Organisations who trusted us</span>
            </v-card-title>
          </v-col>
          <v-col cols="10" class="mx-2">
            <v-card-text class="anim fade-in-up hidden">
              <v-row class=" my-6">
                <v-col v-for="itm in refs" :key="itm.id" class="mx-6 d-flex align-center ">
                  <v-avatar tile size="128">
                  <v-img
                    :src="itm.pic"
                    :lazy-src="itm.pic"
                    :max-height="itm.maxH"
                    :max-width="itm.maxW"
                    class="grayscale-plus"
                  >
                  </v-img>
                  </v-avatar>
                </v-col>
              </v-row>
            </v-card-text>
          </v-col>
        </v-row>
      </v-card>

    </v-card>
    
    <!-- BREAKPOINT: md -->
    <v-card flat tile class="ma-6" v-show="breakpoint.md">
      <!-- SECTION: Strategy-->
      <v-card flat tile class="mt-2 mb-8 pa-0">
      <!-- header: strategy-->
        <v-row justify="center" align="center" class="">
          <v-col cols="4" order="first" class="mx-2 anim fade-in-left hidden">
            <v-card-title class="overline text-h3 text-orange-dark">
              <span class="font-bot">Let's craft your digital strategy</span>
            </v-card-title>
          </v-col>
          <v-col cols="4" class="mx-2 d-flex justify-center anim fade-in-right hidden">
              <v-avatar size="254">
                <v-img :src="require('../assets/img/thinking.png')"/>
              </v-avatar>
          </v-col>
        </v-row>
        <!-- top-notch professional services -->
        <v-row justify="center" align="center" class="">
          <v-col cols="8" class="anim fade-in-left hidden">
            <v-card-text class="text-h5 text-grey-dark font-weight-light">
              <p>
                The digitalization of our economy is accelerating and disrupting almost everything we can think of: from how we operate to what we consume and everything in between.
              </p>
              <p>
                Failing to recognize the necessity to adjust to the current digital reality will soon put your organisation at risk. The wait and see period is over!
              </p>
              <p>
                Regardless of the industry, every organisation should focus on the following <span class="text-orange-dark">3 keys</span> aspects in order to stay relevant and competitive: <span class="text-orange-dark">data</span>, <span class="text-orange-dark">technology</span> and <span class="text-orange-dark">customer experience</span>.
              </p>
              <p>
                We can help your organisation embark on this inevitable <strong>digital tranformation</strong> journey by providing the following <strong>top-notch professional services</strong>:
              </p>
              <v-list tile  color="blue-grey darken-4" class="my-10 pa-10">
                <v-list-item>
                  <v-list-item-icon class="align-self-center">
                    <v-icon large left color="blue-grey lighten-3">mdi-console</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content class="blue-grey--text text--lighten-3">
                    <v-list-item-title class="pa-2 text-h5 text-capitalize font-italic">Technical expertise</v-list-item-title>
                    <p class="pa-2">
                      To help you understand, choose and implement the relevant technology that best fit for purpose.
                    </p>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-icon class="align-self-center">
                    <v-icon large left color="deep-orange lighten-1">mdi-strategy</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content class="text-orange-light">
                    <v-list-item-title class="pa-2 text-h5 text-capitalize font-italic">Analytical capabilities</v-list-item-title>
                    <p class="pa-2">
                      To assess, capture and translate business needs into functional & technical requirements to generate a desirable outcome in line with your specific goals.
                    </p>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-col>
        </v-row>
      </v-card>

              <v-divider class="mb-16"></v-divider>

      <!-- SECTION: Improve Value -->
      <v-card flat tile class="mt-2 mb-8 pa-0">
        <!-- header: the value-->
        <v-row justify="center" align="center">
          <v-col cols="4" order="last" class="mx-2 anim fade-in-right hidden">
            <v-card-title class="overline text-h3 text-orange-dark">
              <span class="font-bot">improve your value proposition</span>
              <!-- alt wording: enhance, supercharge, boost,  -->
            </v-card-title>
          </v-col>
          <v-col cols="4" class="mx-2 d-flex justify-center anim fade-in-left hidden">
              <v-avatar size="254">
                <v-img :src="require('../assets/img/value.png')"/>
              </v-avatar>
          </v-col>
        </v-row>
        <v-row justify="center" align="center">
          <v-col cols="8" class="anim fade-in-left hidden">
            <v-card-text class="text-h5 text-grey-dark font-weight-light">
              <p>
                The digital transformation service we are offering consists in guiding your organisation through the process of <span class="text-orange-dark">adopting current technology trends</span> to stay competitive, <span class="text-orange-dark">offering an up-to-date professional environment</span> to attract valuable resources and partners, and <span class="text-orange-dark">improving your core value</span>, all of which in turn will greatly <span class="text-orange-dark">help your organisation seize new business opportunities</span> which otherwise wouldn't be available.
              </p>
              <p>
                Results won't be happen overnight let alone without challenges, such as technology adoption & learning curve, resistance to change from within the organisation, developing a meaningful strategic vision or confidently making the transition from trusted legacy system to cloud solutions, only to mention a few.
              </p> 
              <p>
                That's why this process <span class="text-orange-dark">requires a holistic approach</span> involving, along with technology, other dimensions such as value proposition, customer interaction, business goals, human resources and most likely a bunch of other considerations.
              </p>
            </v-card-text>
          </v-col>
        </v-row>
         <!-- extra text to work out -->
              <div v-if="never">
                      <p>We offer an warm up approach when guiding a client throught the process of digital transformation. Could take couple of sessions as following:
                        1. Conversational survey to define the context
                        2. Discovery workshop to identify internal culture, business reality & priority
                        3. Nex steps suggestions to startup the process of digitalization.
                        4. Following up with the 4 step action plan.
                      </p>
                      <p >We believe that our 20+ years of professional experience working in the complexity of private corporations and government institutions, is a decent and meaningful background that will benefit you. We commit on 2 things: we deliver what we promise, we work with your interest in mind. 
                        Let us guide you through the process of your business digital transformation successfully.</p>
              </div>
      </v-card>

              <v-divider class="mb-16"></v-divider>

      <!-- SECTION: Action Plan -->
      <v-card flat tile class="mt-2 mb-8 pa-0">
        <v-row justify="center" align="center">
          <v-col cols="4" order="first" class="d-flex justify-center anim fade-in-left hidden">
            <v-card-title class="overline text-h3 text-orange-dark">
              <span class="font-bot">Our 4 step action plan</span>
            </v-card-title>
          </v-col>
          <v-col cols="4" class="mx-2 d-flex justify-center anim fade-in-right hidden">
              <v-avatar size="254">
                <v-img :src="require('../assets/img/chess.png')"/>
              </v-avatar>
          </v-col>
        </v-row>
        <v-row justify="center" align="center">
          <v-col cols="8" class="mx-2 anim fade-in-right hidden">
            <!-- Tab element -->
            <v-card flat tile color="" class="my-2 px-8 py-4">
              <v-tabs centered fixed-tabs background-color="" color="deep-orange">
                <v-tab >Step 1</v-tab>
                <v-tab >Step 2</v-tab>
                <v-tab >Step 3</v-tab>
                <v-tab >Step 4</v-tab>
                <!-- no need of observer for the tabs items >> removing class 'hidden' -->
                <!-- STEP1 -->
                <v-tab-item class="py-4"> 
                  <v-row>
                    <v-col order="first">
                      <v-card-title class="overline text-h5 text-blue-light">
                        Assess the situation
                      </v-card-title>
                      <v-card-text class="text-h5 text-grey-dark">
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
                            <v-list-item-content class="text-blue-dark">
                              Identify a broad list of things that would be subject to
                              digitalization
                            </v-list-item-content>
                          </v-list-item>
                          <v-list-item>
                            <v-list-item-icon class="align-self-center">
                              <v-icon left>mdi-map</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content class="text-blue-dark">
                              Build a digital roadmap taking into consideration your
                              company's circumstances, priorities, targets and goals.
                            </v-list-item-content>
                          </v-list-item>
                        </v-list>
                      </v-card-text>
                    </v-col>
                    <v-col cols="4" class="d-flex align-center justify-center" v-if="breakpoint.lg">
                      <v-avatar size="254">
                        <v-img class="grayscale-plus" :src="require('../assets/img/assess.png')"/>
                      </v-avatar>
                    </v-col>
                  </v-row>
                </v-tab-item>

                <!-- STEP2 -->
                <v-tab-item class="py-4"> 
                  <v-row>
                    <v-col order="first">
                      <v-card-title class="overline text-h5 text-blue-light">
                        Frame the opportunity
                      </v-card-title>
                      <v-card-text class="text-h5 text-grey-dark">
                        <p>
                          Based on the findings of the previous step, we'll need to decide where to place the focus by defining a very specific aspect of the business that will improve or add more value to it. We'll work on the following:
                        </p>
                        <v-list>
                          <v-list-item>
                            <v-list-item-icon class="align-self-center">
                              <v-icon left>mdi-magnify-scan</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content class="text-blue-dark">
                              Identify the most important challenges to address (opportunity/threat assessment)
                            </v-list-item-content>
                          </v-list-item>
                          <v-list-item>
                            <v-list-item-icon class="align-self-center">
                              <v-icon left>mdi-star</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content class="text-blue-dark">
                              Select the best opportunity to go for (risk/reward of assessment)
                            </v-list-item-content>
                          </v-list-item>
                        </v-list>
                      </v-card-text>
                    </v-col>
                    <v-col cols="4" class="d-flex align-center justify-center" v-if="breakpoint.lg">
                      <v-avatar size="254">
                        <v-img class="grayscale" :src="require('../assets/img/frame.png')"/>
                      </v-avatar>
                    </v-col>
                  </v-row>
                </v-tab-item>
                
                <!-- STEP3 -->
                <v-tab-item class="py-4"> 
                  <v-row>
                    <v-col order="first">
                      <v-card-title class="overline text-h5 text-blue-light">
                        Build the case
                      </v-card-title>
                      <v-card-text class="text-h5 text-grey-dark">
                        <p>
                          Once the current focus identified and selected, we'll translate it into a business proposition and examine how to implement it. We will work on the following:
                        </p>
                        <v-list>
                          <v-list-item>
                            <v-list-item-icon class="align-self-center">
                              <v-icon left>mdi-bullseye</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content class="text-blue-dark">
                              Define the use case (scenario, scope and goal)
                            </v-list-item-content>
                          </v-list-item>
                          <v-list-item>
                            <v-list-item-icon class="align-self-center">
                              <v-icon left>mdi-shimmer</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content class="text-blue-dark">
                              Specify the benefits and the outcome
                            </v-list-item-content>
                          </v-list-item>
                          <v-list-item>
                            <v-list-item-icon class="align-self-center">
                              <v-icon left>mdi-puzzle</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content class="text-blue-dark">
                              Identify the moving parts (resources, technology, processes)
                            </v-list-item-content>
                          </v-list-item>
                        </v-list>
                      </v-card-text>
                    </v-col>
                    <v-col cols="4" class="d-flex align-center justify-center" v-if="breakpoint.lg">
                      <v-avatar size="254">
                        <v-img class="grayscale" :src="require('../assets/img/case.png')"/>
                      </v-avatar>
                    </v-col>
                  </v-row>
                    

                </v-tab-item>

                <!-- STEP4 -->
                <v-tab-item class="py-4"> 
                  <v-row>
                    <v-col order="first">
                      <v-card-title class="overline text-h5 text-blue-light">
                        Implement the solution
                      </v-card-title>
                      <v-card-text class="text-h5 text-grey-dark">
                        <p>
                          Once the business case is validated, we're ready to launch the project. I will take care of the following:
                        </p>
                        <v-list>
                          <v-list-item>
                            <v-list-item-icon class="align-self-center">
                              <v-icon left>mdi-chart-gantt</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content class="text-blue-dark">
                              Define the planning (activities, processes, resources)
                            </v-list-item-content>
                          </v-list-item>
                          <v-list-item>
                            <v-list-item-icon class="align-self-center">
                              <v-icon left>mdi-tune-variant</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content class="text-blue-dark">
                              Specify the metrics (cost, kpi, timeline)
                            </v-list-item-content>
                          </v-list-item>
                          <v-list-item>
                            <v-list-item-icon class="align-self-center">
                              <v-icon left>mdi-ship-wheel</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content class="text-blue-dark">
                              Manage the exectution of the project from start to finish.
                            </v-list-item-content>
                          </v-list-item>
                        </v-list>
                      </v-card-text>
                    </v-col>
                    <v-col cols="4" class="d-flex align-center justify-center" v-if="breakpoint.lg">
                      <v-avatar size="254">
                        <v-img class="grayscale" :src="require('../assets/img/project.png')"/>
                      </v-avatar>
                    </v-col>
                  </v-row>
                    

                </v-tab-item>
              </v-tabs>
            </v-card>
          </v-col>
        </v-row>
      </v-card>

              <v-divider class="mb-16"></v-divider>

      <!-- SECTION: References -->
      <v-card flat tile class="mt-2 mb-8 pa-0">
        <v-row justify="center" align="center" class="d-flex flex-column">
          <v-col cols="6" order="first" class="anim fade-in-left hidden ">
            <v-card-title class="overline text-h3 text-orange-dark">
              <span class="font-bot">Organisations who trusted us</span>
            </v-card-title>
          </v-col>
          <v-col cols="10" class="mx-2 ">
            <v-card-text class="anim fade-in-up hidden">
              <v-row class=" my-6">
                <v-col v-for="itm in refs" :key="itm.id" class="mx-6 d-flex align-center justify-center ">
                  <v-avatar tile size="128">
                  <v-img
                    :src="itm.pic"
                    :lazy-src="itm.pic"
                    :max-height="itm.maxH"
                    :max-width="itm.maxW"
                    class="grayscale-plus"
                  >
                  </v-img>
                  </v-avatar>
                </v-col>
              </v-row>
            </v-card-text>
          </v-col>
        </v-row>
      </v-card>

    </v-card>
    <!-- BREAKPOINT: sm -->
    <v-card flat tile class="ma-0" v-show="breakpoint.sm">
      <!-- SECTION: Strategy-->
      <v-card flat tile class="mt-1 mb-1 pa-0">
      <!-- header: strategy-->
        <v-row justify="center" align="center" class="">
          <v-col cols="10" order="first" class="mx-0 anim fade-in-left hidden">
            <v-card-title class="overline text-h3 text-orange-dark">
              <span class="font-bot">Let's craft your digital strategy</span>
            </v-card-title>
          </v-col>
          <!-- <v-col cols="4" class=" d-flex justify-center anim fade-in-right hidden">
              <v-avatar size="254">
                <v-img :src="require('../assets/img/thinking.png')"/>
              </v-avatar>
          </v-col> -->
        </v-row>
        <!-- top-notch professional services -->
        <v-row justify="center" align="center" class="">
          <v-col cols="12" class="anim fade-in-left hidden">
            <v-card-text class="text-h6 text-grey-dark font-weight-light">
              <p>
                The digitalization of our economy is accelerating and disrupting almost everything we can think of: from how we operate to what we consume and everything in between.
              </p>
              <p>
                Failing to recognize the necessity to adjust to the current digital reality will soon put your organisation at risk. The wait and see period is over!
              </p>
              <p>
                Regardless of the industry, every organisation should focus on the following <span class="text-orange-dark">3 keys</span> aspects in order to stay relevant and competitive: <span class="text-orange-dark">data</span>, <span class="text-orange-dark">technology</span> and <span class="text-orange-dark">customer experience</span>.
              </p>
              <p>
                We can help your organisation embark on this inevitable <strong>digital tranformation</strong> journey by providing the following <strong>top-notch professional services</strong>:
              </p>
              <v-list tile  color="blue-grey darken-4" class="my-5 pa-5">
                <v-list-item>
                  <v-list-item-icon class="align-self-center">
                    <v-icon left color="blue-grey lighten-3">mdi-console</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content class="blue-grey--text text--lighten-3">
                    <v-list-item-title class="pa-2 text-h6 text-capitalize font-italic">Technical expertise</v-list-item-title>
                    <p class="pa-2">
                      To help you understand, choose and implement the relevant technology that best fit for purpose.
                    </p>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-icon class="align-self-center">
                    <v-icon left color="deep-orange lighten-1">mdi-strategy</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content class="text-orange-light">
                    <v-list-item-title class="pa-2 text-h6 text-capitalize font-italic">Analytical capabilities</v-list-item-title>
                    <p class="pa-2">
                      To assess, capture and translate business needs into functional & technical requirements to generate a desirable outcome in line with your specific goals.
                    </p>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-col>
        </v-row>
      </v-card>

              <v-divider class="my-4"></v-divider>

      <!-- SECTION: Improve Value -->
      <v-card flat tile class="mt-1 mb-1 pa-0">
        <!-- header: the value-->
        <v-row justify="center" align="center">
          <v-col cols="8" order="last" class="mx-2 anim fade-in-right hidden">
            <v-card-title class="overline text-h3 text-orange-dark">
              <span class="font-bot">improve your value proposition</span>
              <!-- alt wording: enhance, supercharge, boost,  -->
            </v-card-title>
          </v-col>
          <!-- <v-col cols="4" class="mx-2 d-flex justify-center anim fade-in-left hidden">
              <v-avatar size="254">
                <v-img :src="require('../assets/img/value.png')"/>
              </v-avatar>
          </v-col> -->
        </v-row>
        <v-row justify="center" align="center">
          <v-col cols="12">
            <v-card-text class="text-h6 text-grey-dark font-weight-light">
              <p>
                The digital transformation service we are offering consists in guiding your organisation through the process of <span class="text-orange-dark">adopting current technology trends</span> to stay competitive, <span class="text-orange-dark">offering an up-to-date professional environment</span> to attract valuable resources and partners, and <span class="text-orange-dark">improving your core value</span>, all of which in turn will greatly <span class="text-orange-dark">help your organisation seize new business opportunities</span> which otherwise wouldn't be available.
              </p>
              <p>
                Results won't be happen overnight let alone without challenges, such as technology adoption & learning curve, resistance to change from within the organisation, developing a meaningful strategic vision or confidently making the transition from trusted legacy system to cloud solutions, only to mention a few.
              </p> 
              <p>
                That's why this process <span class="text-orange-dark">requires a holistic approach</span> involving, along with technology, other dimensions such as value proposition, customer interaction, business goals, human resources and most likely a bunch of other considerations.
              </p>
            </v-card-text>
          </v-col>
        </v-row>
         <!-- extra text to work out -->
              <div v-if="never">
                      <p>We offer an warm up approach when guiding a client throught the process of digital transformation. Could take couple of sessions as following:
                        1. Conversational survey to define the context
                        2. Discovery workshop to identify internal culture, business reality & priority
                        3. Nex steps suggestions to startup the process of digitalization.
                        4. Following up with the 4 step action plan.
                      </p>
                      <p >We believe that our 20+ years of professional experience working in the complexity of private corporations and government institutions, is a decent and meaningful background that will benefit you. We commit on 2 things: we deliver what we promise, we work with your interest in mind. 
                        Let us guide you through the process of your business digital transformation successfully.</p>
              </div>
      </v-card>

              <v-divider class="my-4"></v-divider>

      <!-- SECTION: Action Plan -->
      <v-card flat tile class="mt-1 mb-1 pa-0">
        <v-row justify="center" align="center">
          <v-col cols="8" order="first" class="d-flex justify-center anim fade-in-left hidden">
            <v-card-title class="overline text-h3 text-orange-dark">
              <span class="font-bot">Our 4 step action plan</span>
            </v-card-title>
          </v-col>
          <!-- <v-col cols="4" class="mx-2 d-flex justify-center anim fade-in-right hidden">
              <v-avatar size="254">
                <v-img :src="require('../assets/img/chess.png')"/>
              </v-avatar>
          </v-col> -->
        </v-row>
        <v-row justify="center" align="center">
          <v-col cols="12" class="mx-2 anim fade-in-right hidden">
            <!-- Tab element -->
            <v-card flat tile color="" class="my-0 px-4 py-4">
              <v-tabs centered fixed-tabs background-color="" color="deep-orange">
                <v-tab >Step 1</v-tab>
                <v-tab >Step 2</v-tab>
                <v-tab >Step 3</v-tab>
                <v-tab >Step 4</v-tab>
                <!-- no need of observer for the tabs items >> removing class 'hidden' -->
                <!-- STEP1 -->
                <v-tab-item class="pt-2"> 
                  <v-row>
                    <v-col order="first">
                      <v-card-title class="overline text-h5 text-blue-light">
                        Assess the situation
                      </v-card-title>
                      <v-card-text class="text-h6 text-grey-dark">
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
                            <v-list-item-content class="text-blue-dark">
                              Identify a broad list of things that would be subject to
                              digitalization
                            </v-list-item-content>
                          </v-list-item>
                          <v-list-item>
                            <v-list-item-icon class="align-self-center">
                              <v-icon left>mdi-map</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content class="text-blue-dark">
                              Build a digital roadmap taking into consideration your
                              company's circumstances, priorities, targets and goals.
                            </v-list-item-content>
                          </v-list-item>
                        </v-list>
                      </v-card-text>
                    </v-col>
                    <v-col cols="4" class="d-flex align-center justify-center" v-if="breakpoint.lg">
                      <v-avatar size="254">
                        <v-img class="grayscale-plus" :src="require('../assets/img/assess.png')"/>
                      </v-avatar>
                    </v-col>
                  </v-row>
                </v-tab-item>

                <!-- STEP2 -->
                <v-tab-item class="pt-2"> 
                  <v-row>
                    <v-col order="first">
                      <v-card-title class="overline text-h5 text-blue-light">
                        Frame the opportunity
                      </v-card-title>
                      <v-card-text class="text-h6 text-grey-dark">
                        <p>
                          Based on the findings of the previous step, we'll need to decide where to place the focus by defining a very specific aspect of the business that will improve or add more value to it. We'll work on the following:
                        </p>
                        <v-list>
                          <v-list-item>
                            <v-list-item-icon class="align-self-center">
                              <v-icon left>mdi-magnify-scan</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content class="text-blue-dark">
                              Identify the most important challenges to address (opportunity/threat assessment)
                            </v-list-item-content>
                          </v-list-item>
                          <v-list-item>
                            <v-list-item-icon class="align-self-center">
                              <v-icon left>mdi-star</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content class="text-blue-dark">
                              Select the best opportunity to go for (risk/reward of assessment)
                            </v-list-item-content>
                          </v-list-item>
                        </v-list>
                      </v-card-text>
                    </v-col>
                    <v-col cols="4" class="d-flex align-center justify-center" v-if="breakpoint.lg">
                      <v-avatar size="254">
                        <v-img class="grayscale" :src="require('../assets/img/frame.png')"/>
                      </v-avatar>
                    </v-col>
                  </v-row>
                </v-tab-item>
                
                <!-- STEP3 -->
                <v-tab-item class="pt-2"> 
                  <v-row>
                    <v-col order="first">
                      <v-card-title class="overline text-h5 text-blue-light">
                        Build the case
                      </v-card-title>
                      <v-card-text class="text-h6 text-grey-dark">
                        <p>
                          Once the current focus identified and selected, we'll translate it into a business proposition and examine how to implement it. We will work on the following:
                        </p>
                        <v-list>
                          <v-list-item>
                            <v-list-item-icon class="align-self-center">
                              <v-icon left>mdi-bullseye</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content class="text-blue-dark">
                              Define the use case (scenario, scope and goal)
                            </v-list-item-content>
                          </v-list-item>
                          <v-list-item>
                            <v-list-item-icon class="align-self-center">
                              <v-icon left>mdi-shimmer</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content class="text-blue-dark">
                              Specify the benefits and the outcome
                            </v-list-item-content>
                          </v-list-item>
                          <v-list-item>
                            <v-list-item-icon class="align-self-center">
                              <v-icon left>mdi-puzzle</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content class="text-blue-dark">
                              Identify the moving parts (resources, technology, processes)
                            </v-list-item-content>
                          </v-list-item>
                        </v-list>
                      </v-card-text>
                    </v-col>
                    <v-col cols="4" class="d-flex align-center justify-center" v-if="breakpoint.lg">
                      <v-avatar size="254">
                        <v-img class="grayscale" :src="require('../assets/img/case.png')"/>
                      </v-avatar>
                    </v-col>
                  </v-row>
                    

                </v-tab-item>

                <!-- STEP4 -->
                <v-tab-item class="pt-2"> 
                  <v-row>
                    <v-col order="first">
                      <v-card-title class="overline text-h5 text-blue-light">
                        Implement the solution
                      </v-card-title>
                      <v-card-text class="text-h6 text-grey-dark">
                        <p>
                          Once the business case is validated, we're ready to launch the project. I will take care of the following:
                        </p>
                        <v-list>
                          <v-list-item>
                            <v-list-item-icon class="align-self-center">
                              <v-icon left>mdi-chart-gantt</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content class="text-blue-dark">
                              Define the planning (activities, processes, resources)
                            </v-list-item-content>
                          </v-list-item>
                          <v-list-item>
                            <v-list-item-icon class="align-self-center">
                              <v-icon left>mdi-tune-variant</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content class="text-blue-dark">
                              Specify the metrics (cost, kpi, timeline)
                            </v-list-item-content>
                          </v-list-item>
                          <v-list-item>
                            <v-list-item-icon class="align-self-center">
                              <v-icon left>mdi-ship-wheel</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content class="text-blue-dark">
                              Manage the exectution of the project from start to finish.
                            </v-list-item-content>
                          </v-list-item>
                        </v-list>
                      </v-card-text>
                    </v-col>
                    <v-col cols="4" class="d-flex align-center justify-center" v-if="breakpoint.lg">
                      <v-avatar size="254">
                        <v-img class="grayscale" :src="require('../assets/img/project.png')"/>
                      </v-avatar>
                    </v-col>
                  </v-row>
                </v-tab-item>
              </v-tabs>
            </v-card>
          </v-col>
        </v-row>
      </v-card>

              <v-divider class="my-4"></v-divider>

      <!-- SECTION: References -->
      <v-card flat tile class="mt-1 mb-1 pa-0">
        <v-row justify="center" align="center" class="my-4 d-flex flex-column">
          <v-col cols="8" order="first" class="anim fade-in-left hidden ">
            <v-card-title class="overline text-h3 text-orange-dark">
              <span class="font-bot">Organisations who trusted us</span>
            </v-card-title>
          </v-col>
          <v-col cols="12" class="">
            <v-card-text class="anim fade-in-up hidden">
              <v-row>
                <v-col v-for="itm in refs" :key="itm.id" class="mx-0 d-flex align-center justify-center ">
                  <v-avatar tile size="128">
                  <v-img
                    :src="itm.pic"
                    :lazy-src="itm.pic"
                    :max-height="itm.maxH"
                    :max-width="itm.maxW"
                    class="grayscale-plus"
                  >
                  </v-img>
                  </v-avatar>
                </v-col>
              </v-row>
            </v-card-text>
          </v-col>
        </v-row>
      </v-card>

    </v-card>
    <!-- BREAKPOINT: xm (same as sm) -->
    <v-card flat tile class="ma-0" v-show="breakpoint.xs">
      <!-- SECTION: Strategy-->
      <v-card flat tile class="mt-1 mb-1 pa-0">
      <!-- header: strategy-->
        <v-row justify="center" align="center" class="">
          <v-col cols="10" order="first" class="mx-0 anim fade-in-left hidden">
            <v-card-title class="overline text-h3 text-orange-dark">
              <span class="font-bot">Let's craft your digital strategy</span>
            </v-card-title>
          </v-col>
          <!-- <v-col cols="4" class=" d-flex justify-center anim fade-in-right hidden">
              <v-avatar size="254">
                <v-img :src="require('../assets/img/thinking.png')"/>
              </v-avatar>
          </v-col> -->
        </v-row>
        <!-- top-notch professional services -->
        <v-row justify="center" align="center" class="">
          <v-col cols="12" class="anim fade-in-left hidden">
            <v-card-text class="text-h6 text-grey-dark font-weight-light">
              <p>
                The digitalization of our economy is accelerating and disrupting almost everything we can think of: from how we operate to what we consume and everything in between.
              </p>
              <p>
                Failing to recognize the necessity to adjust to the current digital reality will soon put your organisation at risk. The wait and see period is over!
              </p>
              <p>
                Regardless of the industry, every organisation should focus on the following <span class="text-orange-dark">3 keys</span> aspects in order to stay relevant and competitive: <span class="text-orange-dark">data</span>, <span class="text-orange-dark">technology</span> and <span class="text-orange-dark">customer experience</span>.
              </p>
              <p>
                We can help your organisation embark on this inevitable <strong>digital tranformation</strong> journey by providing the following <strong>top-notch professional services</strong>:
              </p>
              <v-list tile  color="blue-grey darken-4" class="my-5 pa-5">
                <v-list-item>
                  <v-list-item-icon class="align-self-center">
                    <v-icon left color="blue-grey lighten-3">mdi-console</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content class="blue-grey--text text--lighten-3">
                    <v-list-item-title class="pa-2 text-h5 text-capitalize font-italic">Technical expertise</v-list-item-title> 
                    <p class="pa-2">
                      To help you understand, choose and implement the relevant technology that best fit for purpose.
                    </p>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-icon class="align-self-center">
                    <v-icon left color="deep-orange lighten-1">mdi-strategy</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content class="text-orange-light">
                    <v-list-item-title class="pa-2 text-h5 text-capitalize font-italic">Analytical capabilities</v-list-item-title> 
                    <p class="pa-2">
                      To assess, capture and translate business needs into functional & technical requirements to generate a desirable outcome in line with your specific goals.
                    </p>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-col>
        </v-row>
      </v-card>

              <v-divider class="my-4"></v-divider>

      <!-- SECTION: Improve Value -->
      <v-card flat tile class="mt-1 mb-1 pa-0">
        <!-- header: the value-->
        <v-row justify="center" align="center">
          <v-col cols="8" order="last" class="mx-2 anim fade-in-right hidden">
            <v-card-title class="overline text-h3 text-orange-dark">
              <span class="font-bot">improve your value proposition</span>
              <!-- alt wording: enhance, supercharge, boost,  -->
            </v-card-title>
          </v-col>
          <!-- <v-col cols="4" class="mx-2 d-flex justify-center anim fade-in-left hidden">
              <v-avatar size="254">
                <v-img :src="require('../assets/img/value.png')"/>
              </v-avatar>
          </v-col> -->
        </v-row>
        <v-row justify="center" align="center">
          <v-col cols="12">
            <v-card-text class="text-h6 text-grey-dark font-weight-light">
              <p>
                The digital transformation service we are offering consists in guiding your organisation through the process of <span class="text-orange-dark">adopting current technology trends</span> to stay competitive, <span class="text-orange-dark">offering an up-to-date professional environment</span> to attract valuable resources and partners, and <span class="text-orange-dark">improving your core value</span>, all of which in turn will greatly <span class="text-orange-dark">help your organisation seize new business opportunities</span> which otherwise wouldn't be available.
              </p>
              <p>
                Results won't be happen overnight let alone without challenges, such as technology adoption & learning curve, resistance to change from within the organisation, developing a meaningful strategic vision or confidently making the transition from trusted legacy system to cloud solutions, only to mention a few.
              </p> 
              <p>
                That's why this process <span class="text-orange-dark">requires a holistic approach</span> involving, along with technology, other dimensions such as value proposition, customer interaction, business goals, human resources and most likely a bunch of other considerations.
              </p>
            </v-card-text>
          </v-col>
        </v-row>
         <!-- extra text to work out -->
              <div v-if="never">
                      <p>We offer an warm up approach when guiding a client throught the process of digital transformation. Could take couple of sessions as following:
                        1. Conversational survey to define the context
                        2. Discovery workshop to identify internal culture, business reality & priority
                        3. Nex steps suggestions to startup the process of digitalization.
                        4. Following up with the 4 step action plan.
                      </p>
                      <p >We believe that our 20+ years of professional experience working in the complexity of private corporations and government institutions, is a decent and meaningful background that will benefit you. We commit on 2 things: we deliver what we promise, we work with your interest in mind. 
                        Let us guide you through the process of your business digital transformation successfully.</p>
              </div>
      </v-card>

              <v-divider class="my-4"></v-divider>

      <!-- SECTION: Action Plan -->
      <v-card flat tile class="mt-1 mb-1 pa-0">
        <v-row justify="center" align="center">
          <v-col cols="8" order="first" class="d-flex justify-center anim fade-in-left hidden">
            <v-card-title class="overline text-h3 text-orange-dark">
              <span class="font-bot">Our 4 step action plan</span>
            </v-card-title>
          </v-col>
          <!-- <v-col cols="4" class="mx-2 d-flex justify-center anim fade-in-right hidden">
              <v-avatar size="254">
                <v-img :src="require('../assets/img/chess.png')"/>
              </v-avatar>
          </v-col> -->
        </v-row>
        <v-row justify="center" align="center">
          <v-col cols="12" class="mx-2 anim fade-in-right hidden">
            <!-- Tab element -->
            <v-card flat tile color="" class="my-0 px-4 py-4">
              <v-tabs centered fixed-tabs background-color="" color="deep-orange">
                <v-tab >Step 1</v-tab>
                <v-tab >Step 2</v-tab>
                <v-tab >Step 3</v-tab>
                <v-tab >Step 4</v-tab>
                <!-- no need of observer for the tabs items >> removing class 'hidden' -->
                <!-- STEP1 -->
                <v-tab-item class="pt-2"> 
                  <v-row>
                    <v-col order="first">
                      <v-card-title class="overline text-h5 text-blue-light">
                        Assess the situation
                      </v-card-title>
                      <v-card-text class="text-h6 text-grey-dark">
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
                            <v-list-item-content class="text-blue-dark">
                              Identify a broad list of things that would be subject to
                              digitalization
                            </v-list-item-content>
                          </v-list-item>
                          <v-list-item>
                            <v-list-item-icon class="align-self-center">
                              <v-icon left>mdi-map</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content class="text-blue-dark">
                              Build a digital roadmap taking into consideration your
                              company's circumstances, priorities, targets and goals.
                            </v-list-item-content>
                          </v-list-item>
                        </v-list>
                      </v-card-text>
                    </v-col>
                    <v-col cols="4" class="d-flex align-center justify-center" v-if="breakpoint.lg">
                      <v-avatar size="254">
                        <v-img class="grayscale-plus" :src="require('../assets/img/assess.png')"/>
                      </v-avatar>
                    </v-col>
                  </v-row>
                </v-tab-item>

                <!-- STEP2 -->
                <v-tab-item class="pt-2"> 
                  <v-row>
                    <v-col order="first">
                      <v-card-title class="overline text-h5 text-blue-light">
                        Frame the opportunity
                      </v-card-title>
                      <v-card-text class="text-h6 text-grey-dark">
                        <p>
                          Based on the findings of the previous step, we'll need to decide where to place the focus by defining a very specific aspect of the business that will improve or add more value to it. We'll work on the following:
                        </p>
                        <v-list>
                          <v-list-item>
                            <v-list-item-icon class="align-self-center">
                              <v-icon left>mdi-magnify-scan</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content class="text-blue-dark">
                              Identify the most important challenges to address (opportunity/threat assessment)
                            </v-list-item-content>
                          </v-list-item>
                          <v-list-item>
                            <v-list-item-icon class="align-self-center">
                              <v-icon left>mdi-star</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content class="text-blue-dark">
                              Select the best opportunity to go for (risk/reward of assessment)
                            </v-list-item-content>
                          </v-list-item>
                        </v-list>
                      </v-card-text>
                    </v-col>
                    <v-col cols="4" class="d-flex align-center justify-center" v-if="breakpoint.lg">
                      <v-avatar size="254">
                        <v-img class="grayscale" :src="require('../assets/img/frame.png')"/>
                      </v-avatar>
                    </v-col>
                  </v-row>
                </v-tab-item>
                
                <!-- STEP3 -->
                <v-tab-item class="pt-2"> 
                  <v-row>
                    <v-col order="first">
                      <v-card-title class="overline text-h5 text-blue-light">
                        Build the case
                      </v-card-title>
                      <v-card-text class="text-h6 text-grey-dark">
                        <p>
                          Once the current focus identified and selected, we'll translate it into a business proposition and examine how to implement it. We will work on the following:
                        </p>
                        <v-list>
                          <v-list-item>
                            <v-list-item-icon class="align-self-center">
                              <v-icon left>mdi-bullseye</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content class="text-blue-dark">
                              Define the use case (scenario, scope and goal)
                            </v-list-item-content>
                          </v-list-item>
                          <v-list-item>
                            <v-list-item-icon class="align-self-center">
                              <v-icon left>mdi-shimmer</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content class="text-blue-dark">
                              Specify the benefits and the outcome
                            </v-list-item-content>
                          </v-list-item>
                          <v-list-item>
                            <v-list-item-icon class="align-self-center">
                              <v-icon left>mdi-puzzle</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content class="text-blue-dark">
                              Identify the moving parts (resources, technology, processes)
                            </v-list-item-content>
                          </v-list-item>
                        </v-list>
                      </v-card-text>
                    </v-col>
                    <v-col cols="4" class="d-flex align-center justify-center" v-if="breakpoint.lg">
                      <v-avatar size="254">
                        <v-img class="grayscale" :src="require('../assets/img/case.png')"/>
                      </v-avatar>
                    </v-col>
                  </v-row>
                    

                </v-tab-item>

                <!-- STEP4 -->
                <v-tab-item class="pt-2"> 
                  <v-row>
                    <v-col order="first">
                      <v-card-title class="overline text-h5 text-blue-light">
                        Implement the solution
                      </v-card-title>
                      <v-card-text class="text-h6 text-grey-dark">
                        <p>
                          Once the business case is validated, we're ready to launch the project. I will take care of the following:
                        </p>
                        <v-list>
                          <v-list-item>
                            <v-list-item-icon class="align-self-center">
                              <v-icon left>mdi-chart-gantt</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content class="text-blue-dark">
                              Define the planning (activities, processes, resources)
                            </v-list-item-content>
                          </v-list-item>
                          <v-list-item>
                            <v-list-item-icon class="align-self-center">
                              <v-icon left>mdi-tune-variant</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content class="text-blue-dark">
                              Specify the metrics (cost, kpi, timeline)
                            </v-list-item-content>
                          </v-list-item>
                          <v-list-item>
                            <v-list-item-icon class="align-self-center">
                              <v-icon left>mdi-ship-wheel</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content class="text-blue-dark">
                              Manage the exectution of the project from start to finish.
                            </v-list-item-content>
                          </v-list-item>
                        </v-list>
                      </v-card-text>
                    </v-col>
                    <v-col cols="4" class="d-flex align-center justify-center" v-if="breakpoint.lg">
                      <v-avatar size="254">
                        <v-img class="grayscale" :src="require('../assets/img/project.png')"/>
                      </v-avatar>
                    </v-col>
                  </v-row>
                </v-tab-item>
              </v-tabs>
            </v-card>
          </v-col>
        </v-row>
      </v-card>

              <v-divider class="my-4"></v-divider>

      <!-- SECTION: References -->
      <v-card flat tile class="mt-1 mb-1 pa-0">
        <v-row justify="center" align="center" class="my-4 d-flex flex-column">
          <v-col cols="8" order="first" class="anim fade-in-left hidden ">
            <v-card-title class="overline text-h3 text-orange-dark">
              <span class="font-bot">Organisations who trusted us</span>
            </v-card-title>
          </v-col>
          <v-col cols="12" class="">
            <v-card-text class="anim fade-in-up hidden">
              <v-row>
                <v-col v-for="itm in refs" :key="itm.id" class="mx-0 d-flex align-center justify-center ">
                  <v-avatar tile size="128">
                  <v-img
                    :src="itm.pic"
                    :lazy-src="itm.pic"
                    :max-height="itm.maxH"
                    :max-width="itm.maxW"
                    class="grayscale-plus"
                  >
                  </v-img>
                  </v-avatar>
                </v-col>
              </v-row>
            </v-card-text>
          </v-col>
        </v-row>
      </v-card>

    </v-card>

  </v-container>
</template>
<script>
export default {
  data: () => ({
    never: null,
    observer: null,
    refs: [
      {
        name: "genesys",
        pic: require("@/assets/img/genesys.png"),
        maxH: "50",
        maxW: "250",
        link: "genesy.com",
      },
      {
        name: "accenture",
        pic: require("@/assets/img/accenture.png"),
        maxH: "40",
        maxW: "250",
        link: ".com",
      },
      {
        name: "axa",
        pic: require("@/assets/img/axa.png"),
        maxH: "100",
        maxW: "100",
        link: ".com",
      },
      {
        name: "base",
        pic: require("@/assets/img/base.png"),
        maxH: "50",
        maxW: "120",
        link: ".com",
      },
      {
        name: "nxo",
        pic: require("@/assets/img/nxo.png"),
        maxH: "60",
        maxW: "110",
        link: ".com",
      },
      {
        name: "canal+",
        pic: require("@/assets/img/canal+.png"),
        maxH: "30",
        maxW: "120",
        link: ".com",
      },
      {
        name: "proximus",
        pic: require("@/assets/img/proximus.png"),
        maxH: "50",
        maxW: "150",
        link: ".com",
      },
      {
        name: "leroy-merlin",
        pic: require("@/assets/img/leroy-merlin.png"),
        maxH: "77",
        maxW: "220",
        link: ".com",
      },
      {
        name: "isracard",
        pic: require("@/assets/img/isracard.png"),
        maxH: "90",
        maxW: "200",
        link: ".com",
      },
      {
        name: "deutschebank",
        pic: require("@/assets/img/deutschebank.png"),
        maxH: "120",
        maxW: "180",
        link: ".com",
      },
      {
        name: "dexia",
        pic: require("@/assets/img/dexia.png"),
        maxH: "60",
        maxW: "200",
        link: ".com",
      },
      {
        name: "euroclear",
        pic: require("@/assets/img/euroclear.png"),
        maxH: "110",
        maxW: "110",
        link: ".com",
      },
      {
        name: "atos",
        pic: require("@/assets/img/atos.png"),
        maxH: "72",
        maxW: "130",
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
      });
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
.grayscale-plus {
  filter: grayscale(0.66);
}
.grayscale {
  filter: grayscale(0.25);
}
</style>