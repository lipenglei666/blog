// 导入数据库操作对象
const conn = require('../db/db');
// 获取所有英雄列表
const getAllHero = (req, res) => {
  // 定义sql
  let sql = 'select * from heros';
  // 处理sql
  conn.query(sql, (err, result) => {
    if (err) return res.send({ status: 500, msg: err.message });
    res.send({ status: 200, data: result });
  });

};

//  增加英雄
const addHero = (req, res) => {
  // 定义sql 
  let sql = `insert into heros  set ?`;
  // 使用req.on('data',callback)处理axios的post请求
  req.on('data', data => {
    // encodeURIComponent(url) 编码
    // decodeURIComponent(url) 解码
    // console.log(decodeURIComponent(data));
    // console.log(typeof decodeURIComponent(data));
    let hero = JSON.parse(decodeURIComponent(data));
    // 处理sql,注意req.body无法获取axios的post请求的参数
    conn.query(sql, hero, (err) => {
      if (err) return res.send({ status: 500, mes: err.message });
      return res.send({ status: 200 })
    })
  })

};

// 导出业务处理程序
module.exports = {
  getAllHero,
  addHero
}