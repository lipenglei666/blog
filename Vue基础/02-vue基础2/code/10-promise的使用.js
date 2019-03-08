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
// 调用
getContentByFile('./files/01.txt').then(data=>{
  console.log(data);
  return getContentByFile('./files/02.txt');
}).then(data=>{
  console.log(data);
  return getContentByFile('./files/03.txt');
}).then(data=>{
  console.log(data);
}).catch((reson)=>{
  console.log(reson);
})
// 【总结】
// 1. 为什么使用promise？ 解决回调地狱问题。
// 2. 使用方式：
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