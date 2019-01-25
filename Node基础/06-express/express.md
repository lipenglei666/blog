# express
## 1. 使用 `nodemon` 工具来自动重启web服务器

- **nodemon的作用**：能够**实时监听**当前项目中，文件的变化；只要监听到了文件的变化，则 nodemon 工具，会自动重新启动 web 服务器，从而使最新的代码生效；免去了程序员手动重启服务器的困扰；
- **如何安装：** 运行 `npm i nodemon -g`  全局安装即可；
- **如何使用：**
  - 之前使用 `node 要执行的文件路径` 来运行 Node.js 代码；
  - 现在使用 `nodemon 要执行的文件路径` 来运行 Node.js 代码；
- **注意：** 今后在开发Web项目的时候，推荐使用 `nodemon` 来启动 web 服务器

## 2. Node 中开发web项目的框架 - express

> 定义（什么是Express）：一个快速的网站开发框架，封装了原生的http模块，用起来更方便；API更人性化



### 2.1 express 框架的特点

1. 基于Node.js平台之上，进一步封装了 `http` 模块，从而提供了更好用，更友好的 API
2. 使用Express创建网站，比使用原生的http模块更加方便；
3. Express 并没有覆盖 原生 http 模块中的方法，而是基于 原生方法之上，做了更友好的封装，让用户体验更好



### 2.2 express 框架的安装和基本使用

1. **安装：** 运行 `npm i express -S` 即可安装
2. **创建基本的 `express` 服务器：**
   - 导入 `express` 第三方模块；
   - **创建服务器的实例：** 调用 `const app = express()` 方法；
   - 通过 `app.get()` 或 `app.post()` 方法，来监听客户端的 `get` 或 `post` 请求，具体语法：
     - **监听 `GET` 请求：** `app.get('请求地址', (req, res) => { 处理函数 })` 
     - **监听 `POST` 请求：** `app.post('请求地址', (req, res) => { 处理函数 })` 
   - **启动 express 服务器：** 通过 `app.listen(端口, IP地址, 启动成功后的回调函数)` 启动服务器；



### 2.3 express 中的快捷方法

1. `res.send()`
   1. 支持 发送 字符串 `Content-Type: text/html;`
   2. 支持 发送 对象 或 数组 `Content-Type: application/json`
   3. 支持 发送 Buffer 此时会当作文件下载；
2. `res.sendFile()`
   - 用法1：`res.sendFile(path.join(__dirname, './view/index.html'))`
   - 用法2：`res.sendFile('./view/movie.html', { root: __dirname })`
   - 注意：`res.sendFile()` 可以向浏览器发送 静态页面；



### 2.4 使用 `express.static()` 快速托管静态资源

> 如果我们网站中，有很多静态资源需要被外界访问，此时，使用 res.sendFile 就有点力不从心了;
>
> 这时候，express 框架，为我们提供了 `express.static('静态资源目录')` 
>
> 来快速托管指定目录下的所有静态资源文件；

1. **语法1：** `app.use(express.static('public'));`
   - `app.use() `方法，是专门用来注册 中间件；
   - `express.static` 是express的内置中间件；
2. **语法2：** `app.use('/虚拟目录', express.static('public'))`



### 2.5 为 express 框架配置模板引擎渲染动态页面

1. 安装 ejs 模板引擎` npm i ejs -S`
2. 使用 app.set() 配置默认的模板引擎 `app.set('view engine', 'ejs')`
3. 使用 app.set() 配置默认模板页面的存放路径 `app.set('views', './views')`
4. 使用 res.render() 来渲染模板页面`res.render('index.ejs', { 要渲染的数据对象 })`，注意，模板页面的 后缀名，可以省略不写！

### 2.6 在 express 中配置 art-template

1. 安装 两个包 `cnpm i art-template express-art-template -S`
2. 自定义一个模板引擎  `app.engine('自定义模板引擎的名称', 渲染函数)`
3. 将自定义的模板引擎，配置为 express 的默认模板引擎  `app.set('view engine', '具体模板引擎的名称')`
4. 配置 模板页面得存放路径 `app.set('views', '路径')`



## 3. 使用 express 框架中提供的路由来分发请求

1. **什么是路由：** 路由就是对应关系；
2. **什么叫做后端路由：** 前端请求的URL地址，都要对应一个后端的处理函数，那么 这种URL地址到 处理函数之间的对应关系，就叫做后端路由；
3. 在Express中，**路由的主要职责**  就是 **把请求分发到对应的处理函数中**；
4. 在Express中，如何 定义并使用路由呢？

```js
  // 1. 封装单独的 router.js 路由模块文件
  const express = require('express')
  // 创建路由对象
  const router = express.Router()

  router.get('/', (req, res)=>{})
  router.get('/movie', (req, res)=>{})
  router.get('/about', (req, res)=>{})

  // 导出路由对象
  module.exports = router
```

5. express 创建的 app 服务器，如何使用 路由模块呢？

```js
  // 导入自己的路由模块
  const router = require('./router.js')
  // 使用 app.use() 来注册路由
  app.use(router)
```



## 4. Express框架里中间件概念

### 4.1 什么是中间件

> 定义：中间件就是一个处理函数；只不过这个函数比较特殊，包含了三个参数，分别是 `req`，`res`，`next`
>
> 注意：中间件方法中的三个参数：
>
> - req：请求对象；
> - res：响应对象；
> - next：next()可以被调用，表示调用下一个中间件方法；

### 4.2 Express 框架中对中间件的5种分类

1. **应用级别的中间件：** 挂载到 app 上的中间件 `app.get('URL地址', （req, res, next）=> {})`；
2. **路由级别的中间件：** 挂载到 router 对象上的中间件  `router.get('url地址', (req, res, next)=>{})`
3. **错误级别的中间件：** 回调函数中，有四个参数 `app.use((err, req, res, next)=>{})`
4. **唯一内置的中间件：** `express.static()`
5. **第三方中间件：** 非express框架提供的，需要程序员手动安装才能使用的中间件；`body-parser` 解析post 表单数据

> 中间件的概念，了解即可，因为实际开发中，我们都直接使用第三方现成的中间件；

### 4.3 模拟一个解析表单数据的中间件

