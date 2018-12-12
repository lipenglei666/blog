const fs = require('fs');
const path = require('path');

let src = path.join(__dirname, './files/score.txt');
// 获取文件名
console.log(path.basename(src));
// 获取路径，不包含文件名
console.log(path.dirname(src));
// 获取扩展名
console.log(path.extname(src));
