<template>
  <div class="card">
    <slot />
  </div>
</template>

<script>
export default {
  name: "shared-card",
};
</script>

<style scoped>
.card {
  @apply shadow-xl bg-gray-200 rounded-xl;
}
</style>
