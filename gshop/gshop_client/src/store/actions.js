/* 
  通过mutation 间接跟新state
*/

import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPLIST
} from './mutation-types'

import {reqAddress} from '../api/index'

export default {

    //异步获取地址信息
   async getAddress({commit,state}) {
       // 发送异步ajax请求
      const geohash = state.latitude+','+state.longitude
      const response = await reqAddress(geohash)
      //提交一个mutation
      if(response.code===0) {
          const address = response.data
          commit(RECEIVE_ADDRESS,{address})
      }
   } 
}