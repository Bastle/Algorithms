(function(){
  // 最少硬币找零问题
  function minCoinChange(coins, amount){
    let result = [];
    let sum = 0;
    for(let i = 0; i < coins.length; i++){
      while(sum + coins[i] <= amount){
        sum += coins[i];
        result.push(coins[i])
      }
    }
    return result;
  }
  console.log(minCoinChange([4,3,1], 6));
  
})()