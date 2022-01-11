var a = 0;
if(true){           // if语句中 var声明的变量 也是一个全局 变量
  var b = 'in fun'
  console.log(a);   // [Function: a] 函数变量提升级别最高
  a = 1;           
  console.log(a);   // 1
  function a () {}; // 把a之前的变化，映射全局a=1
  console.log(a);   // 1
  a = 21;
  console.log(a);   // 21
};
console.log(a);     // 1
console.log(b);     // in fun