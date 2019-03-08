# vue笔记
## $set的使用
+ 使用场景：对于对象中不存在的属性，若设置时，vm实例无法检测更新到view
+ 语法：`vue对象.$set(对象,key,value)`
+ 代码：
  ```html
    <div id="app">
      {{user}}
      <button @click="addProto">增加属性gender</button>
    </div>
    <script>
      var vm = new Vue({
        el:"#app",
        data:{
          user:{
            name:'zs',
            age:10
          }
        },
        methods:{
          addProto(){
            // 对于对象中不存在的属性，若设置时，vm实例无法检测更新view
            // 解决方案：可以使用 vm.$set(target,key,value) 解决。
            // this.user.gender = '女'
            this.$set(this.user,'gender','男');
          }
        }
      })
    </script>
  ```

## $mount的使用
+ 使用场景：可以绑定要关联的view模块
+ 注意：若对象内部通过el设置view模块，则以el的设置为准。
+ 代码：
  ```html
    <div id="app">
      {{msg}}
    </div>
    <script>
      var vm = new Vue({
        // el:"#app",
        data:{
          msg:'hello'
        }
      })
      // 可以绑定要关联的view模块
      // 注意：若对象内部通过el设置录view模块，则以el的设置为准。
      vm.$mount('#app')
    </script>
  ```

## template属性
+ 使用场景：若使用了template属性，template指定的内容会替换el属性关联的模块
+ 代码：
  ```
    <div id="app">
      {{msg}}
    </div>
    <script>
      var vm = new Vue({
        el:"#app",
        // 若使用了template属性，template指定的内容会替换el属性关联的模块
        template:'<h1>{{msg}}</h1>',
        data:{
          msg:'hello'
        }
      })
    </script>
  ```

## 全局过滤器
+ 语法：`Vue.filter('过滤器名称',处理程序)`
+ 使用场景：
  + 插值表达式：`{{time|format(true)}}`
  + v-bind命令：`:key="数据|过滤器名称(参数)"`
+ 注意：处理程序中的第一个参数参数，就是管道左侧的数据。 第二个参数及以后的参数则是在调用过滤器中传入的参数
+ `|`称为管道
+ 代码：
  + html
    ```html
    <div id="app">
      <!-- {{数据|过滤器名称(参数)}} ；| 管道符-->
      {{time|format(true)}}
      <hr>
      {{time|format}}
      <!-- 过滤器可以使用在插值表达式 和 v-bind命令中 -->
      <hr>
      <h2 :title="time | format(true)">鼠标进入看时间</h2>
      <!-- 数据可以经历多个过滤器处理 -->
      <hr>
      {{time|format(true)|addStr}}
    </div>
    ```
  + js
    ```html
    <script>
      // 语法：Vue.filter('过滤器名称',处理程序)
      // 注意：处理程序中的第一个参数参数，就是管道左侧的数据。 第二个参数及以后的参数则是在调用过滤器中传入的参数
      // 定义过滤器
      Vue.filter('format', (time, isFull) => {
        let date = new Date(time);
        let year = date.getFullYear();
        let month = (date.getMonth() + 1).toString().padStart('2', '0');
        let day = date.getDate().toString().padStart('2', '0');
        let hours = date.getHours().toString().padStart('2', '0');
        let minutes = date.getMinutes().toString().padStart('2', '0');
        let seconds = date.getSeconds().toString().padStart('2', '0');
        if (isFull) {
    
          return `${year}年${month}月${day}日 ${hours}:${minutes}:${seconds}`;
        } else {
    
          return `${year}年${month}月${day}日`;
        }
      })
    
      // 定义过滤器
      Vue.filter('addStr',(r)=>{
        return r + '❤️的时间'
      })
    
      // 创建vue实例
      var vm = new Vue({
        el: "#app",
        data: {
          time: 1550494434561
        }
      });
    
    </script>
    ```



## 私有过滤器
+ html代码：
  ```html
    <h1>app</h1>
    <div id="app">
      <!-- {{数据|过滤器名称(参数)}} ；| 管道符-->
      {{time|format(true)}}
      <hr>
      {{time|format}}
      <!-- 过滤器可以使用在插值表达式 和 v-bind命令中 -->
      <hr>
      <h2 :title="time | format(true)">鼠标进入看时间</h2>
      <!-- 数据可以经历多个过滤器处理 -->
      <hr>
      {{time|format(true)|addStr}}
    </div>
    <h1>app2</h1>
    <div id="app2">
      {{time|format}}
    </div>
  ```
