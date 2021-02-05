// 变量提升
function f1(){
  function f2(){
    var a = 'f2'
  }
  console.log(a);
  var a = 'f1'
}
f1();