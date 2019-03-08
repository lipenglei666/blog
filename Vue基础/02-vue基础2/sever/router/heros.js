// 导入express
const express = require('express');
// 导入控制器
const controller = require('../controller/hero')
// 创建路由对象
const router = express.Router();
// 获取英雄列表
router.get('/heroList',controller.getAllHero);
// 添加英雄
router.post('/addHero',controller.addHero)
// 导出路由对象
module.exports = router;