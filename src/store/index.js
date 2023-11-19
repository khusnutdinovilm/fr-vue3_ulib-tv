import { createStore } from "vuex";

import notification from "./modules/notification";
import posts from "./modules/posts";
import users from "./modules/users";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    notification,
    posts,
    users,
  },
});
