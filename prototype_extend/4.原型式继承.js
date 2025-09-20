/**
 *  原型式继承：
 *    object 函数接收一个对象 o 作为参数，返回一个新对象，这个新对象的原型指向传入的对象 o。
 *  这种方式允许我们基于一个已有的对象创建新对象，新对象可以访问原对象的属性和方法。
 *  优化：
 *    ES5通过object.create规范了原型式继承
 *  缺点：
 *    包含引用类型的值的属性始终被共享
 */
function object(o) {
  function F() {}
  F.prototype = o
  return new F()
}

/**
 * 寄生式继承：
 *  通过原型式继承一个对象，然后在内部以某种方式增强对象
 * 缺点：
 *  主要考虑对象而不是构造函数或者自定义类型
 */
function createAnthor (org) {
  var clone = object(org)
  clone.sayHi = function () {
    console.log('hi')
  }
  return clone
}

// 通过寄生式继承来继承原型上的方法
function inheritProtoType (subtype, supertype) {
  var prototype = object(supertype.prototype)
  prototype.constructor = subtype
  subtype.prototype = prototype
}

function Supertype () {
  this.name = 'jack'
}

Supertype.prototype.sayName = function () {
  console.log(this.name)
}

/**
 * 寄生组合式继承
 *  1. 通过借用构造函数来继承属性
 *  2. 通过寄生式继承来继承原型上的方法
 */
function Subtype (name) {
  Supertype.call(this, name)
  this.age = '12'
}
inheritProtoType(Subtype, Supertype)

