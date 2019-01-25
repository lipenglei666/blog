# express操作mysql
## 1. 安装mysql包
``` npm install mysql -S ```

## 2. 连接数据库
```
// 导入mysql
var mysql      = require('mysql');
// 配置并创建连接对象
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'me',
  password : 'secret',
  database : 'my_db'
});
// 连接数据库
connection.connect();
```

## 3.查询操作
``` connection.query(sqlStr,(err,res){})```

## 4.插入操作
```
connection.query(sqlStr,values,(err.res){});
// values 传入一个对象
```

## 4.插入操作
```
connection.query(sqlStr,values,(err.res){})
// values 传入[对象,条件1，条件2...]
```

### 删除操作
```
connection.query(sqlStr,values,(err.res){})
// values 传入id值
```




