function SuperPersion(name){
  this.hairColor = 'black';
  this.name = name
}
SuperPersion.prototype.getHairColor = function(){
  console.log(this.hairColor); 
}
SuperPersion.prototype.sayName = function() {
  console.log(this.name)
}
/**
 * 组合继承
 *  1.通过原型链实现对原型属性和方法的继承
 *  2.通过借用构造函数实现对实例属性的继承
 * 缺点：
 *  无论在什么情况下都要掉用两次构造函数
 */
function Persion (name, age) {
  // console.log(arguments, 'arguments')
  // 构造函数继承属性和方法
  SuperPersion.apply(this, arguments)
  this.age = age
}
// 原型链继承原型上的方法和属性
Persion.prototype = new SuperPersion()
Persion.prototype.constructor = Persion

Persion.prototype.sayAge = function () {
  console.log(this.age)
}

const jack = new Persion('jack', 28)
console.log(jack.name) // jack
jack.sayAge() // 28

const jane = new Persion('jane', 18)
console.log(jane.name) //jane
jane.sayAge() // 18