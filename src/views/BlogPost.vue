<template>
  <v-layout column justify-center class="mt-4 pt-2">
    <v-flex xs12 sm12 md10 lg10 xl10 class="p-8">
      <h1 class="text-xs-center mb-4 pb-2">{{ post.title }}</h1>
      <!-- <span>{{result.date.getDate()}}.{{result.date.getMonth()+1}}.{{result.date.getFullYear()}}</span>
    <v-img :src="../assets/capture1.png" aspect-ratio="2.75" height="330" contain :alt="result.title"></v-img>-->

      <br />
      <br />
    </v-flex>
    <v-btn large flat to="/blog" class="green--text">
      <v-icon>arrow_back</v-icon>Back to Blog
    </v-btn>
  </v-layout>
</template>

<script>
import PostDataServices from "../services/PostDataServices";

export default {
  data() {
    return {
      post: [],
    };
  },
  metaInfo() {
    return {
      title: this.post.slug,
      titleTemplate: "%s ← Parfait's Blog",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content: this.post.slug,
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
      ],
    };
  },
  computed: {},

  mounted() {
    this.getPostById(this.$route.params.id);
  },

  methods: {
    getPostById(id) {
      this.post = PostDataServices.findById(id)
        .then((response) => {
          this.post = response.data.post;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style scoped></style>
