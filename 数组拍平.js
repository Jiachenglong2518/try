const arr = [
  {
    id: 1,
    name: '部门1',
  },
  {
    id: 2,
    name: '部门2',
  },
  {
    id: 3,
    name: '部门3',
    children: [
      {
        id: 4,
        name: '部门4',
        children: [
          {
            id: 6,
            name: '部门6',
          }
        ]
      },
      {
        id: 5,
        name: '部门5',
      }
    ] 
  }

]

// 数组拍平
function flatten1(arr, result = []) {
  arr.forEach(item => {
    console.log(item, 'item')
    result.push({
      id: item.id,
      name: item.name
    })
    if (item.children) {
      flatten(item.children, result)
    }
  })
  return result
}
// console.log(flatten1(arr))


const flatten2 = (arr) => {
  let res = []
  arr.forEach(item => {
    const { children, ...rest } = item;
    res.push(rest)
    if (children) {
      console.log(res, 'res')
      res = res.concat(flatten2(children))
    }
  })
  return res
}
console.log(flatten2(arr), 'res2')



// function flatten3DArray(arr) {
//   let result = [];
//   for (let element of arr) {
//       if (Array.isArray(element)) {
//           // 如果当前元素是数组，递归调用
//           result = result.concat(flatten3DArray(element));
//       } else {
//           // 如果当前元素不是数组，直接添加到结果中
//           result.push(element);
//       }
//   }
//   return result;
// }

// // 示例三维数组
// const threeDArray = [
//   [[1, 2], [3, 4]],
//   [[5, 6], [7, 8]],
//   [[9, 10], [11, 12]]
// ];

// // 铺平数组
// const flattenedArray = flatten3DArray(threeDArray);
// console.log(flattenedArray);
