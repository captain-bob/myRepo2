/* 
  直接跟新state的对个对象
*/

import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPLIST,
    RECEIVE_USERINFO
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
  }
}