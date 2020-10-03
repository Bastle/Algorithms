(function(){
  let arr = [10,2,3,7,23,12,33,21,55,3,8,5];
  function quickSort(arr){
    // 1、找个标志位
    // 2、数组切成两半
    if(arr.length < 2) return arr;
    let flag = arr.shift();
    let left = [];
    let right = [];
    for(i = 0; i < arr.length; i++){
      if(arr[i] < flag){
        left.push(arr[i])
      } else {
        right.push(arr[i])
      }
    }
    return quickSort(left).concat(flag, quickSort(right));
  }
  // TODO 原地快排 不占用额外空间  原地交换数据
  // 两个指针，往中间遍历，
  function quickSort1(arr, low = 0, high = arr.length - 1){
    
  }
  console.log(quickSort(arr));
})()