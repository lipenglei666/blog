// 引入http模块
const http = require('http');
// 创建服务器
var server = http.createServer();
// 绑定请求事件实现处理请求程序
server.on('request',(req,res)=>{
    // 设置响应头
    res.writeHead(200,{
        'Content-Type':'text/plain;charset=utf-8'
    });
    // 获取请求路径
    let url = req.url;
    // 检测路径返回不同内容
    if(url=='/'||url=='/index.html') {
        res.end('首页');
    }else if(url=='/list.html') {
        res.end('列表页面');
    }else if(url=='/car.html'){
        res.end('购物车页面');
    }else {
        res.end('不存在该页面');
    }
});

// 开启监听
server.listen(4000,()=>{
    console.log('请点击：http://127.0.0.1:4000');
});