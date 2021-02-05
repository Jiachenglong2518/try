
function sleep (letter) {
  // 此处返回一个promise对象，将执行成功希望返回的数据传递给resolve函数，当 sleep 函数调用成功后
  return new Promise((resolve,rel)=>{
    setTimeout(()=>{
      resolve(letter);
    },1000)
  })
}
//async函数会隐式的返回promis对象
const asyncFn = async function(){
  const f1 = await sleep('a');
  console.log(f1,'f1clear');
  const f2 = await sleep('b');
  console.log(f2,'f2');
  // return 'return val'
  throw new Error('error');
  
}
// asyncFn()
asyncFn().then((res)=>{
  console.log(res);
}).catch((rej)=>{
  console.log(rej);
  
})
sleep('sleep')