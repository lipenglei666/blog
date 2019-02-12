// 导入http模块
const http = require('http');
// 创建服务器对象
const server = http.createServer();
// 注册请求处理事件，处理请求
server.on('request', (req, res) => {
    let url = req.url;
    // 获取cookie字符串
    let cookieStr = req.headers.cookie;
    let cookieObj = {}
    // 检测是否存在cookie
    if (cookieStr) {
        let arr = cookieStr.split(',');
        arr.forEach(element => {
            let item = element.split('=');
            cookieObj[item[0]] = item[1];
        });
    }

    if (url == '/') {
        if (cookieObj.isVisit == 'yes') {
            res.end('you are old c');
        } else {
            let time = new Date(Date.now() + 20 * 1000).toUTCString(); 
            // 设置响应头
            res.writeHeader(200, {
                'Content-Type': 'text/html;charset=utf-8',
                'Set-Cookie': ['isVisit=yes;expires=' + time]
            });
            res.end('you are first c');
        }

    }
});

// 开启监听
server.listen(4000, () => {
    console.log('http://127.0.0.1:4000');
});

// 【cookie总结】
// cookie 是客户端存储技术
// 设置cookie：在处理请求中通过req.writeHead(200,{'Set-Cookie':['key=value','key=value']})
// 设置过期时间：在处理请求中通过req.writeHead(200,{'Set-Cookie':['key=value;expires=utc格式时间','key=value']})
// utc格式时间： new Date(Date.now() + 毫秒).toUTCString()
// 服务端获取cookie： req.headers.cookie

// 【cookie注意事项】
// cookie不能存储大量的数据
// cookie安全性低，不能存放敏感数据
// 应用场景：实现客户端和服务端保持关联状态的技术
// 友情提示：http协议是无状态的