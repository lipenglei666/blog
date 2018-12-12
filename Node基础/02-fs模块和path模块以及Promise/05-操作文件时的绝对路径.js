const fs = require('fs');
// 问题：读取文件时，若不是直接在当前运行文件的目录下运行时，则读取失败。
// 最佳解决方案：读取、写入或追加等文件操作时，选用绝对路径
// 获取当前文件目录路径：__dirname      如：E:\Node.JS\day01\02-code
// 获取当前文件的完整路径：__filename    如：E:\Node.JS\day01\02-code\08-操作文件时的绝对路径.js

// 操作描述：返回上一层目录中去执行该文件时，此时会报错
// fs.readFile('./files/03.txt', 'utf-8', (err, data) => { 
//   if (err) console.log(err.message);
//   console.log(data);
// });

fs.readFile(__dirname + '/files/03.txt', 'utf-8', (err, data) => { 
  if (err) console.log(err.message);
  console.log(data);
});
