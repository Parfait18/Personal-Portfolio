<template>
  <v-flex xs12 sm12 md12 lg12 xl12>
    <v-card :to="'blog/post/' + post.id" hover>
      <!--<v-img :src="thumbnailImage" aspect-ratio="2.75" height="230" :alt="title"></v-img>-->

      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">Title : {{ post.title }}</h3>
          <div>
            <p class="green--text font-weight-medium">{{ post.body }}</p>
          </div>
        </div>
      </v-card-title>
      <v-card-actions>
        <v-btn @click="updatePost" color="blue" class="white--text"
          >Modifier</v-btn
        >
        <v-btn color="#ff042ec2" class="white--text" @click="deletePost"
          >Delete</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  methods: {
    updatePost() {},
    deletePost() {},
  },
};
</script>

<style scoped></style>
