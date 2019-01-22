// 导入express包
const express = require('express');

// 创建服务器实例
const app = express();

// 监听请求
app.get('/',(req,res)=>{
    res.send('你好，世界');
});

// 启动服务
app.listen(4000,()=>{
    console.log('http://127.0.0.1:4000');
})