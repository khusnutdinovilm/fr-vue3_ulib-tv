<template>
  <div class="card">
    <slot />
  </div>
</template>

<script lang="ts">
export default {
  name: "shared-card",
};
</script>

<style scoped>
.card {
  @apply shadow-xl bg-gray-200 rounded-xl;
}
</style>
