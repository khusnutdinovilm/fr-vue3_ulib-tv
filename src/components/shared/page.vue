<template>
  <div class="page" :class="pageName">
    <div v-if="loading" class="page__loading" :class="classes.loading">
      <ui-loader :size="100" :border-width="5" />
    </div>

    <div v-else-if="isEmpty" class="page__empty" :class="classes.empty">
      <slot name="empty-content" />
    </div>

    <div v-else class="page__wrapper" :class="classes.content">
      <slot name="content" />
    </div>
  </div>
</template>

<script>
export default {
  name: "shared-page",
  props: {
    loading: {
      type: Boolean,
      required: false,
      default: false,
    },
    isEmpty: {
      type: Boolean,
      required: false,
      default: false,
    },
    pageName: {
      type: String,
      required: true,
    },
  },
  computed: {
    classes() {
      return {
        loading: `${this.pageName}__loading`,
        empty: `${this.pageName}__empty`,
        content: `${this.pageName}__wrapper`,
      };
    },
  },
};
</script>

<style scoped>
.page {
  @apply flex flex-col gap-2.5;
}

.page__loading,
.page__empty,
.page__wrapper {
  @apply flex flex-col grow;
}
.page__loading,
.page__empty {
  @apply justify-center items-center;
}
</style>
