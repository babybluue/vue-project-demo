import ComponentAImg from '@/assets/drag/component_1.png'
import ComponentBImg from '@/assets/drag/component_2.png'
import ComponentCImg from '@/assets/drag/component_3.png'
import ComponentDImg from '@/assets/drag/component_4.png'
import ComponentEImg from '@/assets/drag/component_5.png'

export enum HomePageContentType {
  TOP_VEDIO = 'TOP_VEDIO',
  HOT_SPOT_VIEW = 'HOT_SPOT_VIEW',
  IMG_AD = 'IMG_AD',
  PRODUCT_LIST = 'PRODUCT_LIST',
  SHOW_ALL = 'SHOW_ALL',
}

export const homePageTypeOptions = [
  {
    type: HomePageContentType.TOP_VEDIO,
    name: '首屏视频',
    thumbnail: ComponentEImg,
  },
  {
    type: HomePageContentType.HOT_SPOT_VIEW,
    name: '热区',
    thumbnail: ComponentDImg,
  },
  {
    type: HomePageContentType.IMG_AD,
    name: '图片广告',
    thumbnail: ComponentAImg,
  },
  {
    type: HomePageContentType.PRODUCT_LIST,
    name: '商品列表',
    thumbnail: ComponentBImg,
    categoryAndProducts: [],
    selectedIndex: 0,
  },
  {
    type: HomePageContentType.SHOW_ALL,
    name: '查看全部',
    thumbnail: ComponentCImg,
  },
]
