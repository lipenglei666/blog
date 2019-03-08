// 导入express
const express = require('express');
// 导入fs
const fs = require('fs');
// 导入path
const path = require('path');
// 创建服务器应用程序
const app = express();
// 导入cors跨域资源共享包
const cors = require('cors');
// 应用cors处理跨域请求处理
app.use(cors());
// 导入body-parser包
const bodyParser = require('body-parser');
// 应用body-parser中间件处理post请求
app.use(bodyParser.urlencoded({extended:false}));
// 导入所有的路由模块
fs.readdir(path.join(__dirname,'router'),(err,files)=>{
  if(err) return err.message;
  files.forEach(value=>{
    let router = require(`./router/${value}`);
    app.use(router);
  });
})
// 开启监听
app.listen(5000,()=>{
  console.log('http://127.0.0.1:5000');
});
