const axios = require('axios')
const axiosInstance = axios.create({
    baseURL: 'https://api-hmugo-web.itheima.net/api/public/v1/',
    timeout: 1000,
});
//请求拦截器
axiosInstance.interceptors.request.use(function (config) {
    // 在发送请求之前做某事
    return config;
}, function (error) {
    // 用请求错误做点什么
    return Promise.reject(error);
});
// 响应拦截器
axiosInstance.interceptors.response.use(function (response) {
    //用响应数据做点什么
    return response;
}, function (error) {
    // 用响应错误做点什么
    return Promise.reject(error);
});

export default axiosInstance
