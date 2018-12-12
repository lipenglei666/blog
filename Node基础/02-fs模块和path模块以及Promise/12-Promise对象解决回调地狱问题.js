// 引入文件模块
const fs = require('fs');
// 引入路径模块
const path = require('path');

// 封装，根据文件路径，读取内容
let getContentByPath = (src) => {
  return new Promise((resolve, reject) => {
    fs.readFile(src, 'utf-8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

getContentByPath(path.join(__dirname, '/files/01.txt'))
  .then(data => {
    console.log(data);
    return getContentByPath(path.join(__dirname, 'files/02.txt'));
  }).then(data => {
    console.log(data);
    return getContentByPath(path.join(__dirname, 'files/020.txt'));

  }).catch(err => {
    console.log(err.message);
  })
