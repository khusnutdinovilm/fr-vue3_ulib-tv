import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/users";
export default {
  namespaced: true,
  state: {
    user: null,
  },
  getters: {
    user: (s) => s.user,
  },
  mutations: {
    setUser: (s, user) => (s.user = user),
  },
  actions: {
    async fetchUserById({ commit }, id) {
      const { data: user } = await axios.get(`${url}/${id}`);
      return user;
    },
  },
};
