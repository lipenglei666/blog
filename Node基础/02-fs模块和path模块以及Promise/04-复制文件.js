const fs = require('fs');
// 【复制文件的方法，注意：在nodejs 8.5的版本中新增的】
// 语法：fs.copyFile(src, dest[, flags], callback)
// 参数1：file,文件路径
// 参数2：dest,复制后的文件
// 参数3：flags，可选，忽略即可
// 参数4：callback，回调函数。err，表示拷贝失败
fs.copyFile('./files/03.txt', './files/03copy.txt', err => {
  if (err) {
    console.log(err.message);
  } else {
    console.log('拷贝成功！');
  }
});
 