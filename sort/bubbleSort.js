/**
 * @description 冒泡排序
 * 比较相邻的元素。如果第一个比第二个大，就交换它们两个。
 * 对每一对相邻元素做同样的工作，从开始第一对到结尾的最后一对。这步做完后，最后的元素会是最大的数。
 * 针对所有的元素重复以上的步骤，除了最后一个。
 * 持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。
 */

/**
 * 冒泡排序算法实现
 * @param {Array} arr - 需要排序的数组
 * @returns {Array} - 排序后的数组
 */
const bubbleSort = (arr) => {
  const len = arr.length;
  
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
      }
    }
  }
  
  console.log(arr);
  return arr;
};

// 测试数组
const arr = [1, 3, 5, 2, 8, 3];
bubbleSort(arr);
