function SuperPersion(){
  this.hairColor = 'black';
}
SuperPersion.prototype.getHairColor = function(){
  console.log(this.hairColor); 
}

function Persion(){
}
/**
 * 原型继承：通过重写Persion的原型对象为SuperPersion的实例实现继承
 * 缺点
 *   包含引用类型的原型属性会被所有实力共享
 *   在创建子类型的实例时无法超类型的构造函数中传递参数（在不影响所有对象的实例情况下无法传递）
 */
Persion.prototype = new SuperPersion()

const jack = new Persion()

console.log(jack.hairColor) // black
jack.getHairColor() // black

// jack为Persion的实例，其__ptoto__指向了其构造函数的原型属性即Persion.ptototype
console.log(jack.__proto__ === Persion.prototype) //true
//Persion.prototype为Supersion的实例, 故Persion.prototype内部也有一个指针即__proto__指向SuperPersion的原型，此处为实现继承的关键原因
console.log(Persion.prototype.__proto__ === SuperPersion.prototype)// true

