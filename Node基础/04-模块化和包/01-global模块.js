var a = 10;
var say = function () { };
// 把变量a和函数say挂载global对象上
global.a = a;
global.say = say;