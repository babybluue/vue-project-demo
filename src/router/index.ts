import { createRouter, createWebHashHistory, RouterOptions } from 'vue-router'
const routes: RouterOptions['routes'] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/Home.vue'),
  },
  {
    path: '/one',
    name: 'OnePage',
    component: () => import('../pages/PageOne.vue'),
  },
  {
    path: '/two',
    name: 'TwoPage',
    component: () => import('../pages/PageTwo.vue'),
  },
  {
    path: '/three',
    name: 'ThreePage',
    component: () => import('../pages/PageThree.vue'),
  },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
