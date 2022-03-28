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
a()
