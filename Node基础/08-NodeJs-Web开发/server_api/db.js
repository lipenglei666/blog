// 代码文件说明：该文件负责创建数据库对象
// 导入mysql
const mysql = require('mysql');
// 创建连接对象
const conntction = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'11111111',
    database:'game'
});
// 暴露操作数据库操作对象
module.exports = conntction;
