// 代码文件说明：负责路由对应关系
// 导入express包
const express = require('express');
// 导入业务逻辑处理对象
const controller = require('./controller.js');
// 创建路由对象
const router = express.Router();
// api-getAllHero-获取所有英雄
router.get('/getAllHero', controller.getAllhero);

// api-addHero-添加英雄
router.post('/addHero', controller.addHero);

// api-getHeroById-根据id值获取英雄
router.get('/getHero/:id',controller.getHero);


// api-updateHero-根据id更新英雄信息
router.post('/update/:id',controller.updateHero);

// api-deleteHero-根据id删除英雄
router.get('/delete/:id',controller.deleteHero);

// 处理请求根目录
router.get('/', (req, res) => {
    res.send('请求服务器api成功');
});

// 暴露router对象
module.exports = router;