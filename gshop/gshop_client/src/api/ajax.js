/* 
ajax请求模块 
返回值：promise对象(异步返回的数据是：response.data)
*/

import axios from 'axios'

export default function ajax(url,data = {},type = 'GET') {
    return new Promise(function(resolve,reject) {
        let promise;
        if(type==='GET') {
            // 准备url参数数据
            let dataurl = '' //数据拼接字符串
            Object.keys(data).forEach(item => {
                dataurl += item + '=' + data[item] +'&';
                // debugger
            })
            if(dataurl!=='') {
                dataurl = dataurl.substring(0,dataurl.lastIndexOf('&'));
                url = url + '?' +dataurl
                
            }
            //发送get请求
            promise = axios.get(url)
        }else {
            //发送post请求
            promise = axios.post(url,data)
        }
        promise.then(res => {
            //请求成功,调用resolve()
            resolve(res.data);
        }).catch(err => {
            //请求失败，调用reject()
            reject(err);
        })
    })
}