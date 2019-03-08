// 导入mysql包
const mysql = require('mysql');
// 创建数据库操作对象
const conn = mysql.createConnection({
  database:'game',
  host:'127.0.0.1',
  user:'root',
  password:'11111111',
  multipleStatements:true
});
// 导出数据库操作对象
module.exports = conn;