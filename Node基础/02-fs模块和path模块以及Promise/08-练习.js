const fs = require('fs');

fs.readFile(`${__dirname}/files/04.txt`, 'utf-8', (err, data) => {
  if (err) {
    console.log(err.message);
    return;
  }
  var str = data.replace(/=/g, ':').replace(/\s+/g, '\n');

  fs.appendFile(`${__dirname}/files/score.txt`,str, (err) => { 
    if (err) console.log('写入失败');
    console.log('写入成功');
  });
  
});