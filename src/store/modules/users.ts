import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/users";
export default {
  namespaced: true,
  state: {
    user: null,
  },
  getters: {
    user: (s: any) => s.user,
  },
  mutations: {
    setUser: (s: any, user: any) => (s.user = user),
  },
  actions: {
    async fetchUserById({}, id: any) {
      const { data: user } = await axios.get(`${url}/${id}`);
      return user;
    },
  },
};
