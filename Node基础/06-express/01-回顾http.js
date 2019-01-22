const http = require('http');
let server = http.createServer();
server.on('request',(req,res)=>{
    res.end('hello 666');
});
server.listen(4000,()=>{
    console.log('http://127.0.0.1:4000');
});