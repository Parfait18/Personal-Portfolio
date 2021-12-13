<template>
  <v-container grid-list-xl>
    <v-layout row justify-center align-center wrap class="mt-4 pt-2">
      <v-flex xs12 sm12 md12 lg12 xl12>
        <h2 class="pl-4">
          <span>My</span>
          <span class="blue--text">Services</span>
        </h2>
      </v-flex>
      <v-flex
        v-for="service in services"
        :key="service.src"
        xs6
        sm3
        md3
        lg3
        xl3
      >
        <v-card
          hover
          flat
          color="transparent"
          :style="{ cursor: 'context-menu' }"
        >
          <v-card-title></v-card-title>
          <v-img
            :src="service.src"
            height="100"
            aspect-ratio="2.75"
            :alt="'Parfait do ' + service.title"
            lazy-src="https://cdn.dribbble.com/users/503653/screenshots/3143656/fluid-loader.gif"
            contain
          ></v-img>
          <v-card-title class="justify-center">
            <v-flex text-xs-center subheading font-weight-bold>{{
              service.title
            }}</v-flex>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex xs12 sm12 md12 lg12 xl12>
        <h2 class="pl-4">
          <div class=""></div>
        </h2>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import image from "../assets/soft.jpeg";
import image1 from "../assets/R.jpeg";
import image2 from "../assets/embed.jpeg";

export default {
  metaInfo: {
    title: "Services",
    titleTemplate: "%s ← Parfait's Space",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content:
          "Parfait's Services Web Development Video Editing Graphic Design Front-End Advetising",
      },
      { charset: "utf-8" },
      { property: "og:title", content: "Parfait' Space" },
      { property: "og:site_name", content: "Parfait' Space" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://Parfait.space" },
      {
        property: "og:image",
        content: "../assets/profile.jpg",
      },
      {
        property: "og:description",
        content:
          "Parfait's Services Web Development Video Editing Graphic Design Front-End Advetising",
      },
    ],
  },
  data() {
    return {
      services: [
        {
          src: "https://i.imgur.com/GvTt5GG.png",
          title: "Web Developement",
        },
        {
          src: image,
          title: "Software development",
        },
        {
          src: image1,
          title: "Android Application development",
        },
        {
          src: image2,
          title: "Embeded System Conception",
        },
      ],
    };
  },
};
</script>
<style>
.v-img {
  border: "56px solid #1E90FF";
}
</style>
