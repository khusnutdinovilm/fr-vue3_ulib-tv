<template>
  <nav class="navigation">
    <ul class="navigation__menu">
      <router-link
        v-for="navItem in navItems"
        :key="navItem.id"
        class="navigation__link"
        :to="navItem.to"
        active-class="navigation__link_active"
        exact-active-class="navigation__link_active"
      >
        <li>
          {{ navItem.title }}
        </li>
      </router-link>
    </ul>
  </nav>
</template>

<script>
export default {
  data: () => ({
    navItems: [
      { id: 0, title: "Главная", to: "/" },
      { id: 1, title: "Посты", to: "/posts" },
      // { id: 2, title: "Пользователи", to: "/users" },
    ],
  }),
};
</script>

<style scoped>
.navigation {
}

.navigation__menu {
  @apply flex gap-2.5;
}

.navigation__link {
  @apply p-1 px-3 cursor-pointer;
  @apply bg-white hover:bg-gray-500;
}

.navigation__link_active {
  @apply text-white bg-gray-500;
}
</style>
