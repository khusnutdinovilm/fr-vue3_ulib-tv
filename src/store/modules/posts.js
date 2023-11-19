import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/posts";

export default {
  namespaced: true,

  state: {
    posts: [],
    page: 1,
    limit: 10,
  },
  getters: {
    posts: (s) => s.posts,
    page: (s) => s.page,
    limit: (s) => s.limit,
  },
  mutations: {
    setPosts: (s, posts) => (s.posts = posts),
    pushNewPosts: (s, newPosts) => (s.posts = [...s.posts, ...newPosts]),
    addPost: (s, newPost) => (s.posts = [newPost, ...s.posts]),
    deletePost: (s, id) => {
      let idx = s.posts.findIndex((post) => post.id === id);
      s.posts.splice(idx, 1);
    },
    updatePage: (s) => s.page++,
  },
  actions: {
    async fetchPosts({ getters, commit }, page) {
      try {
        if (!getters.posts.length) {
          const { data: posts } = await axios.get(url, {
            params: {
              _page: getters.page,
              _limit: getters.limit,
            },
          });

          commit("setPosts", posts);
        }
      } catch (error) {
        dispatch("notification/setError", "[Unkown error]: не удалось загрузить посты", {
          root: true,
        });
      }
    },

    async fetchMorePosts({ getters, commit }) {
      try {
        commit("updatePage");

        const { data: newPosts } = await axios.get(url, {
          params: {
            _page: getters.page,
            _limit: getters.limit,
          },
        });

        commit("pushNewPosts", newPosts);
      } catch (error) {
        dispatch("notification/setError", "[Unkown error]: не удалось загрузить посты", {
          root: true,
        });
      }
    },

    async fetchPostById({ dispatch }, id) {
      try {
        const { data: post } = await axios.get(`${url}/${id}`);

        const user = await dispatch("users/fetchUserById", post.userId, { root: true });

        post.body = post.body
          .split("\n")
          .map((paragraph) => {
            return `${paragraph} `.repeat(50);
          })
          .join("\n");

        return {
          id: post.id,
          title: post.title,
          body: post.body,
          user: {
            id: user.id,
            name: user.name,
          },
        };
      } catch (error) {
        dispatch("notification/setError", "[Unkown error]: не удалось получить данные о посте", {
          root: true,
        });
      }
    },

    async addPost({ commit, dispatch }, newPost) {
      try {
        const response = await axios.post(url, newPost);

        commit("addPost", response.data);

        dispatch("notification/setMessage", "Пост успешно добавлен", { root: true });
      } catch (error) {
        dispatch("notification/setError", "[Unkown error]: не удалось добавить пост", {
          root: true,
        });
      }
    },

    async deletePostById({ commit, dispatch }, id) {
      try {
        await axios.delete(`${url}/${id}`);

        commit("deletePost", id);

        dispatch("notification/setMessage", "Пост успешно удален", { root: true });
      } catch (error) {
        dispatch("notification/setError", "[Unkown error]: не удалось удалить пост", {
          root: true,
        });
      }
    },
  },
};
