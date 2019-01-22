// 引入http模块
const http = require('http');
// 创建服务器
var server = http.createServer();
// 绑定请求事件实现处理请求程序
server.on('request',(req,res)=>{
    // 设置响应头
    res.writeHead(200,{
        // text/plain 普通文本
        // text/html  html
        'Content-Type':'text/html;charset=utf-8'
    });
    // 获取请求路径
    let url = req.url;
    // 检测路径返回不同内容
    if(url=='/'||url=='/index.html') {
        res.end('<h1>首页</h1>');
    }else if(url=='/list.html') {
        res.end('<h1>列表页面</h1>');
    }else if(url=='/car.html'){
        res.end('<h1>购物车页面</h1>');
    }else {
        res.end('<h1>不存在该页面</h1>');
    }
});

// 开启监听
server.listen(4000,()=>{
    console.log('请点击：http://127.0.0.1:4000');
});