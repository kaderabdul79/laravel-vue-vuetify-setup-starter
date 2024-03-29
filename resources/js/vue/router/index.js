// Composables
import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue';
const routes = [
  { path: '/', component: () => import('../views/frontend/HomePage.vue') },
  { path: '/login', component: () => import('../views/Login.vue') },
  { path: '/registration', component: () => import('../views/Registration.vue') },
  { path: '/dashboard', component: () => import('../views/Dashboard.vue') },
  { path: '/logout', redirect: "/login" },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
