<template>
  <form class="post-form form" @submit.prevent>
    <div class="post-form__wrapper">
      <h2 class="post-form__title">Создание поста</h2>

      <ui-input v-focus v-model="post.title" placeholder="Введите заголовок поста" />

      <ui-input v-model="post.body" placeholder="Введите описание поста" />

      <ui-button class="post-form__button" :disabled="!isFormValid" @click="addPost">
        Создать пост
      </ui-button>
    </div>
  </form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data: () => ({
    post: {
      title: "",
      body: "",
    },
  }),

  computed: {
    isFormValid() {
      const isPostTitleValid = this.post.title !== "";

      const isPostBodyValid = this.post.body !== "";

      return isPostTitleValid && isPostBodyValid;
    },
  },

  methods: {
    ...mapActions({
      addPost: "posts/addPost",
    }),
    async addPost() {
      const newPost = {
        title: this.post.title,
        body: this.post.body,
      };

      this.$emit("addNewPost", newPost);
    },
  },
};
</script>

<style scoped>
.post-form {
}

.post-form__wrapper {
  @apply flex flex-col gap-2.5;
  @apply p-5;
}

.post-form__title {
  @apply mb-2.5;
}

.post-form__button {
  @apply self-end mt-2.5;
}
</style>
