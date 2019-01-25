const express = require('express');
const app = express();
// 导入路由对象
const router = require('./08-router.js');
// 安装路由模块
app.use(router);
// 启动监听
app.listen(8888,()=>{
    console.log('http://127.0.0.1:8888');
});
