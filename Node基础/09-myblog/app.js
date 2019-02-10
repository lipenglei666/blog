// 导入express
const express = require('express');
// 创建应用
const app = express();
// 开启模版引擎
app.set('view engine','ejs');
// 设置模版引擎路径
app.set('views','./views');
// 托管node_modules
app.use('/node_modules',express.static('./node_modules'))

// 监听根路径
app.get('/',(req,res)=>{
    // 渲染对应的模版
    res.render('index.ejs',{name:'zs',age:11})
});

// 启动监听
app.listen(3000,()=>{
    console.log('http://127.0.0.1:3000');
})