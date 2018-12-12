const fs = require('fs');

// 2. 【追加内容到文件中的方法】
// 语法：fs.appendFile(path, data[, options], callback)
// 参数1：file,文件路径
// 参数2：data,追加的数据
// 参数3：options，写入内容的格式。可选，默认utf-8
// 参数4：callback，回调函数。err，表示追加失败后的Error对象

fs.appendFile('./files/03.txt', '，我叫Bruce.Lee', err => {
  if (err) {
    console.log(err.message);
  } else {
    console.log('追加成功');
  }
});

