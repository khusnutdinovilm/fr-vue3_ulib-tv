<template>
  <header class="header">
    <div class="header__wrapper">
      <router-link to="/" class="header__logo">Vue 3</router-link>
      <Navigation />
    </div>
  </header>
</template>

<script setup lang="ts">
import Navigation from "@/components/navigation.vue";
</script>

<style>
.header {
  @apply bg-sky-800;
}

.header__wrapper {
  @apply container mx-auto p-2 py-4;
  @apply flex justify-between;
}

.header__logo {
  @apply text-xl text-white font-bold;
  @apply cursor-pointer;
}
</style>
