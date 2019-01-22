const express = require('express');

let app = express();

// 托管静态资源
// app.use(express.static('./views'));
// 虚拟目录
app.use('/page', express.static('./views'));

app.listen(5000,()=>{
    console.log('http://127.0.0.1:5000');
}); 