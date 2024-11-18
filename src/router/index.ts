import { createRouter, createWebHashHistory, RouterOptions } from 'vue-router'
const routes: RouterOptions['routes'] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/Home.vue'),
    meta: {
      bg: 'bg-blue-300',
    },
  },
  {
    path: '/one',
    name: 'OnePage',
    component: () => import('../pages/PageOne.vue'),
    meta: {
      bg: 'bg-green-300',
    },
  },
  {
    path: '/two',
    name: 'TwoPage',
    component: () => import('../pages/PageTwo.vue'),
    meta: {
      bg: 'bg-yellow-300',
    },
  },
  {
    path: '/three',
    name: 'ThreePage',
    component: () => import('../pages/PageThree.vue'),
    meta: {
      bg: 'bg-slate-300',
    },
  },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
