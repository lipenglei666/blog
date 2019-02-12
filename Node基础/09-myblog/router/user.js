// 源码说明： 首页路由
// 导入express
const express = require('express');
// 创建路由对象
let router = express.Router();
// 导入控制器
let userContrl = require('../controller/user');


// 监听注册页面
router.get('/register', userContrl.showRegisterPage);
// 监听登录
router.get('/login',userContrl.showLoginPage );
// 监听post请求-处理注册
router.post('/register',userContrl.registerHandler );

// 监听post请求-处理登录
router.post('/login', userContrl.loginHandler);

// 监听get请求-实现注销
router.get('/loginOut',userContrl.loginOut);

// 暴露路由对象
module.exports = router;