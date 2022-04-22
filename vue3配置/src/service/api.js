import axios from './axios.config'
export function  swiperdata(par) {
    let res;
    return new Promise(async (resolve, reject)=> {
        try {
            console.log('请求开始')
            res = await axios.get('home/swiperdata', { params: par })
            resolve(res)
        } catch (error) {
            reject(error)
            console.log('请求错误')
        }
    });
    

}