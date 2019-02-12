// 导入express
const express = require('express');
// 创建应用
const app = express();
// 导入fs
const fs = require('fs');
// 导入path
const path = require('path');
// 导入session
const session = require('express-session');
// 注册中间件session
app.use(session({
    secret: 'keyboard cat', // 相当于是一个加密密钥，值可以是任意字符串
    resave: false, // 强制session保存到session store中
    saveUninitialized: false // 强制没有“初始化”的session保存到storage中
  }));
// 导入body-parser
const bodyParser = require('body-parser');
// 注册解析post请求参数的中间件
app.use(bodyParser.urlencoded({ extended: false }));
// 开启模版引擎
app.set('view engine', 'ejs');
// 设置模版引擎路径
app.set('views', './views');
// 托管node_modules
app.use('/node_modules', express.static('./node_modules'))

// 循环导入并使用router文件中的路由
fs.readdir(path.join(__dirname,'router'),(err,files)=>{
    if(err) {
        return err.message;
    }
    files.forEach(fileName=>{
        // 导入路由
        let router = require('./router/' + fileName);
        // 使用路由
        app.use(router);
    });
});

// 启动监听
app.listen(3000, () => {
    console.log('http://127.0.0.1:3000');
})