// 生成一个事件循环的例子
console.log(1)
setTimeout(() => {
  console.log(2)
}, 0)

new Promise((resolve, reject) => {
  console.log(5) 
  resolve()
  console.log(4)
  reject()
}).then(() => {
  console.log(6)
}).then(() => {
  console.log(7)
}).catch(() => {
  console.log(8)
})

console.log(5.5) 
// 1 5 4 5.5 6 7 2