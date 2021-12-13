<template>
  <v-container fluid ma-0 pa-0 class="background fullsize">
    <!-- LG display -->
    <v-card tile flat color="transparent" v-show="breakpoint.lg">
      <v-row class="ma-2 header d-flex">
        <v-col cols="" class="offset-2 align-self-end"><Logo /></v-col>
      </v-row>
      <v-row justify="center" align="center" class="">
        <v-col cols="4" class="offset-2 animate__animated animate__fadeInLeft">
          <v-row class="d-flex flex-column align-center justify-center">
            <v-col>
              <v-card-title class="white--text font-weight-bold text-h4 overline">
                <p>
                  The <span class="deep-orange--text">#1 thing</span> your business
                  can't afford to ignore anymore!
                </p>
              </v-card-title>
              <v-card-subtitle class="text-h6 font-weight-light deep-orange--text overline">
                <p>
                  A short video on how to survive in today's digital economy...
                </p>
              </v-card-subtitle>
              <v-card-subtitle>
                <Schedule :title="title" :theme="theme" :interest="interest" >
                </Schedule>
              </v-card-subtitle>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="6" class="animate__animated animate__fadeInRight">
          <!-- <v-card elevation="16" class="" color="transparent"> -->
            <div class="plyr__video-embed" id="player" data-poster="/img/cover.png">
              <iframe :width="breakpoint.w" :height="breakpoint.h"
                :src="video"
                allowfullscreen
                allowtransparency
                allow="autoplay"
                class=" shadow"
              ></iframe>
            </div>
            <!-- <vue-plyr ref="plyr" :options="options">
              <video class="player" width="640" height="520" data-poster="/img/cover.png" >
                <source size="360" :src="video" type="video/mp4" />
                <source size="720" :src="video" type="video/mp4" />
                <source size="1080" :src="video" type="video/mp4" />
              </video>
            </vue-plyr> -->
          <!-- </v-card> -->
        </v-col>
      </v-row>
    </v-card>

    <!-- MD display -->
    <v-card tile flat color="transparent" class="" v-show="breakpoint.md">
        <v-row class="mt-10 ml-2 ">
          <v-col cols="" class="offset-1"><Logo /></v-col>
        </v-row>
      <v-row class=" d-flex align-center justify-center">
        <v-col cols="4" class=" animate__animated animate__fadeInLeft">
          <v-row class="">
            <v-col class="">
              <v-card-title class="white--text font-weight-bold text-h5 overline">
                <p>
                  The <span class="deep-orange--text">#1 thing</span> your business
                  can't afford to ignore anymore!
                </p>
              </v-card-title>
              <v-card-subtitle class="text-h6 font-weight-light deep-orange--text overline">
                <p>
                  A short video on how to survive in today's digital economy...
                </p>
              </v-card-subtitle>
              <v-card-subtitle>
                <Schedule :title="title" :theme="theme" :interest="interest" >
                  <template v-slot><Calendar /></template>
                </Schedule>
              </v-card-subtitle>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="6" class=" animate__animated animate__fadeInRight">
            <div class="tmpr d-flex plyr__video-embed" id="player"  data-poster="/img/cover.png">
              <iframe :width="breakpoint.w" :height="breakpoint.h"
                :src="video"
                allowfullscreen
                allowtransparency
                allow="autoplay"
                class="tmpb shadow iframe"
              ></iframe>
            </div>
        </v-col>
      </v-row>
    </v-card>

    <!-- SM display -->
    <v-card tile flat color="transparent" v-show="breakpoint.sm">
      <v-row class="header d-flex">
        <v-col cols="" class="offset-1 align-self-end"><Logo /></v-col>
      </v-row>
      <v-row justify="center" align="center" class="d-flex ">
        <!-- CALL TO ACTION -->
        <v-col cols="10" class="animate__animated animate__fadeInLeft">
          <v-row no-gutters class="d-flex align-end">
            <v-col cols="6" class="">
              <v-card-title class="white--text font-weight-bold text-h6 overline">
                <p>
                  The <span class="deep-orange--text">#1 thing</span> your business
                  can't afford to ignore anymore!
                </p>
              </v-card-title>
            </v-col>
            <v-col cols="6">
              <v-card-subtitle>
                <Schedule :title="title" :theme="theme" :interest="interest" >
                  <!-- <template v-slot><Calendar /></template> -->
                </Schedule>
              </v-card-subtitle>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-card-subtitle class="text-h6 font-weight-light deep-orange--text overline">
                <p>
                  A short video on how to survive in today's digital economy...
                </p>
              </v-card-subtitle>
            </v-col>
          </v-row>
        </v-col>
        <!-- VIDEO -->
        <v-col cols="9" class="  align-center justify-center d-flex animate__animated animate__fadeInRight">
          <!-- <v-card elevation="16" class="ma-2"> -->
            <div class="d-flex plyr__video-embed" id="player"  data-poster="/img/cover.png">
              <iframe :width="breakpoint.w" :height="breakpoint.h"
                :src="video"
                allowfullscreen
                allowtransparency
                allow="autoplay"
                class="shadow"
                align="justify-center"
              ></iframe>
            </div>
          <!-- </v-card> -->
        </v-col>
      </v-row>
    </v-card>
    <!-- XS display -->
    <v-card tile flat color="transparent" v-show="breakpoint.xs">
      <v-row class="header d-flex">
        <v-col cols="" class="offset-1 align-self-end"><Logo /></v-col>
      </v-row>
      <v-row justify="center" align="center" class="d-flex">
        <!-- CALL TO ACTION -->
        <v-col cols="10" class="animate__animated animate__fadeInLeft">
          <v-row no-gutters class="d-flex flex-column align-center">
            <v-col cols="12" class="">
              <v-card-title class="white--text font-weight-bold text-h6 overline">
                <p>
                  The <span class="deep-orange--text">#1 thing</span> your business
                  can't afford to ignore anymore!
                </p>
              </v-card-title>
            </v-col>
            <v-col cols="12">
              <v-card-subtitle>
                <Schedule :title="title" :theme="theme" :interest="interest" >
                  <!-- <template v-slot><Calendar /></template> -->
                </Schedule>
              </v-card-subtitle>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col>
              <v-card-subtitle class="text-h6 font-weight-light deep-orange--text overline">
                <p>
                  A short video on how to survive in today's digital economy...
                </p>
              </v-card-subtitle>
            </v-col>
          </v-row>
        </v-col>
        <!-- VIDEO -->
        <v-col cols="10" class="animate__animated animate__fadeInRight">
            <div class="plyr__video-embed" id="player"  data-poster="/img/cover.png">
              <iframe :width="breakpoint.w" :height="breakpoint.h"
                :src="video"
                allowfullscreen
                allowtransparency
                allow="autoplay"
                class="shadow"
              ></iframe>
            </div>
        </v-col>
      </v-row>
    </v-card>

  </v-container>
