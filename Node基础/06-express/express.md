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



