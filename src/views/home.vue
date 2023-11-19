<template>
  <shared-page page-name="home" :is-empty="true">
    <template #empty-content>
      <h1 class="home__title">Страница главная пуста</h1>
      <ui-button @click="$router.push('/posts')"> На страницу с постами </ui-button>
    </template>
  </shared-page>
</template>

<style>
.home {
}

.home__title {
  @apply mb-5;
}
</style>
