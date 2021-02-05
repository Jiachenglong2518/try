new Promise((resolve,rej)=>{
  console.log('res');
  resolve('p1')
}).then(res=>{
  console.log(res);
})
console.log('宏任务');
setTimeout(()=>{
  console.log('setTimeout1');
  new Promise((reslove,reject)=>{
    console.log('set1-p');
    resolve('seet1-then')
  }).then((res)=>{
    console.log(res);
  })
},1)
new Promise(function(resolve) {
  console.log('7');
  resolve();
}).then(function() {
  console.log('8')
})
