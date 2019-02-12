// 源码说明： 首页路由
// 导入express
const express = require('express');
// 导入对应的控制器模块
const indexCtrl = require('../controller/index');
// 创建路由对象
let router = express.Router();
// 监听根路径-首页
router.get('/', indexCtrl.showIndexPage);

// 暴露路由对象
module.exports = router;