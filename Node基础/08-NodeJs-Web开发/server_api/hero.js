// 导入express包
const express = require('express');
// 创建应用程序
const app = express();
// 导入cors跨越资源共享
const cors = require('cors');
// 应用cors
app.use(cors());
// 导入body-parser应用包处理post请求
const bodyParser = require('body-parser');
// 应用中间件处理post请求
app.use(bodyParser.urlencoded({ extended: false }));
// 导入路由模块
const router = require('./router.js');
// 应用中间件处理路由模块
app.use(router);
// 开启监听
app.listen(5000, () => {
    console.log('http://127.0.0.1:5000');
});