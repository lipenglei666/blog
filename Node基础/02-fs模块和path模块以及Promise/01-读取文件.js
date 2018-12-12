// 引入文件系统包
const fs = require('fs');

// 语法：fs.readFile(path[, options], callback)
// 参数1:path，文件路径
// 参数2：options ，设置读取后的文件编码格式，常用→utf-8
// 参数3：callback，回调函数。有两个参数，① err，表示读取失败后的Error对象,若读取成功，则是null；② data，表示读取成功后的具体数据，不设置格式时，默认是Buffer类型

//【不设置编码格式时】
fs.readFile('./files/01.txt', (err, data) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(data);
    console.log(data.toString());
  }
});

//【设置编码格式时】
fs.readFile('./files/01.txt','utf-8', (err, data) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(data);
    console.log(data.toString());
  }
});