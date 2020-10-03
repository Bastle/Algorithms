(function(){
  function binarySearch (arr, target){
    let low = 0, 
    high = arr.length - 1,
    mid;
    while(low <= high){
      mid = Math.floor((low + high) / 2);
      if(arr[mid] === target){
        return mid
      }
      if(target > arr[mid]){
        low = mid + 1;
      }
      if(target < arr[mid]){
        high = mid - 1;
      }
    }
    return -1;
  }
})()