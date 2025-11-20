// 实现一个队列 ，要求task里面的任务是串行执行的
// new Queue()
//   .task(1000, () => { console.log(1) })
//   .task(2000, () => { console.log(2) })
//   .start();

class Queue {
  constructor () {
    this.taskList = []
    this.nextId = 0
  }
  task (time, taskItem) {
    this.taskList.push({
      time: time,
      task: taskItem
    })  
    // 还有其他方式实现吗？
    return this
  }

  start () {
    this.handle(1)
  }

  handle (max = 1) {
    new Promise((resolve,rej) => {
      const currentTask = this.taskList[this.nextId]
      currentTask.task()
      setTimeout(() => {
        resolve()
        this.nextId++
        if (this.nextId < this.taskList.length) {
          this.handle(max)
        }
      },currentTask.time)
    })
  }
}

// new Queue()
//   .task(1000, () => { console.log(1) })
//   .task(1000, () => { console.log(2) })
//   .start();



// 假设把某股票的价格按照时间先后顺序存储在数组中，请问买卖该股票一次可能获得的最大利润是多少？

// 示例 1:
// 输入: [7,1,5,3,6,4]
// 输出: 5
// 解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 =6）的时候卖出，最大利润 = 6-1 = 5 。注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格。
// 示例 2:
// 输入: [7,6,4,3,1]
// 输出: 0
// 解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。

function getMax(arr) {
  let max = 0
  console.log(arr, 'arr')
  const map = {}
  for (var i = 0; i< arr.length; i++) {
    
    // const startPrice = arr[i]
    // for(var j = i+1 ;j< arr.length; j++ ) {
    //   if (arr[j] > startPrice) {
    //     max = max > (arr[j] - arr[i]) ? max : arr[j] - arr[i]
    //   }
    // }
  }
  console.log(max, 'max')
  return max;
}

// getMax([7,1,5,3,6,4])
// getMax([7,6,4,3,1])

setTimeout(() => {
  console.log(1)
});
new Promise(async (res,rej) => [
  await console.log(3)
]).then(() => {
  console.log(5)
})
console.log(4)

class eventBus {
  constructor () {
    this.eventListMap = {}
  }
  on (eventName, cb) {
    if (!this.eventMap[eventName]) {
      this.eventListMap[eventName] = {
        name: eventName,
        cb: cb,
      }
    }
  }
  emit (eventName) {
    for(let i in this.eventListMap) {
      if (i.name === eventName) {
        cb()
      }
    }
    
  }
}
