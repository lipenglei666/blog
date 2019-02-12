// 导入express
const express = require('express');
// 导入constroller
const articleControl = require('../controller/article');
// 创建路由对象
const router = express.Router();

// 监听发表文章页面
router.get('/article/add',articleControl.showAddArticle);
// 监听发表
router.post('/addArticle',articleControl.addArticle);
// 检测文章详情页
router.get('/articleInfo/:id',articleControl.showArticleInfo);
// 显示编辑页面
router.get('/article/edit/:id',articleControl.edit);
// 监听保存页面
router.post('/save/:id',articleControl.save);

module.exports=router;