/**
 * @Author: jiachenglong
 * @Date: 2022-08-23 10:53:25
 * @description: 原型链中属性的查找--.
 * @return {*}
 */
var foo = {}
var F = function(){};
Object.a = 'value a';
Function.b = 'value b';


// 所有foo能查找到Object.prototype上的属性, 但是不能查找到Object上的属性
console.log(foo.a); // undefined
console.log(foo.b); // undefined


// F.__proto__ == Function.prototype
// Function.prototype.__proto__ == Object.prototype
// 所有F能查找到Object.prototype上的属性, 但是不能查找到Object上的属性
console.log(F.__proto__ == Function.prototype);
console.log(Function.prototype.__proto__ == Object.prototype);
console.log(F.a); // undefined
console.log(F.b); // undefined