(function(){
  function findRooting(num){
    function root(a, b){
      var average = (a+b)/2;
      if(Math.abs(num - Math.pow(average, 2)) < 0.0000000001){
        return average;
      }
      if(Math.pow(average, 2) > num){
        return root(a, average);
      } else if(Math.pow(average, 2) < num){
        return root(average, b);
      }
    }
    let result = root(0, num);
    return result;
  }
  findRooting(9) 
})()