import '@/scss/public.scss'
const axios = require('axios').default;
import { $axios } from './axios.config'
console.log($axios,'查看')
const tips = `我是ES6字符串2222`
let str = `${tips}拼接一下`
console.log(str,'查看所凭借的2')
let md5 = `-----BEGIN PUBLIC KEY----- MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAOK4ZTUyywv2Tx9FZWiiHunjpwFruNiv kXb1PLObU4AgTtnvf+Zi4oOxD5lnAL63E6bzrH9f5DoLjnFT6F1fbfUCAwEAAQ== -----END PUBLIC KEY-----`
let promise = new Promise(function (resolve, reject) {
    // 当 promise 被构造完成时，自动执行此函数
    // 1 秒后发出工作已经被完成的信号，并带有结果 "done"
    setTimeout(() => resolve("done"), 1000);
});
$axios.get('home/swiperdata')
.then(res => {
    console.log(res,'数据')
})
.catch(err => {
    console.error(err,'错误'); 
})