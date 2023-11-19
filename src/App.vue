<template>
  <div class="default-layout">
    <app-header class="default-layout__header" />

    <main class="default-layout__content">
      <router-view />
    </main>

    <app-footer class="default-layout__footer" />
  </div>

  <ui-notification />
</template>

<script>
import AppHeader from "@/components/header.vue";
import AppFooter from "@/components/footer.vue";

export default {
  components: {
    AppHeader,
    Notification,
    AppFooter,
  },
};
</script>

<style>
.default-layout {
  @apply flex flex-col;
  @apply h-screen min-h-screen;
}

.default-layout__content {
  @apply container mx-auto p-2 pb-5;
  @apply flex flex-col self-stretch grow;
}

.default-layout__content > div {
  @apply grow;
}
</style>
