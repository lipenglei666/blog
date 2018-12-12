const fs = require('fs');
// 【获取目录的信息的方法】
// 语法：fs.readdir(path[, options], callback)
// 参数1：path,目录路径
// 参数2：option,内容格式，可选，默认utf-8。忽略
// 参数3：callback, 回调函数，err表示读取失败后的Error对象，files表示读取成功后的后集合

fs.readdir(__dirname, (err, files) => {
  console.log(files);
  
})