let a = 0, b = 0;
function A (a) {
  A = function (b) {
    // let a = 8
    console.log(a + b ++)
  }
  console.log(a++)
}
A(4)
A(2)



Promise.resolve().then(()=>{
  console.log('第一个回调函数：微任务1')  
  setTimeout(()=>{
    console.log('第三个回调函数：宏任务2')
  },0)
})
setTimeout(()=>{
  console.log('第二个回调函数：宏任务1')
  Promise.resolve().then(()=>{
    console.log('第四个回调函数：微任务2')   
  })
},0)