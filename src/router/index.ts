import { createRouter, createWebHashHistory, RouterOptions } from 'vue-router'
const routes: RouterOptions['routes'] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/modules/RouterExample/Home.vue'),
    meta: {
      bg: 'bg-blue-300',
    },
  },
  {
    path: '/one',
    name: 'OnePage',
    component: () => import('@/modules/RouterExample/PageOne.vue'),
    meta: {
      bg: 'bg-green-300',
    },
  },
  {
    path: '/two',
    name: 'TwoPage',
    component: () => import('@/modules/RouterExample/PageTwo.vue'),
    meta: {
      bg: 'bg-yellow-300',
    },
  },
  {
    path: '/three',
    name: 'ThreePage',
    component: () => import('@/modules/RouterExample/PageThree.vue'),
    meta: {
      bg: 'bg-slate-300',
    },
  },
  {
    path: '/drag',
    name: 'DragPage',
    component: () => import('@/modules/DragExample/pages/Index.vue'),
  },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
