var a = 10;
var say = function () {
  console.log('你好');
};
// 向外暴露a和say
module.exports = {
  a: a,
  say:say
}