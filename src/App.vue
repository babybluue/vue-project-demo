<script setup lang="ts">
  import { useRoute, useRouter } from 'vue-router'

  const router = useRouter()
  const route = useRoute()

  const links = [
    {
      name: 'OnePage',
    },
    {
      name: 'TwoPage',
    },
    {
      name: 'ThreePage',
    },
  ]

  const handleRoute = (name: string) => {
    router.push({ name })
  }
</script>

<template>
  <div class="flex flex-col h-screen">
    <div class="flex justify-center">
      <a href="https://vite.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>
    <div class="flex justify-center gap-[10px] py-[20px]">
      <span
        v-for="item in links"
        :key="item.name"
        class="cursor-pointer text-blue-600"
        @click="handleRoute(item.name)"
        >{{ item.name }}</span
      >
    </div>
    <div
      class="bg-yellow-200 flex-1 flex justify-center py-[100px]"
      :class="route.meta.bg"
    >
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
</style>
