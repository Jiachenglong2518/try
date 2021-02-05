function Person(){
  this.name = 'person';
}
Person.prototype.name = 'man'

var a = new Person();

console.log(a.name); // person
console.log(a.__proto__); // Person.prototype
console.log(a.__proto__.name); // man

console.log( a.__proto__ === Person.prototype);       // true
console.log( Person.prototype.constructor == Person); // true
console.log(a.__proto__.constructor == Person);       // true

// 实例 a 的__proto__指向 Person 的 prototype 
// Person 的  prototype 指向 Person.prototype
// Person.prototype 的 constructor 指向 Person

console.log(this);


