<template>
  <form class="post-form form" @submit.prevent>
    <div class="post-form__wrapper">
      <h2 class="post-form__title">Создание поста</h2>

      <ui-input v-focus v-model="post.title" placeholder="Введите заголовок поста" />

      <ui-input v-model="post.body" placeholder="Введите описание поста" />

      <ui-button
        class="post-form__button"
        :disabled="!isFormValid"
        @click="$emit('addNewPost', post)"
      >
        Создать пост
      </ui-button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { NewPost } from "@/types/vars";

import { computed, ref } from "vue";

const post = ref<NewPost>({
  title: "",
  body: "",
});

defineEmits<{
  (e: "addNewPost", post: NewPost): void;
}>();

const isFormValid = computed(() => {
  const isPostTitleValid = post.value.title !== "";
  const isPostBodyValid = post.value.body !== "";

  return isPostTitleValid && isPostBodyValid;
});
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
