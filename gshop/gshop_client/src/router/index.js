import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Msite from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'

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

  ]
})
