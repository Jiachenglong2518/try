// // 隐式绑定
// function foo () {
//   console.log("foo.a:  " + this.a);
// }
//  function doFn (fn) {
//   var a = "doFn"
//   fn()
//   console.log("doFn.a:  ",this.a);
//  }

//  var obj = {
//    a: 2,
//    foo: foo
//  }
//  var a = "window"
//  var o = {
//    a: "0",
//    b:"b",
//    doFn: doFn
//  }
//  o.doFn(obj.foo)

// // 

// function foo () {
//   var a = 2
//   this.bar()
// }

// function bar () {
//   console.log(this.a);
// }
// // 误区一
// function foo (num) {
//   console.log("foo:", num);
//   this.count++;
// }
// foo.count = 0

// for (var i = 0; i < 5; i++) {
//   foo(i)
// }
// console.log("foo.count:", foo.count); 

// 误区2

// function foo () {
//   var a = 2
//   console.log(this);
//   this.bar()
// }
// function bar () {
//   console.log(this.a);
// }
// foo()

// 默认绑定
// function foo () {
//   console.log(this.a);
// }
// var a = 2

// foo() // 2

// 隐式绑定
// function foo () {
//   console.log(this.a);
// }
// var obj = {
//   a: 2,
//   foo: foo
// }
// obj.foo() // 2

// 对象属性引用链中只有上一层
// 或者说最后一层在调用位置中起作用
// function foo () {
//   console.log(this.a);
// }
// var obj2 = {
//   a: 2,
//   foo: foo
// }
// var obj1 = {
//   a: 1,
//   obj2: obj2
// }
// obj1.obj2.foo() // 2

// 隐式丢失-变量赋值
// function foo () {
//   console.log(this.a);
// }
// var obj = {
//   a: 2,
//   foo:foo
// }
// var fn = obj.foo
// var a = 'global'
// fn() // global

// 隐式丢失-参数传递
// function foo () {
//   console.log(this.a);
// }
// function doFoo (fn) {
//   fn()
// }
// var obj = {
//   a: 2,
//   foo:foo
// }
// var a = 'global'
// doFoo(obj.foo)

let obj1 = {
  name: '1'
};
let obj2 = {
  name: '2'
};
let obj3 = {
  name: '3'
}
var name = 'global';


function fn() {
  console.log(this.name);
};
fn(); //global
fn.call(obj1); //1
fn.apply(obj2); //2
fn.bind(obj3)(); //3


// new 绑定
function foo(){
  this.name = 'foo';
};
let echo = new foo();
echo.name //foo