
//npm install express -S 安装

const express=require('express')

//创建 web服务器
const app=express()


app.get('/user',(req,res)=>{
    console.log(req.query)

    res.send("这里返回解密内容")
})

//启动服务器

app.listen(3000,()=>{
    console.log("web服务器已启动...")

})

//在服务器输入 http://localhost:3000/user 或者 http://127.0.0.1:3000/user 都可以