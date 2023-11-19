<template>
  <shared-card class="post-item">
    <div class="post-item__wrapper">
      <div class="post-item__content">
        <h3 class="post-item__title">
          {{ post.title }}
        </h3>

        <div class="post-item__body">{{ postBody }}</div>
      </div>

      <div class="post-item__btn-group">
        <ui-button @click="$router.push(`/posts/${post.id}`)"> Посмотреть </ui-button>

        <ui-button status="danger" @click.prevent="$emit('deletePost', post.id)">
          Удалить
        </ui-button>
      </div>
    </div>
  </shared-card>
</template>

<script>
export default {
  components: {},
  props: {
    post: {
      type: Object,
      required: true,
    },
  },

  emits: ["deletePost"],

  computed: {
    postBody() {
      return this.post.body.slice(0, 75) + "...";
    },
  },
};
</script>

<style scoped>
.post-item {
}

.post-item__wrapper {
  @apply flex justify-between gap-2.5;
  @apply p-5;
}

.post-item__title {
  @apply mb-2;
}

.post-item__btn-group {
  @apply flex flex-col justify-center gap-2.5;
}
</style>
