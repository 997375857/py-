//npm install axios -s
const axios = require("axios");


//请求拦截器
axios.interceptors.request.use(参数 => {
    //如果拦截成功则执行当前这个函数作用域内部代码
    console.log("请求拦截被执行")
    参数.headers['user-Agent']="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36"
    return 参数;

}),function(error){
 //如果拦截失败则执行当前这个函数作用域内部代码
    console.log("拦截失败")
    return Promise.reject(error);
}


//响应拦截器
axios.interceptors.response.use(参数 => {
    //如果拦截成功则执行当前这个函数作用域内部代码
    console.log("响应被拦截...")
    return 参数;


}),function(error){
 //如果拦截失败则执行当前这个函数作用域内部代码
    console.log("响应拦截失败")
    return Promise.reject(error);

}

axios.get("http://httpbin.org/get").then( res => {console.log(res.data)}).catch(error => {console.log(error)})