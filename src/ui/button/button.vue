<template>
  <button class="btn" :class="classList" :disabled="isDisabled">
    <slot />
  </button>
</template>

<script lang="ts">
export default {
  name: "ui-button",
};
</script>

<script setup lang="ts">
import { ButtonProps } from "@/types/props";

import { computed } from "vue";

const { status, isDisabled } = withDefaults(defineProps<ButtonProps>(), {
  status: () => "primary",
});

const classList = computed(() => {
  return {
    "btn-primary": status === "primary" && !isDisabled,
    "btn-danger": status === "danger" && !isDisabled,
    daneger: true,
  };
});
</script>

<style scoped>
.btn {
  @apply p-1 px-3.5 text-white rounded-2xl;
}

.btn-primary {
  @apply bg-sky-600 hover:bg-sky-900 active:bg-sky-800;
}

.btn-danger {
  @apply bg-red-700 hover:bg-red-900 active:bg-red-800;
}

.btn:disabled,
.btn[disabled] {
  @apply bg-gray-700 cursor-default;
}
</style>
