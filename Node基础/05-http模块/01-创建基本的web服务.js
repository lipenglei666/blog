// 1. 引入http模块
const http = require('http');

// 2. 创建服务器
const server = http.createServer();

// 3. 为服务器绑定监听客户端请求事件
server.on('request',(req,res)=>{
    // req 存放客户请求相关的参数
    // res 存放服务端响应相关参数 和 方法
    // 设置响应头
    res.writeHead(200,{
        'Content-Type':'text/plain;charset=utf-8'
    });
    // res.end('hello world');
    res.end('hello 世界');
});

// 4. 开启监听启动服务
server.listen(4000,'127.0.0.1',()=>{
    console.log('我服务器地址： http://127.0.0.1:4000');
});