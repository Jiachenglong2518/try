
// 深度克隆
function clone (target, map = new Map) {
  debugger
  if (target === null || typeof target !== 'object') return target;
  let cloneTarget = Array.isArray(target) ? [] : {}
  // 解决循环引用
  if (map.get(target)) {
    console.log(1);
    console.log(map.get(target),"map.get(target)");
    return map.get(target)
  }
  map.set(target, cloneTarget)
  console.log(cloneTarget, "cloneTarget");
  for(const key in target){
    cloneTarget[key] = clone(target[key], map)
  }
  console.log(2);
  return cloneTarget
}
var a = {
  a:1,
  b:2,
  c:{
    name:'jcl'
  },
  d:[1,2,3],
  // a: new RegExp(['s'])
}
a.e = a
var b = clone(a)
console.log(b);
// a.c.name = 'j'
// console.log(a, "a");
// console.log(b);
// console.log(b.e, "b.e");