const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    // 发送普通字符串
    // res.send('你好，世界');
    // 发送数组
    // res.send(['zs','ls','ww']);
    // 发送对象
    res.send({name:'zs',age:11,gender:'男'});
});
app.listen(5000,()=>{
    console.log('http://127.0.0.1:5000');
})