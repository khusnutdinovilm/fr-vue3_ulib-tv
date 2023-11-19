<template>
  <div class="loader">
    <span class="loader__spiner" :style="spinerStyle"></span>
  </div>
</template>

<script lang="ts">
export default {
  name: "ui-loader",
};
</script>

<script setup lang="ts">
import { LoaderProps } from "@/types/props";

import { computed } from "vue";

const { size, borderWidth } = withDefaults(defineProps<LoaderProps>(), {
  borderWidth: 1,
});

const spinerStyle = computed(() => ({
  borderWidth: `${borderWidth}px`,
  width: size ? `${size}px` : "inherit",
  height: size ? `${size}px` : "inherit",
}));
</script>

<style>
.loader {
  @apply flex justify-center items-center;
}
.loader__spiner {
  @apply inline-block;
  @apply border-solid border-sky-900;
  border-radius: 50%;
  border-bottom-color: #6467e2;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
