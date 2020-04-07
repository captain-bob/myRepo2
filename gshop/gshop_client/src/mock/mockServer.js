/**
 * 使用mock.js提供mock数据接口
 */

import Mock from 'mockjs'
import data from './data.json'

//返回/goods接口数据
Mock.mock('/goods',{code:0,data:data.goods})

//返回/rating接口数据
Mock.mock('/ratings',{code:0,data:data.ratings})

//返回/info接口数据
Mock.mock('/info',{code:0,data:data.info})