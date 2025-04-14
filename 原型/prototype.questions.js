// 1
var F = function() {};

Object.prototype.a = function() {
  console.log('a');
};

Function.prototype.b = function() {
  console.log('b');
}

var f = new F();

f.a(); //a
f.b(); //error
F.a(); //a 
F.b(); // b



// f.a(); // a
// f.b(); // f.b is not a function

// F.a(); // a
// F.b(); // b

// 2 
var A = function() {};
A.prototype.n = 1;
var b = new A();
A.prototype = {
  n: 2,
  m: 3
}
var c = new A();

console.log(b.n);
console.log(b.m);

console.log(c.n);
console.log(c.m);

// console.log(b.n); // 1
// console.log(b.m); // undefined

// console.log(c.n); // 2
// console.log(c.m); // 3


  // 3

  var foo = {},F = function(){};
  Object.prototype.a = 'value a';
  Function.prototype.b = 'value b';

  console.log(foo.a);
  console.log(foo.b);

  console.log(F.a);
  console.log(F.b);


// console.log(foo.a); // value a
// console.log(foo.b); // undefined

// console.log(F.a); // value a
// console.log(F.b); // value b


// 4
function A() {}
function B(a) {
    this.a = a;
}
function C(a) {
    if (a) {
        this.a = a;
    }
}
A.prototype.a = 1;
B.prototype.a = 1;
C.prototype.a = 1;

console.log(new A().a); 
console.log(new B().a);
console.log(new C(2).a);


// console.log(new A().a); // 1
// console.log(new B().a); // undefined
// console.log(new C(2).a); // 2