<template>
  <div class="iphone-x">
    <div
      v-if="isImmerse && isTop"
      class="header absolute top-0 z-[9000]"
      :class="isTop ? 'bg-transparent' : ''"
    >
      <div class="notch"></div>
      <div
        class="relative w-full flex items-center justify-between mt-[30px] px-[15px] pb-[5px] border-b border-b-[#f7f7f7]"
      >
        <img :src="SearchIcon" alt="" class="w-[6%] aspect-square invert" />
        <img
          :src="LogoIcon"
          alt=""
          class="w-[20%] absolute left-[50%] -translate-x-[50%] invert"
        />
        <div
          class="flex items-center justify-between border border-[#efefef] w-[25%] rounded-full px-[4%] aspect-[2.5]"
        >
          <img :src="MoreIcon" alt="" class="w-[30%] aspect-square invert" />
          <div class="h-[50%] w-[0.8px] bg-[#efefef]"></div>
          <img :src="CloseIcon" alt="" class="w-[30%] aspect-square invert" />
        </div>
      </div>
    </div>
    <div v-else>
      <div class="notch"></div>
      <div
        class="relative w-full flex items-center justify-between mt-[30px] px-[15px] pb-[5px] border-b border-b-[#f7f7f7]"
      >
        <img :src="SearchIcon" alt="" class="w-[6%] aspect-square" />
        <img
          :src="LogoIcon"
          alt=""
          class="w-[20%] absolute left-[50%] -translate-x-[50%]"
        />
        <div
          class="flex items-center justify-between border border-[#efefef] w-[25%] rounded-full px-[4%] aspect-[2.5]"
        >
          <img :src="MoreIcon" alt="" class="w-[30%] aspect-square" />
          <div class="h-[50%] w-[0.8px] bg-[#efefef]"></div>
          <img :src="CloseIcon" alt="" class="w-[30%] aspect-square" />
        </div>
      </div>
    </div>

    <div class="flex flex-col main-body">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { onMounted, ref } from 'vue'

  import CloseIcon from '@/assets/iphone/close.png'
  import LogoIcon from '@/assets/iphone/logo.png'
  import MoreIcon from '@/assets/iphone/more.png'
  import SearchIcon from '@/assets/iphone/search.png'

  interface Props {
    isImmerse?: boolean
  }

  const props = withDefaults(defineProps<Props>(), {
    isImmerse: false,
  })

  const isTop = ref(true)

  const handleImmerse = () => {
    const mainBody = document.querySelector('.main-body')
    mainBody?.addEventListener('scroll', () => {
      if (mainBody.scrollTop > 75) {
        isTop.value = false
      } else {
        isTop.value = true
      }
    })
  }

  onMounted(() => {
    handleImmerse()
  })
</script>
<style lang="less" scoped>
  .iphone-x {
    min-height: 560px;
    overflow: hidden;
    aspect-ratio: 9/19.5;
    margin: auto;
    border: 12px solid #080808;
    border-radius: 44px;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
    position: relative;

    .notch {
      position: absolute;
      z-index: 99;
      left: calc(50% - 28%);
      top: 0;
      width: 56%;
      background: #080808;
      height: 26px;
      content: '';
      border-radius: 0 0 15px 15px;
    }

    .main-body {
      overflow-y: auto;
      height: calc(100% - 75px);
      @media screen and (max-width: 1280px) {
        height: calc(100% - 58px);
      }
      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
</style>
