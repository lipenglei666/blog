# vue基础指令总结
## 1. 插值表达式
+ 语法：`{{数据}}` 
+ 代码：`<h2>{{msg}}</h2>`

## 2. v-text和v-html指令
+ v-text
  + 语法：`v-text="数据"`
  + 代码：
    ```
    <div v-text="msg"></div>
    若msg数据中有标签结构，则标签结构不会被解析渲染
+ v-html
  + 语法：`v-html="数据"`
  + 代码：
    <div v-html="msg"></div>
    若msg数据中有标签结构，则标签结构会被浏览器解析渲染
## 3. v-cloak
+ 语法：`v-cloak`
+ 作用：可以解决数据渲染时闪烁问题。
+ 代码：
  ```
    <style>
      [v-cloak]{
        display:none;
      }
    </style>
    <div v-cloak>
      {{msg}}
    </div>
    //备注：注意，当数据渲染完毕后，v-cloak属性会被移除

## 4. v-bind属性绑定指令
+ 语法：`v-bind:属性="值"`
+ 简写格式：`:属性="值"`
+ 代码：
  ```
    <img :src="bigSrc">

## 5. v-on事件绑定指令
+ 语法：`v-on:事件名="js代码或执行函数"`
+ 间写格式：`@事件名="js代码或执行函数"`
+ 代码：
  ```
  <button @click="alert('ok')"></button>
  <button @click="add"></button>

## 6. v-model实现双向数据绑定
+ 语法：`v-model:value="msg"`
+ 注意：双向数据绑定仅限于input、textarea、select表单元素
+ 代码：
  ```
  <input v-model:value="name"/>
  
## 7. vue操作类名的指令
+ 语法：`:class="" 或 :class=['v1','v2'...]`
+ 注意：指令内部中可以写表达式
+ 代码：
  ```
    <div :class="['thin','big']"></div>
    <div :class="flag?'a':'b'"></div>

## 8. v-for指令
+ 语法：`v-for="(item,index) in obj" `
+ 代码：
  ```
  <li v-for="(item,index) in heros" :key="item.id">{{item.name}}</li>
+ 注意：`:key="唯一标识"`指令，保证结构和数据的对应关系

## 9. v-if 和 v-else
+ 语法：`v-if="布尔值"`
+ 作用：若值是true，则对应的元素会被创建，false则被移除
+ 语法：`v-else` 处理第二种情况
+ 代码：
  ```
  <h1 v-if="flag">爱</h1>
  <h1 v-else>恨</h1>

## 10. v-show
+ 语法：`v-show="布尔值"`
+ 作用：若值是true，则对应的元素会被显示，false则被隐藏
+ 代码：
  ```
  <div v-show="flag">内容</div>

## 11. 在html中使用vue
```
    <!--
      该结构是MVVM中的view
    -->
    <div id="app">
      <button @click="start">开始</button>
      <button @click="stop">停止</button>
      <br>
      <h2>{{msg}}</h2>
    </div>
    <!--引入vue文件-->
    <script src="lib/vue-2.5.16.js"></script>
    <script>
      //  创建的vue实例，则是MVVM中的VM,用来调度
      var vm = new Vue({
        // 关联的View结构的选择器
        el:"#app",
        //  data 是MVVM中的Model
        data:{
          msg:'2019，恭喜发财，诸事顺利。',
          timer:null
        },
        // 用来存放方法
        methods:{
          start(){
            if(this.timer!=null) return;
            // this代表当前vue实例对象
            this.timer =setInterval(()=>{
              this.msg = this.msg.slice(1) + this.msg.slice(0,1);
            },100);
          },
          stop(){
            clearInterval(this.timer);
            console.log(this.timer);
            this.timer = null;
          },
        }
      })
    </script>