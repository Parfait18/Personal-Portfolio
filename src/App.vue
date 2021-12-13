<template>
  <v-app :dark="goDark">
    <v-main>
      <v-container align-center>
        <Header :goDark="goDark" @changeTheme="updateTheme($event)"/>
        <transition name="router-animation" mode="out-in" center-active-class="animated fadeIn fast" leave-active-class="animated fadeOut faster">
          <router-view></router-view>
        </transition>
      </v-container>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import Vuetify from 'vuetify/lib';

export default {
  name: "App",
  metaInfo: {
    title: "Home",
    titleTemplate: "%s ← Parfait's Space",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "description", content: "Parfait 's Portfolio" },
      { charset: "utf-8" },
      { property: "og:title", content: "Parfait' Space" },
      { property: "og:site_name", content: "Parfait' Space" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://parfait.space" },
      {
        property: "og:image",
        content: "https://i.imgur.com/Dcz2PGx.jpg"
      },
      { property: "og:description", content: "Parfait 's Portfolio" }
    ]
  },
  components: {
    Header,
    Footer
  }, 
  data() {
    return {  
       goDark: false ,
       opts:{
        theme:{ dark: false }
       }, 
      vuetify : new Vuetify(this.opts)
    };
  },
  methods: {
    updateTheme(updatedTheme) {
      this.goDark = !updatedTheme;
      this.$vuetify.theme.dark=this.goDark;
    },
    
  },
  computed:{
   
  }
};
</script>
<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css";
</style>