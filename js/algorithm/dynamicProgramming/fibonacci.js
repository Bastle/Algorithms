(function(){
  function fibonacci(n){
    let dp = [0, 1];
    for(let i = 2; i <= n; i++){
      dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n];
  }
  function fibonacci2(n){
    if(n === 0) return 0;
    if(n === 1) return 1;
    let pre = 0;
    let cur = 1;
    for(let i = 2; i <= n; i++){
      cur = cur + pre;
      pre = cur - pre;
    }
    return cur;
  }
  function climbStair(n){
    let dp = [0, 1, 2];
    for(let i = 3; i <= n; i++){
      dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n];
  }
  function climbStair2(n){
    if(n <= 0) return 0;
    if(n === 1) return 1;
    if(n === 2) return 2;
    let pre = 1;
    let cur = 2;
    for(let i = 3; i <= n; i++){
      cur = cur + pre;
      pre = cur - pre;
    }
    return cur;
  }
})()