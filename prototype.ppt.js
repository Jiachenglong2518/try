function Person () {
  console.log("Person");
}
const f2 = function () {
  console.log("f2");
}
const f3 = new Function ("console.log('f3')")
Person()
f2()
f3()
console.log(Person.__proto__ === Function.prototype);
console.log(f2.__proto__ === Function.prototype);
console.log(f3.__proto__ === Function.prototype);


const o1 = {
  name:'o1'
}
const o2 = new Object()
o2.name = 'o2'

console.log(o1.__proto__ === Object.prototype);
console.log(o2.__proto__ === Object.prototype);



console.log(Function.prototype === Object.__proto__) 
console.log(Function.prototype === Function.__proto__) 

// Person的原型，与Function的原型指向 
console.log(Person.prototype.__proto__ === Object.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);