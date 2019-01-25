// 导入express
const express = require('express');
// 创建服务器
const app = express();
// 导入mysql
const mysql = require('mysql');
// 创建连接对象
let connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '11111111',
    database : 'school'
})
// 连接数据库
connection.connect();
// 定义sql语句
let querySql = 'update student set ? where id=?';
let obj = { id:17,userName:'六六',age:99,gender:'男',cdate:new Date()};

connection.query(querySql,[obj,obj.id],(error,result)=>{
    if(error) return error.message;
    console.log('修改成功！');
})

// 开启服务
app.listen(8888,()=>{
    console.log('http://127.0.0.1:8888');
});
