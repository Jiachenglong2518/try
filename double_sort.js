//双重排序
function sort_more(data) {
  data.sort(function (a, b) {
    if (a.index == b.index) {
      return b.key - a.key;
    } else {
      return a.index - b.index;
    }
  });
  console.log(data);

  return data;
}
var sort_arr = [
  {
    index: 0,
    key: 2,
  },
  {
    index: 3,
    key: 1,
  },
  {
    index: 1,
    key: 3,
  },
  {
    index: 3,
    key: 2,
  },
];
sort_more(sort_arr, "index", "key");
