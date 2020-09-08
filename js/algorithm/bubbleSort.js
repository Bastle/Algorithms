(function(){
  // 冒泡排序 通过重复比较相邻数字的大小，达到将较大的数字不断冒泡到数组的尾部的一种排序算法
  // 重点在于 1、替换的方法    es6 数组解构: [a, b] = [b, a]   利用中间变量  var temp = a[i]; a[i] = a[j]; a[j] = temp;
  function bubbleSort(list) {
    if(Array.isArray(list)){
      let len = list.length;
      for(let i = 0; i < len; i++){
        for(let j = 0; j < len - i - 1; j++){
          if(list[j] > list[j+1]){
            [list[j], list[j+1]] = [list[j+1], list[j]]
          }
        }
      }
    }
    return list;
  }
  console.log(bubbleSort([3,2,4,1,5,3]));
})()