// 引入文件模块
let fs = require('fs');
// 引入path模块
let path = require('path');
// 自己封装一个读取文件内容的方法
let getContentByPath = (pathName, callback) => { 
  fs.readFile(pathName, 'utf-8', function (err, data) {
    if (err) {
      callback(err);
    } else {
      callback(err, data);
    }
   });
};
// 连续读取三个文件
getContentByPath(path.join(__dirname, 'files/01.txt'), (err, data) => {
  console.log(data);
  // 读取第二个文件
  getContentByPath(path.join(__dirname, 'files/02.txt'), function (err, data) { 
    console.log(data);
    // 读取第三个文件
    getContentByPath(path.join(__dirname, 'files/03.txt'), (err, data) => { 
      console.log(data);
    });
  });
});

// 缺点：回调地狱