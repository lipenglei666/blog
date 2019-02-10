// 导入express包
const express = require('express');
// 创建应用对象
const app = express();
// 托管semantic
app.use('/semantic',express.static('./semantic'));
// 托管node_module
app.use('/node_modules',express.static('./node_modules'));
// 托管样式文件夹
app.use('/css',express.static('./css'));
// 托管js文件夹
app.use('/js',express.static('./js'));

// 托管静态页面
app.use(express.static('./views'));

// 开启监听
app.listen(3000,()=>{
    console.log('http://127.0.0.1:3000');
})
