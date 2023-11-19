export default {
  namespaced: true,
  state: {
    notifications: [],
    notification: {
      error: "",
      message: "",
    },
    errorMap: {},
  },
  getters: {
    notifications: (s) => s.notifications,
    error: (s) => s.notification.error,
    message: (s) => s.notification.message,
  },
  mutations: {
    setMessage(s, notificationText) {
      s.notifications.push({
        id: Date.now(),
        type: "message",
        body: notificationText,
      });
    },

    setError(s, notificationText) {
      s.notifications.push({
        id: Date.now(),
        type: "error",
        body: notificationText,
      });
    },

    clearNotification(s) {
      s.notifications.splice(0, 1);
    },
  },
  actions: {
    setMessage({ commit }, message) {
      commit("setMessage", message);
      setTimeout(() => commit("clearNotification"), 3000);
    },
    setError({ commit }, error) {
      commit("setError", error);
      setTimeout(() => commit("clearNotification"), 3000);
    },
  },
};
