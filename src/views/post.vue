<template>
  <shared-page page-name="post" :loading="loading" :is-empty="!post">
    <template #content>
      <router-link to="/posts"> Вернуться на страницу с постами </router-link>

      <h1 class="post__title">
        {{ post?.title }}
      </h1>

      <div class="post__content">
        <p v-for="paragraph in postBody" :key="paragraph">
          {{ paragraph }}
        </p>
      </div>
    </template>

    <template #empty-content>
      <h1 class="post__title">Не удалось загрузить пост.</h1>
      <ui-button @click="$router.push('/posts')"> Вернуться к списку постов </ui-button>
    </template>
  </shared-page>
</template>

<script setup lang="ts">
import { PostPage } from "@/types/vars";
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";

const { id } = defineProps<{
  id: string;
}>();

const store = useStore();

const post = ref<PostPage | null>(null);
const loading = ref<boolean>(true);

const postBody = computed(() => post.value?.body.split("\n"));

onMounted(async () => {
  post.value = await store.dispatch("posts/fetchPostById", id, { root: true });
  loading.value = false;
});
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