+ js代码：
  ```html
    <script>
    // 语法：Vue.filter('过滤器名称',处理程序)
    // 注意：处理程序中的第一个参数参数，就是管道左侧的数据。 第二个参数及以后的参数则是在调用过滤器中传入的参数
    // 定义过滤器
    Vue.filter('format', (time, isFull) => {
      let date = new Date(time);
      let year = date.getFullYear();
      let month = (date.getMonth() + 1).toString().padStart('2', '0');
      let day = date.getDate().toString().padStart('2', '0');
      let hours = date.getHours().toString().padStart('2', '0');
      let minutes = date.getMinutes().toString().padStart('2', '0');
      let seconds = date.getSeconds().toString().padStart('2', '0');
      if (isFull) {
  
        return `${year}年${month}月${day}日 ${hours}:${minutes}:${seconds}`;
      } else {
  
        return `${year}年${month}月${day}日`;
      }
      })
  
      // 定义过滤器
      Vue.filter('addStr',(r)=>{
        return r + '❤️的时间'
      })
  
      // 创建vue实例1
      var vm = new Vue({
        el: "#app",
        data: {
          time: 1550494434561
        },
  
      });
      // 创建vue实例2
      var vm2= new Vue({
        el: "#app2",
        data: {
          time: 1550494434561
        },
        // filters定义私有的过滤器
        // 注意：当私有过滤七和全局过滤器冲突时，优先使用私有过滤器
        filters:{
          format(time) {
            return time + 'hello'
          }
        }
  
      });
  </script>
  ```



  

