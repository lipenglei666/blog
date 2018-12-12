const fs = require('fs');
// 1. 【写入文件的方法】
// 语法：fs.writeFile(file, data[, options], callback)
// 参数1：file,文件路径
// 参数2：data,写入的数据
// 参数3：options，写入内容的格式。可选，默认utf-8
// 参数4：callback，回调函数。err，表示写入失败后的Error对象

fs.writeFile('./files/03.txt', '大家好', (err) => { 
  if (err) {
    console.log(err.message);
  } else {
    console.log('写入成功');
  }
});