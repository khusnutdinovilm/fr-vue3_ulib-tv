export default {
  namespaced: true,
  state: {
    notifications: [],
  },
  getters: {
    notifications: (s: any) => s.notifications,
    error: (s: any) => s.notification.error,
    message: (s: any) => s.notification.message,
  },
  mutations: {
    setMessage(s: any, notificationText: any) {
      s.notifications.push({
        id: Date.now(),
        type: "message",
        body: notificationText,
      });
    },

    setError(s: any, notificationText: any) {
      s.notifications.push({
        id: Date.now(),
        type: "error",
        body: notificationText,
      });
    },

    clearNotification(s: any) {
      s.notifications.splice(0, 1);
    },
  },
  actions: {
    setMessage({ commit }: any, message: any) {
      commit("setMessage", message);
      setTimeout(() => commit("clearNotification"), 3000);
    },
    setError({ commit }: any, error: any) {
      commit("setError", error);
      setTimeout(() => commit("clearNotification"), 3000);
    },
  },
};
