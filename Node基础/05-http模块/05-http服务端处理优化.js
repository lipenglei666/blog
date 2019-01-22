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
    // 获取请求路径
    let url = req.url;
    console.log(url);
    if(url=='/') {
        url='/views/index.html';
    }
    
    fs.readFile(path.join(__dirname, url), (err, data) => {
        if (err) { 
            res.end('404 Not Fount') 
        } else {
            res.end(data);
        }
    })
    
});

// 开启监听
server.listen(4000, () => {
    console.log('请点击：http://127.0.0.1:4000');
});