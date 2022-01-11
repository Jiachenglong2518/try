
var a = 2;
// this 指向问题
function foo (params) {
  console.log(this);
  console.log(this.a);
}
// foo();

var name = 'win'
var obj = {
  name: 'jcl',
  say:function () {
    var name = 'say name'
    console.log(this.name);
  }
}
obj.say();     //jcl
setTimeout(() => {
  obj.say();  // jcl
}, 500);
setTimeout( obj.say, 500); // 浏览器环境指向 windows， node环境指向undefined