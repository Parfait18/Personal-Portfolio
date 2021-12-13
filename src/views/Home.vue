<template>
  <v-layout column justify-center align-center class="mt-4 pt-2">
    <VueCompareImage
      class="hidden-md-and-down"
      hover
      max-width="500px"
      :style="{ width: '500px', height: '300px' }"
      :sliderLineWidth="sliderLine"
      :handleSize="hSize"
      :leftImage="leftImage"
      :rightImage="rightImage"
      :sliderPositionPercentage="sliderPosition"
    />

    <br />
    <vue-typer
      class="headline"
      :repeat="0"
      text="AHOUANTO Parfait Sylvanus Z."
    ></vue-typer>
    <vue-typer
      :text="text1"
      :repeat="Infinity"
      :shuffle="false"
      initial-action="erasing"
      :pre-type-delay="70"
      :type-delay="70"
      :pre-erase-delay="1980"
      :erase-delay="150"
      erase-style="select-back"
      :erase-on-complete="false"
      caret-animation="smooth"
    ></vue-typer>
    <br />
    <v-flex xs12 sm6 md4 lg4 xl4>
      <v-card flat color="transparent" max-width="500">
        <v-card-title primary-title>
          <div class="gray--text">
            <h3 class="headline mb-0">
              <span>About</span>
              <span class="blue--text">Me</span>
            </h3>
            <div>
              <p>
                Hello! I’m Parfait AHOUANTO I'm a Fullstack web developer who is
                passionate about
                <span class="blue--text font-weight-bold">VUE</span>, building
                great user experiences, fighting for simplicity over complexity
                and constantly learning. When I'm not coding or making videos,
                you'll find me playing piano.
              </p>
            </div>
          </div>
        </v-card-title>

        <v-card-actions class="hidden-sm-and-down justify-center">
          <v-btn
            v-for="icon in icons"
            :key="icon.icon"
            fab
            dark
            outlined
            color="blue"
            :href="icon.href"
            target="_blank"
          >
            <v-icon dark>{{ icon.icon }}</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { VueTyper } from "vue-typer";
import VueCompareImage from "vue-compare-image";
import image from "../assets/code.jpg";
import image1 from "../assets/programming1.jpg";

export default {
  metaInfo: {
    title: "Home",
    titleTemplate: "%s ← Parfait's space ",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "description", content: "Parfait 's Portfolio" },
      { charset: "utf-8" },
      { property: "og:title", content: "Parfait' Space" },
      { property: "og:site_name", content: "Parfait' Space" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://Parfait.space" },
      {
        property: "og:image",
        content: "https://i.imgur.com/Dcz2PGx.jpg",
      },
      { property: "og:description", content: "Parfait 's Portfolio" },
    ],
  },
  components: {
    "vue-typer": VueTyper,
    VueCompareImage,
  },
  data() {
    return {
      icons: [
        { href: "https://github.com/parfait18", icon: "fab fa-github" },
        {
          href: "https://twitter.com/parfait-ahouanto",
          icon: "fab fa-twitter",
        },
        {
          href: "https://www.linkedin.com/parfait-ahouanto",
          icon: "fab fa-linkedin-in",
        },
        {
          href: "https://www.facebook.com/parfaitaht",
          icon: "fab fa-facebook-f",
        },
      ],
      text1: [
        "Front-End Developer",
        "Full-stack Web Developer",
        "Software Developer",
        "Data Scientist",
      ],
      leftImage: image,
      rightImage: image1,
      sliderLine: 0,
      hSize: 0,
      sliderPosition: 0,
    };
  },
};
</script>
<style>
@keyframes rocking {
  0%,
  100% {
    transform: rotateZ(-10deg);
  }

  50% {
    transform: rotateZ(10deg);
  }
}
.headline {
  font-size: 80px;
}

.vue-typer {
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
}
.vue-typer .custom.char.typed {
  color: rgb(28, 172, 255);
}
.vue-typer .custom.char.selected {
  color: #e91e63;
}

.vue-typer .custom.caret {
  animation: rocking 1s ease-in-out 0s infinite;
}
.vue-typer .custom.caret.typing {
  background-color: rgb(28, 172, 255);
}
.vue-typer .custom.caret.selecting {
  display: inline-block;
  background-color: #ff042ec2;
}
</style>
