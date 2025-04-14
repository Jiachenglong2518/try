function SuperType() {
    this.color = ["red", "blue", "green"];
}
SuperType.prototype.age = 12

function SubType() { 
  SuperType.call(this)
}

var s1 = new SubType()

console.log(s1.color)
console.log(s1.age)