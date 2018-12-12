const fs = require('fs');
const path = require('path');

// 【path模块中的join方式实现路径的拼接】
// 语法：path.join([path...]);

fs.readFile(path.join(__dirname, './files/score.txt'), 'utf-8', (err, data) => {
  if (err) console.log(err.message);
  console.log(data);
})
     