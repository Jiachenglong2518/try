//括号匹配
// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/valid-parentheses
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  var map = {
      '(':1,
      ')':-1,
      '{':2,
      '}':-2,
      '[':3,
      ']':-3
  }
  var s_arr = s.split('');
  var new_arr = [];
  s_arr.forEach((item,index)=>{
    console.log(map[item]);
    if(map[item] > 0){
      new_arr.push(map[item])
    } else {
      if(map[item] + new_arr[new_arr.length-1] == 0){
          new_arr.pop();
      }
    }
    console.log(new_arr);
  })
  if(new_arr.length > 0){
      return false
  } else {
      return true
  }
};
isValid("(){}[]")