</template>
<script>
export default {
  layout: "landing",
  data: () => ({
    video: "https://www.youtube.com/embed/oR6K9o2apsk?rel=0;controls=0;showinfo=0",
    title: "Discovery Call",
    theme:"Discovery Call",
    interest: ["Artificial Intelligence", "Cloud Computing", "Data Intelligence", "Blockchain","Internet of Things"],
    observer: null,
    dialog: false,
    options: {
      controls: [
        "play-large",
        "progress",
        "current-time",
        "mute",
        "volume",
        "captions",
        "settings",
        "fullscreen",
      ],
    },
  }),
  mounted() {
    // let video = document.querySelector('video')
    // let cclass = document.querySelector('.player')
    // let plyr = this.$refs.plyr.player
    // let isPaused = false
    // console.log('element :',cclass)
    // this.observer = new IntersectionObserver(
    //   (entries, observer) => {
    //     entries.forEach(entry => {
    //       if(entry.intersectionRatio!=1  && !plyr.paused){
    //         console.log(' || pausing')
    //         plyr.pause(); isPaused = true;
    //       }
    //       else if(isPaused) {plyr.play(); isPaused=false
    //         console.log(' > playing')
    //       }
    //       else {
    //         console.log(' nothing!!!')
    //       }
    //     });
    //   }
    //   ,{
    //   root: null,
    //   rootMargin: '0px 0px 0px 0px',
    //   threshold: 1,
    // })
    // // document.querySelector('#player').forEach(vid => {
    // this.observer.observe(cclass)
    // // })
  },
  // destroyed() {
  //   this.observer.disconnect()
  //   this.observer = null
  // },
  methods: {
    pauseVideo(event) {
      console.log("pause video");
      let video = this.$refs.plyr.player;
      let isPaused = false;
      event.forEach((entry) => {
        if (!entry.intersectionRatio == 1 && !video.paused) {
          video.pause();
          isPaused = true;
          console.log(" || pausing");
        } else if (isPaused) {
          video.play();
          isPaused = false;
          console.log(" > playing");
        }
        // else {video.play(); isPaused = true
        //     console.log(' > playing')
        //   // console.log(' ??? ')
        // }
      })
    },
  },
  computed: {
    dense() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs": return "my-0 py-0";
        default: return "";
      }
    },
    size() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs": return h6;
        case "sm": return h5;
        default: return h4;
      }
    },
    breakpoint () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return { xs: true, sm: false, md: false, lg: false, xl: false, name:'xs', w:'500', h:'282' }
        case 'sm': return { xs: false, sm: true, md: false, lg: false, xl: false, name:'sm', w:'600', h:'338' }
        case 'md': return { xs: false, sm: false, md: true, lg: false, xl: false, name:'md', w:'520', h:'320' }
        case 'lg': return { xs: false, sm: false, md: false, lg: true, xl: false, name:'lg', w:'630', h:'356' }
        case 'xl': return { xs: false, sm: false, md: false, lg: false, xl: true, name:'xl', w:'665', h:'380' }
      }
    }
  },
};
</script>
<style scoped>
.header {
  display: block;
  height: 20vh;
}
.fullsize {
  display: flex;
  height: 120%;
  width: 100%;
}
.background {
  background-image: url('./../assets/img/landing.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.shadow {
  box-shadow: 0px 5px 20px #202020;
} 
</style>