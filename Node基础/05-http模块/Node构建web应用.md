# Node构建web应用
##1.1 B/S 交互模型

> 什么是B/S：特指基于 浏览器（Browser） 和 服务器（Server） 这种交互形式；

1. **什么是服务器：** 在网络节点中，专门对外提供资源服务的一台电脑；
2. **什么是客户端：** 在网络节点中，专门用来消费服务的一台电脑；
3. **HTTP 协议的通信模型：** `请求 - 处理 - 响应`的过程；
   - 请求：由客户端发起请求；
   - 处理：由服务器端处理请求；
   - 响应：服务器端把处理的结果，通过网络发送给客户端；
4. **什么是静态资源：** 服务器端只需要读取并直接发送给客户端、不需要进一步处理的资源，叫做静态资源；
5. **什么是动态资源：** 服务器端没有现成的资源，需要服务器端动态生成的资源，叫做动态资源；

##1.2 实现一个类似Apache的静态资源服务器

> 使用`http`核心模块，创建最基本的`web服务器`

1. **创建最基本的web服务器**

   - **创建服务器：** 使用 `const server = http.createServer()` 创建服务器；
   - **绑定监听事件：** 通过 `server.on('request', function(req, res) { 请求的处理函数 })` 绑定事件 并 指定 处理函数；
   - **启动服务器：** 通过 `server.listen(端口, IP地址, 启动成功的回调函数)` 来启动服务器；

2. **防止响应内容中文乱码问题**

   - 通过  设置响应报文头的 `Content-Type`，来指定响应内容的编码类型，从而防止乱码：

     ```js
     res.writeHeader(200, { 
     	'Content-Type': 'text/plain; charset=utf-8'
     })
     ```

3. **根据不同的URL返回不同的文本内容**

   - 使用 `req.url` 获取客户端请求的URL地址

4. **根据不同的URL返回不同的HTML页面**

   - 主要思路：使用 `fs 模块` 读取URL对应的HTML页面内容，并使用 `res.end()` 响应给客户端即可；

5. 处理并返回css样式表

6. 处理并返回Javascript文件

7. 优化

8. 在 Node 中 结合模板引擎 实现动态资源服务器

## 相关文章
- [js模块化编程之彻底弄懂CommonJS和AMD/CMD！](https://www.cnblogs.com/chenguangliang/p/5856701.html)
- [把模块化彻底搞个明白（ES6模块/CommonJS/AMD/CMD）](https://github.com/zimplexing/zzZ/issues/23)
- [wiki 对于 Modules的描述](http://wiki.commonjs.org/wiki/Modules/1.1)
- [wiki 对于 Packages的描述](http://wiki.commonjs.org/wiki/Packages/1.1)
- [nodejs模块与包](http://blog.csdn.net/williamfan21c/article/details/54901974)
- [js的单线程和异步](http://www.cnblogs.com/woodyblog/p/6061671.html)



