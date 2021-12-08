<template>
    <v-hover v-slot="{ hover }">
        <v-card tile flat class="bg-orange-light" v-if="type==='team'">
            <v-card-text class="d-flex flex-column align-center justify-center">
                <v-avatar :size="`${size}`" :class="hover ? 'focused' : 'filtered'">
                    <v-img :src="require(`../assets/img/${imageName()}.png`)" />
                </v-avatar>
                <v-card-subtitle class="text-bio text-center">{{ name }}</v-card-subtitle>
                <v-card-subtitle :class="hover ? 'text-orange-dark text-h6 ma-0 pa-0 text-center' : 'text-h6 text-center ma-0 pa-0'" v-for="itm of role" :key="itm.id">{{ itm }}</v-card-subtitle>
            </v-card-text>
        </v-card>
        <v-card tile :elevation="hover ? 12 : 2" v-else-if="type==='tech'">
            <v-card tile>
                <v-img :src="require(`../assets/img/${imageName()}.png`)" />
            </v-card>
            <div class="d-sm-none">
                <v-card-text class="align-center justify-center">
                    <v-card-subtitle class="overline wb self">{{ name }}</v-card-subtitle>
                    <v-chip-group dark column class="overline wb d-none d-sm-flex">
                        <v-chip small v-for="itm of role" :key="itm.id" color="#505050" class="">{{itm}}</v-chip>
                        <v-chip x-small v-for="itm of role" :key="itm.id" color="#505050" class="d-none d-sm-flex d-md-none">{{itm}}</v-chip>
                    </v-chip-group>
                </v-card-text>
            </div>
        </v-card>
    </v-hover>
</template>
<script>
  export default {
    props:{ name:String, role:Array, shape:String, type:String, size:String },
    methods: {
        imageName (){
            const res = this.name.toLowerCase().split(" ");
            return res[0]
        },
    },
    data () {
        return {
            bgImg: {
                backgroundImage: '`url(../assets/img/${this.imageName()}.png)`',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width:'100%'
            }
        }
    }
  }
</script>
<style scoped>
.wb {
    word-break: keep-all;
}
/* .self {
    text-align: center;
} */
.filtered {
    filter:grayscale(0.2);
    /* transform: scale(0.97); */
    /* box-shadow: 5px 5px 5px; */
}
.focused {
    /* filter:grayscale(0); */
    transform: scale(1.01);
    box-shadow: 0px 3px 9px;
}
.text-bio {
    font-size: 1.25rem;
    /* font-family: var(--font-manrope); */
    text-transform: uppercase;
}
</style>