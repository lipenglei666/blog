// 导入express包
const express = require('express');
// 导入body-parser第三方中间件处理post请求
const bodyParser = require('body-parser');
// 创建express应用程序
const app = express();
// 使用express内置的static中间件托管静态页面
app.use(express.static('./views'));
// 注册中间件body-parser
app.use(bodyParser.urlencoded({extended:false}));
// 处理请求user
app.post('/user',(req,res)=>{
    console.log(req.body);
    console.log(req.body.name);
    res.send('ok');
});

// 开启监听
app.listen(3001,()=>{
    console.log('http://127.0.0.1:3001');
});