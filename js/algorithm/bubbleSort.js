(function(){
  // 冒泡排序 通过重复比较相邻数字的大小，达到将较大的数字不断冒泡到数组的尾部的一种排序算法
  // 重点在于 
  // 1、第一个循环中 循环变量 i 代表要进行冒泡的次数， 
  // 2、第二个循环中，j 代表要得到第 j 大的数所要进行的替换操作，因为已经进行了 i 次的冒泡，所以只需要再进行 len - i 次比较就可以了，
  //    又因为每一项要与其后一项进行比较，所以最后一项不需要比较，要在 len - i 的基础上再 -1；

  // 2、替换的方法    es6 数组解构: [a, b] = [b, a]   利用中间变量  var temp = a[i]; a[i] = a[j]; a[j] = temp;
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