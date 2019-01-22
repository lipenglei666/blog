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
    // 检测路径返回不同内容
    if (url == '/' || url == '/index.html') {
        fs.readFile(path.join(__dirname, './views/index.html'), 'utf-8', (err, data) => {
            if (err) { 
                res.end('异常') 
            } else {
                res.end(data);
            }
        })
    } else if (url == '/list.html') {
        fs.readFile(path.join(__dirname, './views/list.html'), 'utf-8', (err, data) => {
            if (err) { 
                res.end('异常') 
            } else {
                res.end(data);
            }
        })
    } else if (url == '/car.html') {
        fs.readFile(path.join(__dirname, './views/car.html'), 'utf-8', (err, data) => {
            if (err) { 
                res.end('异常') 
            } else {
                res.end(data);
            }
        })
    } else {
        res.end('404 不存在');
    }
});

// 开启监听
server.listen(4000, () => {
    console.log('请点击：http://127.0.0.1:4000');
});