## vue实例的生命周期
### 什么是生命周期
+ 概念：每一个Vue实例创建、运行、销毁的过程，就是生命周期；在实例的生命周期中，总是伴随着各种事件，这些事件就是生命周期函数；
+ 生命周期：实例的生命周期，就是一个阶段，从创建到运行，再到销毁的阶段；
+ 生命周期函数：在实例的生命周期中，在特定阶段执行的一些特定的事件，这些事件，叫做 生命周期函数；
  + 生命周期钩子：[生命周期钩子](https://cn.vuejs.org/v2/api/#%E5%AE%9E%E4%BE%8B%E6%96%B9%E6%B3%95-%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F)：就是生命周期事件的别名而已；
  + 生命周期钩子 = 生命周期函数 = 生命周期事件

### 主要的生命周期函数分类
+ **创建期间**的生命周期函数：(特点：每个实例一辈子只执行一次)
  + beforeCreate：创建之前，此时 data 和 methods 尚未初始化
  + **created**(第一个重要的函数，此时，data 和 methods 已经创建好了，可以被访问了)
  + beforeMount：挂载模板结构之前，此时，页面还没有被渲染到浏览器中；
  + **mounted**（第二个重要的函数，此时，页面刚被渲染出来；如果要操作DOM元素，最好在这个阶段）
+ **运行期间**的生命周期函数：（特点：按需被调用 至少0次，最多N次）
  + beforeUpdate：数据是最新的，页面是旧的
  + updated：页面和数据都是最新的
+ **销毁期间**的生命周期函数：(特点：每个实例一辈子只执行一次)
  + beforeDestroy：销毁之前，实例还正常可用
  + destroyed：销毁之后，实例已经不工作了

## 关于异步请求
1. 之前的学习中，如何发起数据请求？
   1. 最开始自己 new XHR
   2. 使用Jquery中提供的工具函数 `$.ajax({配置对象})`, `$.post(url地址, function(){})`， `$.get(url地址, 处理函数)`
   3. `axios`发起请求；只支持`get`和`post`请求，无法发起`JSONP`请求;如果涉及到 JSONP请求，可以让后端启用 `cors` 跨域资源共享即可；

2. 常见的数据请求类型？
   - get请求
   - post请求
   - jsonp请求
3. 在Vue中，可以使用`vue-resource`或`axios`发起数据请求

   - `vue-resource` 支持 get, post, jsonp请求【Vue官方不推荐使用这个包了！】


## [axios](https://www.npmjs.com/package/axios)实现get和post请求
> axios请求后返回的是一个promise对象，可以通过then和catch处理结果和异常
### get请求
+ 示例1
  ```javascript
    axios.get('/user?ID=12345')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  ```
+ 示例2:
  ```javascript
    axios.get('/user', {
      params: {
        ID: 12345
      }
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  ```
### post请求
+ 示例1：
  ```javascript
    axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  ```
+ 关于在express中的处理
  + 问题：通过req.body无法获取提交的参数
  + 处理方式：使用`req.on('data',callback)`处理axios的post请求
  + 代码
    ```javascript
      req.on('data', data => {
      // encodeURIComponent(url) 编码
      // decodeURIComponent(url) 解码
      // console.log(decodeURIComponent(data));
      // console.log(typeof decodeURIComponent(data));
      let hero = JSON.parse(decodeURIComponent(data));
      })
    ```
  



## Promise对象的使用

### 1. 为什么使用Promise对象

	解决回调地狱问题

### 2. 使用方式

```javascript
/*
  // 对象参数：函数
  // 参数resolve：表示异步操作成功后要执行的函数
  // 参数reject： 表示异步操作失败后要执行的函数
  var obj = new Promise(function(resolve,reject){
    // 异步操作
    resolve(成功后的数据);
    reject(失败后的数据);
  });
  obj
  .then(function(data){//可以再次返回其他promise},function(err){//可以再次返回其他promise})
  .catch(function(err){//处理异常)
*/
```

### 3. async和await关键字

目的可以简化promise操作

+ 语法

  ```javascript
  // 1. async关键字，仅仅用来修饰方法， 可以实现异步方法
  // 1.1 语法：async function
  // 2. await关键字，仅仅用来修饰promise实例，配合async使用
  // 2.1 语法：await promise实例对象
  // 3. await关键字一定要配合async使用
  // 注意1: await修饰的promise实例是有序的异步操作
  // 注意2: 在async方法中，在第一个await之前的程序都是同步的
  ```

+ 代码

  ```javascript
  // 导入文件系统
  const fs = require('fs');
  // promise封装
  function getContentByFile(path){
    let promise = new Promise((resolve,reject)=>{
      fs.readFile(path,'utf-8',(err,data)=>{
        if(err) return reject(err);
        return resolve(data);
      });
    });
    return promise;
  }
  
  
  console.log(1);
  async function test() {
    console.log(2);
    let result1 = await getContentByFile('./files/01.txt');
    console.log(result1);
    let result2 = await getContentByFile('./files/02.txt');
    console.log(result2);
    let result3 = await getContentByFile('./files/03.txt');
    console.log(result3);
    console.log(3);
  }
  test();
  console.log(4)
  // 结果：1243
  ```




### 4. async和await关键字操作axios

```javascript
    <div id="app">
      <button @click="getAllHeroList()">get</button>
      <button @click="postHero()">post</button>
    </div>
    <script>
    // 配置全局请求根路径
    axios.defaults.baseURL = 'http://127.0.0.1:5000';
    // 把axios对象设置到Vue中
    Vue.prototype.$http = axios;
    var vm = new Vue({
      el: "#app",
      data: {

      },
      methods: {
        async getAllHeroList() {
          let { data: result } = await this.$http.get('/heroList');
          console.log(result);
        },
        async postHero() {
          let { data: result } = await this.$http.post('/addHero', { name: '卢兰', gender: '女', ctime: '2019-03-02 12:12:12' });
          console.log(result);
        }
      }
    })
  </script>
```



### 5. axios 中拦截器的使用

```html
  <script>
    // 配置全局请求根路径
    axios.defaults.baseURL = 'http://127.0.0.1:5000';
    // 把axios对象设置到Vue中
    Vue.prototype.$http = axios;
    var vm = new Vue({
      el: "#app",
      // data和methods加载完毕后
      created() {
        // 注册一个请求拦截器
        this.$http.interceptors.request.use((config) => {
          // Do something before request is sent
          this.flag = true;
          return config;
        });
        // 注册一个响应拦截器
        this.$http.interceptors.response.use((response) => {
          // Do something with response data
          this.flag = false;
          return response;
        });
      },
      data: {
        flag: false
      },
      methods: {
        async getAllHeroList() {
          let { data: result } = await this.$http.get('/heroList');
          console.log(result);
        },
        async postHero() {
          let { data: result } = await this.$http.post('/addHero', { name: '卢兰', gender: '女', ctime: '2019-03-02 12:12:12' });
          console.log(result);
        }
      }
    })
  </script>
```



## Vue中computed计算属性

```html
    <div id="app">
      firstName: <input type="text" v-model="first">
      <br>
      lastName: <input type="text" v-model="last">
      <p>全名：{{fullName}}</p>
    </div>
    <script>
      var vm = new Vue({
        el:"#app",
        data:{
            first:'',
            last:''
        },
        // computed可以计算属性
        computed:{
          // fullName 表示将来返回的值，而不是方法
          fullName(){
            return this.first + '.' + this.last;
          }
        }
      })
    </script>
```

