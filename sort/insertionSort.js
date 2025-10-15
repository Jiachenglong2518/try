/**
 * @description 插入排序
 * 初始化：将列表分为已排序部分和未排序部分。初始时，已排序部分只包含第一个元素，未排序部分包含剩余元素。
 * 选择元素：从未排序部分中取出第一个元素。
 * 插入到已排序部分：将该元素与已排序部分的元素从后向前依次比较，找到合适的位置插入。
 * 重复步骤：重复上述步骤，直到未排序部分为空，列表完全有序。
 */

/**
 * 插入排序算法实现
 * @param {Array} arr - 需要排序的数组
 * @returns {Array} - 排序后的数组
 */
const insertionSort = (arr) => {
  let preIndex, curr;
  
  for (let i = 1; i < arr.length; i++) {
    preIndex = i - 1;
    curr = arr[i];
    
    while (preIndex >= 0 && arr[preIndex] > curr) {
      arr[preIndex + 1] = arr[preIndex];
      preIndex--;
    }
    
    arr[preIndex + 1] = curr;
  }
  
  console.log(arr);
  return arr;
};

// 测试数组
const arr = [1, 3, 5, 2, 8, 3];
insertionSort(arr);