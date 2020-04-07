/* 
  直接跟新state的对个对象
*/

import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPLIST,
    RECEIVE_USERINFO,
    RECEIVE_SHOPGOODS,
    RECEIVE_SHOPINFO,
    RECEIVE_SHOPRATINGS
} from './mutation-types'

export default {
  [RECEIVE_ADDRESS](state,{address}) {
    state.address = address //地址
    console.log(address)
    console.log(state)
  },
  [RECEIVE_CATEGORYS](state,{categorys}) {
    state.categorys = categorys //食品分类
  },
  [RECEIVE_SHOPLIST](state,{shoplist}) {
    state.shoplist = shoplist //商家列表
  },
  [RECEIVE_USERINFO](state,{userinfo}) {
    state.userinfo = userinfo //用户信息
  },
  [RECEIVE_SHOPGOODS](state,{shopgoods}) {
    state.goods = shopgoods //商家产品信息
  },
  [RECEIVE_SHOPRATINGS](state,{shopratings}) {
    state.ratings = shopratings //商家评价信息
    // debugger
  },
  [RECEIVE_SHOPINFO](state,{shopinfo}) {
    state.info = shopinfo //商家详细信息
  },
}