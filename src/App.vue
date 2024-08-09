<script>
import { RouterLink, RouterView } from 'vue-router'
import HomeView from './views/HomeView.vue';
export default {
  components: {
    HomeView,
  },
  warch: {
    // 監聽路由，當路由改變時，動態的去改變title
    $route(to) {
      document.title = to.meta.title || 'Shopping Cart'
    },
  },
};
</script>

<template>
  <RouterView></RouterView>
</template>


