function SuperPersion(name){
  this.hairColor = 'black';
  this.name = name
}
SuperPersion.prototype.getHairColor = function(){
  console.log(this.hairColor); 
}

/**
 * 借用构造函数继承：在子类型构造函数中调用超类型的构造函数
 * 优点：
 *  1.可以向超类型构造函数传递参数
 * 缺点
 *  1.方法都在构造函数中定义，无法实现函数服用
 *  2.原型中的属性和方法对于子类型来说是不可见的
 */
function Persion(name) {
  SuperPersion.call(this, name)
}

const mac = new Persion('mac') 
console.log(mac.name) // mac 可以向超类型构造函数传递参数
console.log(mac.getHairColor) // undefined 原型中的属性和方法对于子类型来说是不可见的

const macBook = new Persion('macBook') //
console.log(macBook.name) // macBook 
