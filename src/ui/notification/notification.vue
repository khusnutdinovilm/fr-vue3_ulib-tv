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

<script>
import { mapGetters } from "vuex";
import NotificationItem from "./notification-item.vue";

export default {
  name: "ui-notification",
  components: { NotificationItem },
  computed: {
    ...mapGetters({
      notifications: "notification/notifications",
      error: "notification/error",
      message: "notification/message",
    }),

    showNotification() {
      return this.notifications.length;
    },

    notificationMsg() {
      return this.error ? this.error : this.message;
    },
  },
};
</script>

<style>
.notifications {
  @apply fixed bottom-2.5 right-0;
}

.notifications__wrapper {
  @apply flex flex-col items-end gap-5;
}
</style>
