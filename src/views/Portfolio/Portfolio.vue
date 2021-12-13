<template>
  <v-container grid-list-xl>
    <v-layout row justify-center align-center wrap class="mt-4 pt-2">
      <v-flex xs12 sm12 md12 lg12 xl12>
        <h2 class="pl-4">
          <span>My</span>
          <span class="blue--text">Portfolio</span>
        </h2>
      </v-flex>
      <v-flex xs12 sm12 md4 lg4 xl4
        id="cont-main"
        v-for="portfolio in portfolios"
        :key="portfolio.src" >
        <v-card
          id="cont"
          :to="'/portfolio/' + portfolio.title.toLowerCase()"
          hover
          color="transparent"
          height="280"
        >
          <v-img
            :src="portfolio.src"
            aspect-ratio="2"
            height="130"
            contain
          ></v-img>
          <v-card-title primary-title class="justify-center">
            <v-flex text-xs-center subheading font-weight-bold>{{
              portfolio.title
            }}</v-flex>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import image from "../../assets/soft.jpeg";
import image1 from "../../assets/R.jpeg";
import image2 from "../../assets/embed.jpeg";

export default {
  metaInfo: {
    title: "Portfolio",
    titleTemplate: "%s ← Parfait's Space",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content:
          "Parfait 's Portfolio Web Development Video Editing Graphic Design Front-End Advetising",
      },
      { charset: "utf-8" },
      { property: "og:title", content: "Parfait' Space" },
      { property: "og:site_name", content: "Parfait' Space" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://Parfait.space" },
      {
        property: "og:image",
        content: "../../assets/profile.jpg",
      },
      {
        property: "og:description",
        content:
          "Parfait 's Portfolio Web Development Video Editing Graphic Design Front-End Advetising",
      },
    ],
  },
  data() {
    return {
      portfolios: [
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

<style scopped>
#cont {
  padding: 20px;
  border-radius: 5px;
  margin: 5px;
}

#cont-main {
  text-align: center;
  padding: 20px;
}
</style>
