/* 
  通过mutation 间接跟新state
*/

import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPLIST,
    RECEIVE_USERINFO,
    RECEIVE_SHOPINFO,
    RECEIVE_SHOPGOODS,
    RECEIVE_SHOPRATINGS
} from './mutation-types'

import { reqAddress, reqcategory,reqshoplist,reqshopgoods,reqshopinfo,reqshopratings } from '../api/index'

export default {

    //异步获取地址信息
    async getAddress({ commit, state }) {
        // 发送异步ajax请求
        const geohash = state.latitude + ',' + state.longitude
        const response = await reqAddress(geohash)
        //提交一个mutation
        if (response.code === 0) {
            const address = response.data.name
            console.log(address)
            commit(RECEIVE_ADDRESS, { address })
        }
    },

    //异步获取食品分类数据
    async getcategorys({ commit }) {
        // 发送异步ajax请求
        const response = await reqcategory()
        //提交一个mutation
        if (response.code === 0) {
            const categorys = response.data
            console.log(categorys)
            commit(RECEIVE_CATEGORYS, { categorys })
        }
    },

    //异步获取商家列表数据
    async getshoplist({ commit, state}) {
        // 发送异步ajax请求
        const dat={}
        dat.latitude=state.latitude
        dat.longitude=state.longitude
        
        const response = await reqshoplist(dat)
        //提交一个mutation
        if (response.code === 0) {
            const shoplist = response.data
            console.log(shoplist)
            commit(RECEIVE_SHOPLIST, { shoplist })
        }
    },

    //同步记录用户信息
    recorduserinfo({commit},userinfo) {
        commit(RECEIVE_USERINFO,{userinfo})
    },

    //异步获取商家产品信息
    async getshopgoods({commit}) {
        const response = await reqshopgoods()
        if(response.code===0) {
            console.log(response)
            const shopgoods=response.data
            commit(RECEIVE_SHOPGOODS,{shopgoods})
        }
    },

    //异步获取商家评价信息
    async getshopratings({commit}) {
        const response = await reqshopratings()
        if(response.code===0) {
            console.log(response.data)
            const shopratings=response.data
            commit(RECEIVE_SHOPRATINGS,{shopratings})
        }
    },

    //异步获取商家详细信息
    async getshopinfo({commit}) {
        const response = await reqshopinfo()
        if(response.code===0) {
            console.log(response.data)
            const shopinfo=response.data
            commit(RECEIVE_SHOPINFO,{shopinfo})
        }
    }


    
}