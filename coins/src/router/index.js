import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import CoinDetails from '../components/CoinDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      component: Home,
      alias: '/'
    },
    {
        path: '/coindetails/:coinId?',
        name: 'CoinDetails',
        component: CoinDetails
    }
  ]
})

export default router
