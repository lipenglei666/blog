// 导入express
const express = require('express');
// 
const queryString = require('querystring');
// 创建服务器
const app = express();

// 定义中间件
app.use((req,res,next)=>{
    let dataStr = '';
    // data 事件中不断的获取用户提交过来的数据（一次可能不完整，所以data事件会不断触发，保证完整）
    req.on('data',(chunk)=>{
        dataStr+=chunk;
    });
    // end 事件表示用户表单数据提交关闭
    req.on('end',()=>{
        console.log(dataStr)
        let obj = queryString.parse(dataStr);
        req.body = obj;
        // 在中间件中调用next方法，结束本次处理响应
        next();
    });
})

// 中间件托管静态资源
app.use(express.static('./views'));
// 监听请求路径
app.post('/postData',(req,res)=>{
    
    res.send(req.body);
});

// 启动服务
app.listen(8888,()=>{
    console.log('http://127.0.0.1:8888');
});

