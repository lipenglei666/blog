// 导入文件系统
const fs = require('fs');
// promise封装
function getContentByFile(path){
  let promise = new Promise((resolve,reject)=>{
    fs.readFile(path,'utf-8',(err,data)=>{
      if(err) return reject(err);
      return resolve(data);
    });
  });
  return promise;
}


console.log(1);
async function test() {
  console.log(2);
  let result1 = await getContentByFile('./files/01.txt');
  console.log(result1);
  let result2 = await getContentByFile('./files/02.txt');
  console.log(result2);
  let result3 = await getContentByFile('./files/03.txt');
  console.log(result3);
  console.log(3);
}
test();
console.log(4)
// 结果：1243