(function(){
  /**
   * 对两个字符串类型的浮点数进行相加操作
   * @param {string | number} a 
   * @param {string | number} b 
   * @returns {string}
   */
  function addTwoFloat(a, b){
    if((typeof a !== 'string' && typeof a !== 'number') || (typeof b !== 'string' && typeof b !== 'number')){
      return NaN;
    }
    let numberArrA = ('' + a).split('.');
    let numberArrB = ('' + b).split('.');
    if(!numberArrA[1] && !numberArrB[1]){  // a, b 皆为整数
      return addTwoNumber(numberArrA[0], numberArrB[0]);
    } else if(!numberArrA[1]) {  // b 为整数，a 为浮点数
      return `${addTwoNumber(numberArrA[0], numberArrB[0])}.${numberArrB[1]}`
    } else if(!numberArrB[1]){   // b 为浮点数，a 为整数
      return `${addTwoNumber(numberArrA[0], numberArrB[0])}.${numberArrA[1]}`
    } else {              // a, b 皆为浮点数
      let arrA = numberArrA[1].split('');
      let arrB = numberArrB[1].split('');
      let minLen = Math.min(arrA.length, arrB.length);
      let res = [];
      let sum = 0;
      let add = false;
      for(let i = minLen - 1; i >= 0; i--){
        sum = add + Number(arrA[i] || 0) + Number(arrB[i] || 0);
        add = sum >= 10;
        res.unshift(sum % 10);
      }
      res = res.concat(arrA.slice(minLen), arrB.slice(minLen))
      return `${addTwoNumber(numberArrA[0], numberArrB[0], add)}.${res.join('')}`;
    }
  }
  /**
   * 对两个字符串类型整数进行相加操作
   * @param {string | number} a 
   * @param {string | number} b 
   * @param {boolean | string | number} add 
   * @returns {string}
   */
  function addTwoNumber(a, b, add = false){
    if((typeof a !== 'string' && typeof a !== 'number') || (typeof b !== 'string' && typeof b !== 'number')){
      return NaN;
    }
    let arrA = ('' + a).split('').reverse();
    let arrB = ('' + b).split('').reverse();
    let i = 0, j = 0;
    let res = [];
    let sum = 0;
    while(arrA[i] !== undefined || arrB[j] !== undefined){
      sum = Number(add || 0) + Number(arrA[i] || 0) + Number(arrB[j] || 0);
      add = sum >= 10;
      res.push(sum % 10);
      i++;
      j++;
    }
    add && res.push(1);
    return res.reverse().join('');
  }
  addTwoFloat('123123123.223', '2381297329812.1221');
})