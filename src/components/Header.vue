<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      app
      width="150"
      height="340"
    >
      <v-list class="pt-4">
        <v-list-item active-class="blue--text" to="/">
          <v-list-item-content>
            <v-list-item-title>HOME</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item active-class="blue--text" to="/resume">
          <v-list-item-content>
            <v-list-item-title>RESUME</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item active-class="blue--text" to="/services">
          <v-list-item-content>
            <v-list-item-title>SERVICES</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item active-class="blue--text" to="/portfolio">
          <v-list-item-content>
            <v-list-item-title>PORTFOLIO</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item active-class="blue--text" to="/blog">
          <v-list-item-content>
            <v-list-item-title>BLOG</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item active-class="blue--text" to="/contact">
          <v-list-item-content>
            <v-list-item-title>CONTACT</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    
    
    <v-app-bar flat dense color="transparent" scroll-off-screen>
    
    <v-app-bar-nav-icon class="hidden-md-and-up"
        @click.stop="drawer = !drawer" >
        </v-app-bar-nav-icon>
      <v-toolbar-title class="headline">
        <span class="gray--text font-weight-light"> AHOUANTO </span>
        <span class="blue--text"> Parfait S.</span>
      </v-toolbar-title>

      <img
        :src="image_perso"
        :style="{
          borderRadius: '100%',
          border: '3px solid #1E90FF',
          width: '60px',
          height: '60px',
          marginLeft: '20px',
        }"
      />
      <v-spacer></v-spacer>
      <v-btn @click="changeTheme" depressed small icon class="hidden-md-and-up">
        <v-icon v-if="goDark == true">fas fa-sun</v-icon>
        <v-icon v-else>fas fa-moon</v-icon>
      </v-btn>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text to="/" active-class="blue--text headline">Home</v-btn>
        <v-btn text to="/resume" active-class="blue--text headline"
          >Resume</v-btn
        >
        <v-btn text to="/services" active-class="blue--text headline"
          >Services</v-btn
        >
        <v-btn text to="/portfolio" active-class="blue--text headline"
          >Portfolio</v-btn
        >
        <v-btn text to="/blog" active-class="blue--text headline">Blog</v-btn>
        <v-btn text to="/contact" active-class="blue--text headline"
          >Contact</v-btn
        >
        <v-btn text @click="changeTheme" depressed small icon>
          <v-icon v-if="goDark == true">fas fa-sun</v-icon>
          <v-icon v-else>fas fa-moon</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>
<script>
import img from "../assets/profile.jpg";

export default {
  props: {
    goDark: {
      type: Boolean,
    },
  },
  data() {
    return {
      drawer: null,
      image_perso: img,
    };
  },
  methods: {
    changeTheme() {
      this.$emit("changeTheme", this.goDark);
    },
  },
};
</script>

<style></style>
