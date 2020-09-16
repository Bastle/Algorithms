
// 归并排序
// 通过将数组不断拆分，直至拆分至最小数量后对数组进行合并操作，
// 在合并操作中使用双指针按照顺序将数字逐个添加至新的数组中，
// 最后得到一个已经排好顺序的数组。
function mergeSort(list){
  function _merge(left, right){
    var result = [], i = 0, j = 0;
    while(i < left.length && j < right.length){
      if(left[i] < right[j]){
        result.push(left[i]);
        i++
      } else {
        result.push(right[j])
        j++
      }
    }
    return result.concat(left.slice(i), right.slice(j));
  }
  function _ms(a) {
    if(a.length < 2) return a;
    let pivotIndex = Math.floor(a.length/2);
    let left = a.slice(0, pivotIndex);
    let right = a.slice(pivotIndex);
    return _merge(_ms(left), _ms(right));
  }
  return _ms(list);
}
console.log(mergeSort([3,12,5,6,95,1,3]));