<template>
  <shared-page page-name="post" :loading="loading" :is-empty="!post">
    <template #content>
      <router-link to="/posts"> Вернуться на страницу с постами </router-link>

      <h1 class="post__title">
        {{ post.title }}
      </h1>

      <div class="post__content">
        <p v-for="paragraph in postBody" :key="paragraph">
          {{ paragraph }}
        </p>
      </div>
    </template>

    <template #empty-content>
      <h1 class="post__title">Не удалось загрузить посты.</h1>
      <ui-button @click="$router.push('/posts')"> Вернуться к списку постов </ui-button>
    </template>
  </shared-page>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data: () => ({
    post: null,
    loading: true,
  }),
  computed: {
    postBody() {
      return this.post.body.split("\n");
    },
  },
  methods: {
    ...mapActions({
      fetchPostById: "posts/fetchPostById",
      fetchUserById: "users/fetchUserById",
    }),
  },
  async mounted() {
    this.post = await this.fetchPostById(this.$route.params.id);

    this.loading = false;
  },
};
</script>

<style>
.post {
}

.post__wrapper,
.post__content {
  @apply flex flex-col gap-2.5;
}

.post__wrapper {
  @apply p-2.5 pt-0;
}

.post__title {
  @apply mb-2;
}

.post__content {
}

.post__list {
  @apply flex flex-col gap-5;
}
</style>
