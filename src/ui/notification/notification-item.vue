<template>
  <span class="notification-item" :class="classList"> {{ notification.body }}</span>
</template>

<script lang="ts">
export default {
  name: "ui-notification-item",
};
</script>

<script setup lang="ts">
import { NotificationProps } from "@/types/props";

import { computed } from "vue";

const props = defineProps<NotificationProps>();

const classList = computed(() => ({
  "notification-item_error": props.notification.type === "error",
  "notification-item_message": props.notification.type === "message",
}));
</script>

<style>
.notification-item {
  @apply inline-block;
  @apply p-2 mr-2.5 rounded;
  @apply text-white font-bold;
  @apply duration-500 ease-out;
}

.notification-item_message {
  @apply bg-sky-700;
}

.notification-item_error {
  @apply bg-red-700;
}

.notification-item-enter-from,
.notification-item-leave-to {
  @apply -mr-2.5 translate-x-full;
}

.notification-item-enter-active,
.notification-item-leave-active {
  @apply duration-500 ease-out;
}

.notification-item-enter-to,
.notification-item-leave-from {
  @apply translate-x-0;
}
</style>
