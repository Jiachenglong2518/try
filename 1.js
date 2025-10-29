// class EventBus {
//   constructor () {
//     this.a = '1'
//     this.events = {}
//   }

//   on (eventName, cb) {
//     if (!this.events[eventName]) {
//       this.events[eventName] = []
//     }
//     this.events[eventName].push(cb)
//   }

//   off (eventName, cb) {
//     if (!this.events[eventName]) {
//       return
//     }
//     this.events[eventName] = this.events[eventName].filter(item => item !== cb)
//   }

//   emit (eventName, data) {
//     if (!this.events[eventName]) return
//     this.events[eventName].forEach(cb => cb(data))
//   }
// }

// 最长回文子串
// abcba abba
function a (str) {
  if (str.length < 2) {return str}
  const n = str.length
  const dp = Array.from(Array(n), () => Array(n).fill(false))
  let start = 0;
  let maxLength = 1;
  // 初始化dp
  for(let i =0; i < n; i++){
    dp[i][i] = true;
  }
  // 遍历子串长度
  for (let len = 2; len <= n ;len++ ) {
    for (let i = 0; i <= n - len; i++) {
      // 结束索引
      const j = i + len - 1
      // 判断是否为回文
      if(len == 2) {
        dp[i][j] = (str[i] === str[j])
      } else {
        dp[i][j] = (str[i] === str[j]) && dp[i+1][j-1]
      }
      if (dp[i][j] && len > maxLength) {
        maxLength = len
        start = i
      }
    }
  }
  console.log(str.substring(start, start+maxLength))
  return str.substring(start, start + maxLength)

}
a('aba1cbbc1')


