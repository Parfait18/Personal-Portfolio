<template>
  <v-container grid-list-xl>
    <v-layout row justify-center align-center wrap class="mt-4 p-10">
      <v-flex xs12 sm12 md8 lg8 xl8>
        <v-toolbar class="toolbar">
          <v-btn color="#e96f1e" class="white--text" @click="displayNewPost"
            >new post</v-btn
          >
          <v-text-field
            required
            hide-details
            prepend-icon="mdi-magnify"
            single-line
          >
          </v-text-field>
          <v-btn @click="search" color="blue" class="white--text">Search</v-btn>
        </v-toolbar>
      </v-flex>
      <v-flex xs12 sm12 md4 lg4 xl4>
        <v-select
          class="category"
          label="Category"
          :items="items"
          filled
        ></v-select>
      </v-flex>
    </v-layout>

    <v-layout
      v-if="display"
      row
      justify-center
      align-center
      wrap
      class="mt-4 pt-2"
    >
      <v-flex xs12 sm12 md10 lg10 xl10 class="p-8">
        <form>
          <v-text-field
            name="title"
            color="blue"
            background-color="transparent"
            v-model="title"
            label="Post Title"
            required
            :error-messages="titleErrors"
            @blur="$v.title.$touch()"
          ></v-text-field>
          <v-text-field
            color="blue"
            background-color="transparent"
            name="slug"
            v-model="slug"
            label="Slug"
            required
            :error-messages="slugErrors"
            @blur="$v.slug.$touch()"
          ></v-text-field>
          <v-file-input
            v-model="image"
            label="Upload FIle"
            filled
            prepend-icon="mdi-camera"
            show-size
          ></v-file-input>
          <v-textarea
            color="blue"
            background-color="transparent"
            :counter="500"
            v-model="body"
            label="Post Body"
            name="body"
            :error-messages="bodyErrors"
            @blur="$v.body.$touch()"
          ></v-textarea>
          <v-btn
            @click="submit"
            type="submit"
            color="blue"
            class="white--text"
            :disabled="body.length <= 20"
            >Save</v-btn
          >
          <v-btn color="#ff042ec2" class="white--text" @click="close"
            >close</v-btn
          >
        </form>
      </v-flex>
    </v-layout>
    <v-layout row justify-center align-center wrap class="mt-4 pt-2">
      <v-flex v-if="posts" xs12 sm12 md10 lg10 xl10 class="p-8">
        <h1 class="all-post">All Post</h1>
        <PostPreview v-for="p in posts" :key="p.id" :post="p"></PostPreview>
      </v-flex>
      <v-flex v-else>
        <h1>Not Post Found</h1>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import PostPreview from "../components/PostPreview";
import PostDataServices from "../services/PostDataServices";
import { validationMixin } from "vuelidate";
import { required, maxLength, minLength } from "vuelidate/lib/validators";

export default {
  metaInfo: {
    title: "Blog",
    titleTemplate: "%s ← Parfait's Space",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content: "Parfait 's Blog",
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
        content: "Parfait 's Blog",
      },
    ],
  },
  mixins: [validationMixin],
  validations: {
    title: { required, maxLength: maxLength(20) },
    slug: { required, maxLength: maxLength(8) },
    body: { required, minLength: minLength(20) },
  },
  data() {
    return {
      posts: [],
      display: false,
      body: "",
      selected: null,
      items: [
        { value: "webdev", text: "Web-Dev" },
        { value: "android", text: "Android-Dev" },
      ],
      id: null,
      title: "",
      slug: "",
      submited: false,
      image: null,
    };
  },
  mounted() {
    this.GetAllPosts();
  },

  methods: {
    GetAllPosts() {
      PostDataServices.getAll()
        .then((response) => {
          this.posts = response.data.posts;
          console.log(this.posts);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    displayNewPost() {
      this.display = true;
    },
    search() {},
    submit() {
      this.display = false;
      var data = {
        title: this.title,
        slug: this.slug,
        body: this.body,
      };
      PostDataServices.create(data)
        .then((response) => {
          this.id = response.data.id;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
      this.clear();
    },

    clear() {
      this.$v.$reset();
      this.title = "";
      this.slug = "";
      this.body = "";
    },
    close() {
      this.display = false;
    },
  },
  components: {
    PostPreview,
  },
  computed: {
    titleErrors() {
      const errors = [];
      if (!this.$v.title.$dirty) return errors;
      !this.$v.title.maxLength &&
        errors.push("Title must be at most 20 characters long");
      !this.$v.title.required && errors.push("Title is required.");
      return errors;
    },
    slugErrors() {
      const errors = [];
      if (!this.$v.slug.$dirty) return errors;
      !this.$v.slug.required && errors.push("Slug is required");
      !this.$v.slug.maxLength &&
        errors.push("Slug must be at most 8 characters long");
      return errors;
    },
    bodyErrors() {
      const errors = [];
      if (!this.$v.body.$dirty) return errors;
      !this.$v.body.minLength &&
        errors.push("Text must be at least 20 characters long");
      !this.$v.body.required && errors.push("Text is required");
      return errors;
    },
  },
};
</script>

<style scoped>
.category {
  padding: 20px;
  margin-top: 30px;
}
.toolbar {
  border-radius: 5px;
}
.all-post {
  text-align: left;
  margin: 20px;
  color: rgb(167, 167, 167);
}
</style>
