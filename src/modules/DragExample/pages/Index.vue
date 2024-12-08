<template>
  <div class="flex">
    <div class="flex-1">
      <draggable
        :list="homePageTypeOptions"
        :group="{ name: 'option', pull: 'clone', put: false }"
        :sort="false"
        item-key="name"
        draggable=".item"
      >
        <template #item="{ element: item }">
          <div
            class="flex flex-col items-center"
            :class="item.type === HomePageContentType.TOP_VEDIO ? '' : 'item'"
          >
            <div
              class="w-[80px] h-[80px] rounded-[16px] overflow-hidden bg-white border-[3px] group hover:border-[#309bff] relative"
            >
              <img :src="item.thumbnail" alt="" />
              <img
                :src="IconDrag"
                alt=""
                class="w-[12px] h-[12px] absolute top-2 right-2 invisible group-hover:visible"
              />
            </div>
            <span class="text-[12px] font-bold mb-4">{{ item.name }}</span>
          </div>
        </template>
      </draggable>
    </div>

    <AppIphone class="flex-1">
      <template #default>
        <draggable
          :list="contentList"
          group="option"
          :sort="false"
          item-key="id"
          draggable=".custom-page"
          class="h-full"
          @change="handlePut"
        >
          <template #item="{ element: page, index }">
            <div @click="handleEdit(index)" @dragstart.prevent="">
              <!-- 首页视频 -->
              <template v-if="page.type === HomePageContentType.TOP_VEDIO">
                <div
                  v-if="page.carousel.length"
                  class="w-full h-full p-1 relative"
                ></div>
                <div
                  v-else
                  class="flex justify-center items-center w-full bg-[#C4D5E5] rounded-[16px] text-[15px] min-h-[300px]"
                >
                  点击编辑{{ page.name }}
                </div>
              </template>

              <!-- 热点图 -->
              <template v-if="page.type === HomePageContentType.HOT_SPOT_VIEW">
                <div
                  v-if="page.title"
                  ref="container"
                  class="w-full px-2 overflow-hidden pb-1 product-list"
                >
                  <div class="p-3">
                    <h1 class="text-[16px] font-bold mb-[30px]">
                      {{ page.title }}
                    </h1>
                    <div class="font-bold whitespace-pre-wrap break-words">
                      {{ page.description }}
                    </div>
                  </div>
                </div>
                <div
                  v-else
                  class="flex justify-center items-center w-full bg-[#C4D5E5] rounded-[16px] text-[15px] min-h-[300px]"
                >
                  点击编辑{{ page.name }}
                </div>
              </template>

              <!-- 图片广告 -->
              <template v-if="page.type === HomePageContentType.IMG_AD">
                <div
                  v-if="page.img"
                  class="w-full relative overflow-hidden rounded-[10px]"
                >
                  <img :src="page.img" alt="" class="w-full" />
                  <div class="banner-title">
                    <span>{{ page.subTitle }}</span>
                    <span class="text-[16px] whitespace-nowrap">{{
                      page.title
                    }}</span>
                  </div>

                  <span
                    class="learn-more absolute left-1/2 -translate-x-1/2 bottom-[20px]"
                    >了解更多</span
                  >
                </div>
                <div
                  v-else
                  class="flex justify-center items-center w-full bg-[#C4D5E5] rounded-[16px] text-[15px] min-h-[300px]"
                >
                  点击编辑{{ page.name }}
                </div>
              </template>

              <!-- 商品列表 -->
              <template v-if="page.type === HomePageContentType.PRODUCT_LIST">
                <div
                  v-if="page.categoryAndProducts?.length"
                  class="px-2 pb-1 w-full product-list"
                >
                  <div class="p-3">
                    <h1 class="text-[16px] font-bold mb-[30px]">
                      {{ page.title }}
                    </h1>
                    <div class="font-bold whitespace-pre-wrap break-words">
                      {{ page.description }}
                    </div>
                  </div>
                  <div
                    class="flex gap-3 pl-3 pb-3 relative z-[1000] overflow-x-auto"
                  >
                    <div
                      v-for="(productItem, idx) in page.categoryAndProducts"
                      :key="idx + productItem.categoryId"
                      :class="{
                        'px-4 py-1 border rounded-full whitespace-nowrap':
                          productItem.tagName,
                        'bg-black text-white':
                          page.selectedIndex == idx && productItem.tagName,
                      }"
                      @click.stop="page.selectedIndex = idx"
                    >
                      {{ productItem.tagName }}
                    </div>
                  </div>
                  <div
                    v-for="(productItem, idx) in page.categoryAndProducts"
                    :key="idx + productItem.categoryId"
                  ></div>
                </div>
                <div
                  v-else
                  class="flex justify-center items-center w-full bg-[#DFEAF5] text-[15px] min-h-[300px]"
                >
                  点击编辑{{ page.name }}
                </div>
              </template>
              <!-- 查看全部 -->
              <div
                v-if="page.type === HomePageContentType.SHOW_ALL"
                class="flex flex-col justify-center items-center w-full border rounded-[180px] border-[#000] aspect-[1.3]"
              >
                <span class="font-bold">查看全部</span>
                <span class="font-bold">{{ page.title }}</span>
              </div>

              <ul
                v-if="
                  editingIndex === index &&
                  page.type !== HomePageContentType.TOP_VEDIO
                "
                class="operation-area"
              >
                <li class="group" @click.stop="handleUp">
                  <img :src="ArrowUpIcon" class="group-hover:hidden" alt="" />
                  <img
                    :src="ArrowUpHoverIcon"
                    class="hidden group-hover:inline-block"
                    alt=""
                  />
                </li>
                <li class="group" @click.stop="handleDown">
                  <img :src="ArrowDownIcon" class="group-hover:hidden" alt="" />
                  <img
                    :src="ArrowDownHoverIcon"
                    class="hidden group-hover:inline-block"
                  />
                </li>
                <li class="group" @click.stop="handleDelete">
                  <img :src="TrashIcon" class="group-hover:hidden" alt="" />
                  <img
                    :src="TrashHoverIcon"
                    alt=""
                    class="hidden group-hover:inline-block"
                  />
                </li>
              </ul>
            </div>
          </template>
        </draggable>
      </template>
    </AppIphone>
  </div>
