<template>
  <teleport to="body">
    <div v-show="showNotification" class="notifications">
      <transition-group name="notification-item" class="notifications__wrapper" tag="div">
        <NotificationItem
          v-for="notification in notifications"
          :key="notification.id"
          :notification="notification"
        />
      </transition-group>
    </div>
  </teleport>
</template>

<script lang="ts">
export default {
  name: "ui-notification",
};
</script>

<script setup lang="ts">
import NotificationItem from "./notification-item.vue";

import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();

const notifications = computed(() => store.getters["notification/notifications"]);
const showNotification = computed(() => notifications.value.length);
</script>

<style>
.notifications {
  @apply fixed bottom-2.5 right-0;
}

.notifications__wrapper {
  @apply flex flex-col items-end gap-5;
}
</style>
