function Person(){
  this.name = "person"
}
Person.prototype.name = 'man'

var name = "out person"

var p1 = new Person()

console.log(p1.__proto__ == Person.prototype); // true

// Person.prototype 其本质为一个对象，故其__proto__ 指向Object.prototype
console.log(Person.prototype.__proto__ == Object.prototype); //true
console.log(Person.__proto__  == Function.prototype); // true

console.log(Function.__proto__ );
console.log(Object.__proto__ );
console.log(Function.prototype.__proto__);
console.log(Object.prototype.__proto__);

console.log(p1.__proto__.constructor.__proto__ == Function.prototype); 

// console.log(a.name); // person
// console.log(a.__proto__); // Person.prototype
// console.log(a.__proto__.name); // man

// console.log( a.__proto__ === Person.prototype);       // true
// console.log( Person.prototype.constructor == Person); // true
// console.log(a.__proto__.constructor == Person);       // true

// 实例 a 的__proto__指向 Person 的 prototype 
// Person 的  prototype 指向 Person.prototype
// Person.prototype 的 constructor 指向 Person



