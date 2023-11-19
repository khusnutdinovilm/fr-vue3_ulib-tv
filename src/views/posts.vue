<template>
  <shared-page page-name="posts" :loading="loading" :is-empty="!posts.length">
    <template #content>
      <h1 class="posts__title">Список постов</h1>

      <div class="posts__filter">
        <ui-input v-model="searchQuery" placeholder="Поиск поста" />

        <div class="posts__btn-group">
          <ui-button @click="showModal = true"> Создать пост </ui-button>
          <ui-select v-model="selectedSort" :options="sortOptions" />
        </div>
      </div>

      <div class="posts__list">
        <transition-group name="posts-list">
          <PostsItem
            v-for="post in filterdAndSearchedPosts"
            :key="post.id"
            :post="post"
            @delete-post="deletePost"
          />
        </transition-group>
      </div>

      <div class="observer" v-intersection="fetchMorePosts"></div>
    </template>

    <template #empty-content>
      <h2 class="posts__title text-center">Список постов пуст</h2>
      <ui-button @click="showModal = true"> Создать пост </ui-button>
    </template>
  </shared-page>

  <ui-modal v-model:show-modal="showModal">
    <PostsForm @add-new-post="addNewPost" />
  </ui-modal>
</template>

<script setup lang="ts">
import { Post, NewPost, SelectOptions } from "@/types/vars";

import PostsForm from "@/components/posts/add-form.vue";
import PostsItem from "@/components/posts/item.vue";

import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const posts = computed(() => store.getters["posts/posts"]);

const loading = ref<boolean>(true);
const showModal = ref<boolean>(false);
const searchQuery = ref<string>("");
const selectedSort = ref<string>("");
const sortOptions = ref<SelectOptions[]>([
  { value: "title", title: "По названию" },
  { value: "body", title: "По содержимому" },
]);

onMounted(async () => {
  await store.dispatch("posts/fetchPosts");
  loading.value = false;
});

const fetchMorePosts = async () => {
  await store.dispatch("posts/fetchMorePosts");
};

const addNewPost = async (newPost: NewPost) => {
  await store.dispatch("posts/addPost", newPost);
  showModal.value = false;
};

const deletePost = async (postId: number) => {
  await store.dispatch("posts/deletePostById", postId);
};

const sortedPosts = computed(() =>
  [...posts.value].sort((post1, post2) =>
    post1[selectedSort.value]?.localeCompare(post2[selectedSort.value])
  )
);

const filterdAndSearchedPosts = computed(() =>
  sortedPosts.value.filter((post: Post) => post.title.toLowerCase().includes(searchQuery.value))
);
</script>

<style>
.posts {
}

.posts__wrapper {
  @apply flex flex-col gap-2.5;
}

.posts__filter {
  @apply flex flex-col gap-2.5;
  @apply mb-2.5;
}

.posts__title {
  @apply mb-2;
}

.posts__btn-group {
  @apply flex justify-between;
}

.posts__list {
  @apply flex flex-col gap-5;
}

.posts-list-item {
  display: inline-block;
  margin-right: 10px;
}
.posts-list-enter-active,
.posts-list-leave-active {
  transition: all 0.5s ease;
}
.posts-list-enter-from,
.posts-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.posts-list-move {
  transition: transform 0.8s ease;
}
</style>
