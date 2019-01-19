// module.exports 和 exports 的关系

// 1. `module.exports` 和 `exports` 默认引用了同一个空对象；
console.log(module.exports === exports);
// 2. `module.exports` 和 `exports` 作用一致，都可以向外暴露成员；
// 3. 一个模块作用域中，向外暴露私有成员时，永远以 `module.exports` 为准；