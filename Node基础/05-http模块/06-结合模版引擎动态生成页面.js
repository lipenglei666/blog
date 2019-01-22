const template = require('art-template');
// 引入fs模块
const fs = require('fs');
// 引入path模块
const path = require('path');
// 引入http模块
const http = require('http');
// 创建服务器
var server = http.createServer();
// 绑定请求事件实现处理请求程序
server.on('request', (req, res) => {
    var htmlstr = template(path.join(__dirname,'./views/hero.html'),{title:'王者荣耀',names:['鲁班','后裔','孙悟空']});
    res.end(htmlstr);
    
    
});

// 开启监听
server.listen(5000, () => {
    console.log('请点击：http://127.0.0.1:5000');
});