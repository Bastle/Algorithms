(function(){
  // 最少硬币找零问题
  function minCoinChange(coins, amount){
    let result = [];
    let sum = 0;
    for(let i = 0; i < coins.length; i++){
      let j = 0;
      while(sum + coins[i] <= amount){
        sum += coins[i];
        j++;
      }
      result.push(j);
    }
    return result;
  }
  minCoinChange([5,3,1], 0);
  [1,2,3,4]
  
})()