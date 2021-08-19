import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home.index',
    component: () => import('../components/Home/Index.vue')
  },
  {
    path: '/update/:id',
    name: 'home.update',
    component: () => import('../components/Home/Update.vue')
  },
  {
    path: '/create',
    name: 'home.create',
    component: () => import('../components/Home/Create.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
