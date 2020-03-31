import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import Msite from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'
import Shop from '../pages/Shop/Shop.vue'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods.vue'
import ShopRating from '../pages/Shop/ShopRating/ShopRating.vue'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Msite',
      redirect: '/msite'
    },
    {
      path: '/msite',
      name: 'Msite',
      component: Msite,
      meta: {
        showBottom:true
      }
    },
    {
      path:'/search',
      name: 'Search',
      component: Search,
      meta: {
        showBottom:true
      }
    },
    {
      path: '/order',
      name: '/Order',
      component: Order,
      meta: {
        showBottom:true
      }
    },
    {
      path: '/profile',
      name: '/Profile',
      component: Profile,
      meta: {
        showBottom:true
      }
    },
    {
      path: '/login',
      name: '/login',
      component: Login,
      meta: {
        showBottom:false
      }
    },
    {
      path: '/shop',
      name: '/shop',
      component: Shop,
      meta: {
        showBottom:false
      },
      children: [
        {
          path: 'goods',
          name: '/goods',
          component: ShopGoods,
        },
        {
          path: 'rating',
          name: '/rating',
          component: ShopRating,
        },
        {
          path: 'info',
          name: '/info',
          component: ShopInfo,
        },
        {
          path: '/',
          redirect: '/shop/goods'
        }
      ]
    },

  ]
})