</template>
<script lang="ts" setup>
  import { computed, reactive, ref, watch } from 'vue'
  import draggable from 'vuedraggable-es'
  import IconDrag from '@/assets/drag/drag.png'
  import ArrowDownIcon from '@/assets/iphone/arrow_down.png'
  import ArrowDownHoverIcon from '@/assets/iphone/arrow_down_hover.png'
  import ArrowUpIcon from '@/assets/iphone/arrow_up.png'
  import ArrowUpHoverIcon from '@/assets/iphone/arrow_up_hover.png'
  import TrashIcon from '@/assets/iphone/trash.png'
  import TrashHoverIcon from '@/assets/iphone/trash_hover.png'
  import AppIphone from '@/components/AppIphone.vue'
  import {
    HomePageContentType,
    homePageTypeOptions,
  } from '../composables/home-page-type-options'

  const contentList = ref<any[]>([])

  const editingIndex = ref(-1)

  const isDelete = ref(false)

  const handleEdit = (index: number) => {
    editingIndex.value = index
  }

  const handlePut = async (e: {
    added: { element: { type: HomePageContentType }; newIndex: number }
  }) => {
    if (e.added) {
      if (e.added.newIndex === 0) return
      contentList.value[e.added.newIndex].title = ''
      contentList.value[e.added.newIndex].subTitle = ''
      contentList.value[e.added.newIndex].img = ''
      contentList.value[e.added.newIndex].description = ''
      contentList.value[e.added.newIndex].categoryAndProducts = []
    }
  }

  const handleUp = async () => {
    const content = contentList.value[editingIndex.value]
    if (editingIndex.value === 1) return
    if (!content.id) {
      if (editingIndex.value === 0) return
      contentList.value.splice(editingIndex.value, 1)
      contentList.value.splice(editingIndex.value - 1, 0, content)
      editingIndex.value = -1
      return
    }
  }

  const handleDown = async () => {
    const content = contentList.value[editingIndex.value]
    if (!content.id) {
      if (editingIndex.value === contentList.value.length - 1) return
      contentList.value.splice(editingIndex.value, 1)
      contentList.value.splice(editingIndex.value + 1, 0, content)
      editingIndex.value = -1
      return
    }
  }

  const handleDelete = () => {
    isDelete.value = true
  }
</script>
<style lang="less" scoped>
  .custom-page {
    position: relative;
    display: flex;
    cursor: pointer;
    border-radius: 16px;
    * {
      user-select: none;
    }
  }

  .operation-area {
    background-color: #000000d0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 42px;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    padding: 15px 0;
    border-radius: 0 6px 6px 0;
    z-index: 1001;
    img {
      height: 24px;
      width: 24px;
    }
  }

  .editing-content {
    position: relative;
    &::after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 999;
      border: 3px solid #309bff;
      background-color: rgba(48, 155, 255, 0.1);
    }
  }
</style>
