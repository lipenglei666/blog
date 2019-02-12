// 导入mysql
const mysql = require('mysql');
// 创建操作数据库对象
const connection = mysql.createConnection({
    database: 'blog',
    host: '127.0.0.1',
    user: 'root',
    password: '11111111',
    // 启用处理多条sql语句
    multipleStatements:true
});
module.exports = connection;