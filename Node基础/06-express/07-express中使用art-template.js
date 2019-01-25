// 导入express
const express = require('express');
// 创建服务器
var app = express();
// 自定义模版引擎
app.engine('html',require('express-art-template'))
// 配置模版引擎
app.set('view engine','html');
// 配置模版页面存放路径
app.set('views','./artTemplate_pages');
// 渲染模版页面
app.get('/',(req,res)=>{
    res.render('index.html',{title:'英雄联盟',names:['鲁班','李白','后裔','白旗','刘凯']});
})


// 监听服务
app.listen(8888,()=>{
    console.log('http://127.0.0.1:8888');
});