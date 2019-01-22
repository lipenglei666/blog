const express = require('express');
const app = express();
// 首页
app.get('/',(req,res)=>{
    res.sendFile('./views/index.html',{root:__dirname});
});
app.get('/index.html',(req,res)=>{
    res.sendFile('./views/index.html',{root:__dirname});
});
// 购物车页
app.get('/car.html',(req,res)=>{
    res.sendFile('./views/car.html',{root:__dirname});
});
app.listen(5000,()=>{
    console.log('http://127.0.0.1:5000');
})