import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '@/views/store.vue'
import cart from '@/views/ShoppingCart.vue'
import pay from '@/views/ShoppingPay.vue'
import information from '@/views/shoppingInformation.vue'
import success from '@/views/shoppingSuccess.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/store',
      name: 'store',
      component: store
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/pay',
      name: 'pay',
      component: pay
    },
    {
      path: '/information',
      name: 'information',
      component: information
    },
    {
      path: '/success',
      name: 'success',
      component: success
    },
  ]
})

export default router
