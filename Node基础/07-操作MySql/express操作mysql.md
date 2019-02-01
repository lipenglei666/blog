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




