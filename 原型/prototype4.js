/**
 * @Author: jiachenglong
 * @Date: 2022-08-23 10:53:25
 * @description: 原型链中属性的查找--.
 * @return {*}
 */

function Person () {
  this.a =  'in a'
}
Person.a = "a"
var p1 = new Person()

console.log(p1.a);
console.log(p1);
console.log(Person);

