function a (params) {
  this.name = 'jcl'
  console.log(this,"this");
}
a.prototype.say = function () {
  console.log(this.name,"say name");
}
// var b = new a()
// console.log(b.name);
// console.log(b.say());
// a()


function person (...args) {
  console.log(args);
  this.name = 'jcl'
}
// person( {a:1})
console.log(person);



var myObject = Object.create(anotherObject, {
  age: {
      value: 18,
  },
})
/**
 * 1 创建一个新对象obj
 * 2 将对象obj的原型 链连接到另一个对象
 * 3 将创建的对象obj作为fn 执行的this上下文，如果没有返回对象 则返回obj
 */

// js 模拟new 操作符
function creat (fn,...args) {
  var obj = {}
  Object.setPrototypeOf(obj, fn.prototype)
  const res = fn.apply(obj, args)
  return res instanceof Object ? res : obj
}