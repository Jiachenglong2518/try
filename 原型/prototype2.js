/**
 * @Author: jiachenglong
 * @Date: 2022-08-23 10:53:25
 * @description: 原型链中属性的查找-prototype上的属性
 * @return {*}
 */
var foo = {}
var F = function(){};
Object.prototype.a = 'value a';
Function.prototype.b = 'value b';


// 所有foo能查找到Object.prototype上的属性, 但是不能查找到Object上的属性
// foo没有属性能够指向Function.prototype
console.log(foo.a); // 'value a'
console.log(foo.b); // undefined


// F.__proto__ == Function.prototype
// Function.prototype.__proto__ == Object.prototype
// 所有F能查找到Object.prototype上的属性
console.log(F.__proto__ == Function.prototype);
console.log(Function.prototype.__proto__ == Object.prototype);
console.log(F.a); // 'value a';
console.log(F.b); // 'value b';