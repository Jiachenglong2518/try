// 生成一个事件循环的例子
console.log(1)
setTimeout(() => {
  console.log(2)
  new Promise((resolve, reject) => {
    console.log(3)
    resolve()
  }).then(() => {
    console.log(4)
  })
}, 0)

new Promise((resolve, reject) => {
  console.log(5) 
  resolve()
}).then(() => {
  console.log(6)
}).then(() => {
  console.log(7)
})

console.log(5.5) 