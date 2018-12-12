const fs = require('fs');
// 【获取文件的信息的方法】
// 语法：fs.stat(path[, options], callback)
// 参数1：path,文件路径
// 参数2：option,可选。忽略
// 参数3：callback,回调函数；err,表示读取失败的Error对象；stat表示读取成功后存放文件信息的对象

fs.stat(`${__dirname}/files/03.txt`, (err, stat) => { 
  if (err) console.log(err.message);
  console.log('大小：' + stat.size + '字节');  // 读取文件大小，单位是bytes
  console.log('是否是文件：' + stat.isFile()); // 是否是文件
  console.log('创建时间：' + stat.ctime.toLocaleString());  // 创建时间
  
});