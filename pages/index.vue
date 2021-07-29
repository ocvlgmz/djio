<template>
  <v-container fluid pa-0>
    <v-row class="d-flex align-center justify-lg-start justify-center">
      <v-col cols="4">
        <Tagline />
      </v-col>
    </v-row>
    <v-card flat color="transparent" class="hidden-md-and-down">
      <v-row justify="center" align="center">
        <v-col cols="4" class="animate__animated animate__fadeInLeft">
          <v-row class="d-flex flex-column align-center justify-start">
            <v-col>
              <v-card-title class="text-capitalize dj-blue">
                <div class="font-weight-bold text-h4">
                  The <span class="dj-yellow">#1 thing</span> your business
                  can't afford to ignore beyond 2021!
                </div>
              </v-card-title>
              <v-card-subtitle class="text-h6 font-weight-light dj-blue">
                A short video on how to survive in today's digital economy, and
                a quick call invitation...
              </v-card-subtitle>
              <v-card-subtitle>
                <Contact
                  title="Schedule Your Call"
                  name="Call Invitation"
                  :interest="[
                    'digital transformation',
                    'customer experience',
                    'data intelligence',
                  ]"
                >
                  <template v-slot>
                    <Calendar />
                  </template>
                </Contact>
              </v-card-subtitle>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="8" lg="6" class="animate__animated animate__fadeInRight">
          <v-card elevation="6" class="ma-10">
            <vue-plyr ref="plyr" :options="options">
              <video
                class="player"
                width="640"
                height="520"
                data-poster="/img/cover.png"
              >
                <source
                  size="360"
                  :src="require('../assets/vid/call-v5.mp4')"
                  type="video/mp4"
                />
                <source
                  size="720"
                  :src="require('../assets/vid/call-v5.mp4')"
                  type="video/mp4"
                />
                <source
                  size="1080"
                  :src="require('../assets/vid/call-v5.mp4')"
                  type="video/mp4"
                />
              </video>
            </vue-plyr>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
    <v-card flat color="transparent" class="hidden-lg-and-up">
      <v-row justify="center" align="center">
        <v-col cols="8" md="6" class="animate__animated animate__fadeInLeft">
          <v-row
            no-gutters
            class="d-flex align-center justify-md-start justify-sm-center"
          >
            <v-col>
              <v-card-title :class="`text-capitalize dj-blue ${dense}`">
                <div class="font-weight-bold text-h6 text-sm-h5 text-md-h4">
                  The <span class="dj-yellow">#1 thing</span> your business
                  can't afford to ignore beyond 2021!
                </div>
              </v-card-title>
              <v-card-subtitle class="text-h6 font-weight-light dj-blue ma-1">
                A short video on how to survive in today's digital economy, and
                a call to action...
              </v-card-subtitle>
              <v-card-subtitle>
                <Contact
                  title="Schedule Your Call"
                  name="Call Invitation"
                  :interest="[
                    'digital transformation',
                    'customer experience',
                    'data intelligence',
                  ]"
                >
                  <template v-slot>
                    <Calendar />
                  </template>
                </Contact>
              </v-card-subtitle>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="10" md="8" class="animate__animated animate__fadeInRight">
          <v-card elevation="6" class="mx-10">
            <Observer @intersect="pauseVideo" target="video" />
            <vue-plyr ref="plyr" :options="options">
              <video
                class="player"
                width="640"
                height="520"
                data-poster="/img/cover.png"
              >
                <source
                  size="360"
                  :src="require('../assets/vid/call-v5.mp4')"
                  type="video/mp4"
                />
                <source
                  size="720"
                  :src="require('../assets/vid/call-v5.mp4')"
                  type="video/mp4"
                />
                <source
                  size="1080"
                  :src="require('../assets/vid/call-v5.mp4')"
                  type="video/mp4"
                />
              </video>
            </vue-plyr>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>
<script>
export default {
  layout: "landing",
  data: () => ({
    title: "Schedule Call",
    interest: ["Digitalization", "Customer Experience", "Data Intelligence"],
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
      });
    },
  },
  computed: {
    dense() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "my-0 py-0";
          dafault: return "";
      }
    },
    size() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return h6;
        case "sm":
          return h5;
        default:
          return h4;
      }
    },
  },
};
</script>
<style scoped>
.logo {
  font-family: "Geo";
  font-size: 28px;
  /* font-weight: 100; */
}
.rwh {
  height: 50px;
}
.space {
  line-height: 1;
}
.tmp {
  border: 1px solid red;
  /* min-height:20px; */
  /* margin-top:60px; */
}
.bg-landing {
  /* width:100%;
  height:100%; */
  background-image: url(/img/bg-triangles-blue-grey.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  /* filter: grayscale(50%); */
}
</style>