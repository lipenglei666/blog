const express = require('express');
// 创建路由对象
let router = express.Router();
// 把请求分发给路由对象
router.get('/',(req,res)=>{
    res.sendFile('./views/index.html',{root:__dirname});
});
router.get('/list.html',(req,res)=>{
    res.sendFile('./views/list.html',{root:__dirname});
});
router.get('/car.html',(req,res)=>{
    res.sendFile('./views/car.html',{root:__dirname});
});

module.exports = router;
