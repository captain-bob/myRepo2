/* 
  包含项目多个接口请求函数的模块
  函数返回对值：promise对象
*/

import ajax from "./ajax";

const BASE_URL='/api'


// [1、根据经纬度获取位置详情](#1根据经纬度获取位置详情)
export const reqAddress = (geohash) => ajax(`${BASE_URL}/position/${geohash}`)
// [2、获取食品分类列表](#2获取食品分类列表)
export const reqcategory = () => ajax(BASE_URL+'/index_category')

// [3、根据经纬度获取商铺列表](#3根据经纬度获取商铺列表)
export const reqshoplist = (data) => ajax(BASE_URL+'/shops',data)

// [4、根据经纬度和关键字搜索商铺列表](#4根据经纬度和关键字搜索商铺列表)

// [5、获取一次性验证码](#5获取一次性验证码)

// [6、用户名密码登陆](#6用户名密码登陆)
export const reqpasswordlogin = ({name,pwd,captcha}) => ajax(BASE_URL+'/login_pwd',{name,pwd,captcha},'POST')

// [7、发送短信验证码](#7发送短信验证码)
export const reqsmscode = (phone) => ajax(BASE_URL+'/sendcode',{phone})

// [8、手机号验证码登陆](#8手机号验证码登陆)
export const reqsmslogin = (phone,code) => ajax(BASE_URL+'/login_sms',{phone,code},'POST')

// [9、根据会话获取用户信息](#9根据会话获取用户信息)
// [10、用户登出](#10用户登出)

//[11、获取商家产品信息]
export const reqshopgoods = () => ajax('/goods')

//[11、获取商家评价信息]
export const reqshopratings = () => ajax('/ratings')

//[11、获取商家详细信息]
export const reqshopinfo = () => ajax('/info')