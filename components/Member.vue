<template>
    <v-hover v-slot="{ hover }">
        <v-card tile :elevation="hover ? 12 : 2">
            <div v-if="type===''">
                <v-img :src="require(`../assets/img/${fn()}.png`)"/>
            </div>
            <div v-else-if="type==='team'">
                <v-card-text class="d-flex flex-column align-center justify-center">
                            <v-img :src="require(`../assets/img/${fn()}.png`)" />
                        <!-- <v-avatar :size="`${size}`" :style="`border-radius:${display}%;`">
                        </v-avatar> -->
                    <!-- <v-card-title>
                    </v-card-title> -->
                    <v-card-title class="overline wb self">{{ name }}</v-card-title>
                    <v-chip-group dark column class="overline wb">
                        <v-chip small v-for="itm of role" :key="itm.id" color="#505050">{{itm}}</v-chip>
                    </v-chip-group>
                </v-card-text>
            </div>
            <div v-else-if="type==='tech'">
                <v-card tile>
                    <v-img :src="require(`../assets/img/${fn()}.png`)" />
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
            </div>
        </v-card>
    </v-hover>
</template>
<script>
  export default {
    props:{ name:String, role:Array, display:String, type:String, size:String },
    methods: {
        fn (){
            const res = this.name.toLowerCase().split(" ");
            return res[0]
        },
    },
    data () {
        return {
            bgImg: {
                backgroundImage: '`url(../assets/img/${this.fn()}.png)`',
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
.self {
    text-align: center;
}

</style>