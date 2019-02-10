// 导入express
const express = require('express');
// 创建express应用
const app = express();
// 处理请求user路径
app.get('/user/:id/:name',(req,res)=>{
    // req.params 返回路径参数，返回一个对象
    console.log(req.params);
    // 响应
    res.send('ok');
});
// 开启监听
app.listen(3001,()=>{
    console.log('http://127.0.0.1:3001');
});