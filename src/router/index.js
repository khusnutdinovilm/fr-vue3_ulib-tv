import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/posts",
    name: "posts",
    component: () => import("@/views/posts.vue"),
  },
  {
    path: "/posts/:id",
    name: "post",
    component: () => import("@/views/post.vue"),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "",
  linkExactActiveClass: "",
});

export default router;
