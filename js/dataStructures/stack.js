//栈  后进先出的数据结构 LIFO

// 作用  在编程语言的编译器和内存中保存变量、方法调用

// push     入栈
// pop      出栈
// peek 窥视  查看栈顶 
// isEmpty  是否为空
// clear    清空
// size     长度


// 通过数组实现

var Stack = function(){
  var items = [];
  this.push = function (element){
    items.push(element);
  }
  this.pop = function (){
    return items.pop();
  }
  this.getItems = function (){
    return items;
  }
  this.peek = function (){
    return items[items.length - 1]
  }
  this.isEmpty = function(){
    return items.length == 0;
  }
  this.clear = function(){
    items = [];
  }
  this.size = function(){
    return items.length;
  }
}


var to2 = function (number){
  var s = new Stack();
  var yushu;
  var result = '';
  while(number > 0){
    yushu = number % 2;
    s.push(yushu);
    number = Math.floor(number/2);
  }
  while(!s.isEmpty()){
    result += s.pop();
  }
  // for (var i = 0, len = s.size(); i < len; i++){
  //   result = result + s.pop();
  // }
  return result;
}
console.log(to2(100));


// 先完成fn1，再完成fn2

var fn1 = function(){
  return console.log('fn1 finish ')
}

var fn2 = function(){
  fn1()
  return console.log('fn2 finish ')
}

// 先调用先入栈

// var app = function (){
//   app()
// }
//递归 函数调用自己本身

function isMatch(symbols){
  let stack = new Stack();
  let left = '{[(<';
  let right = '}])>';
  for(let i = 0; i < symbols.length; i++){
    let s = symbols[i];
    if(left.includes(s)){
      stack.push(s);
    } else if(right.includes(s)){
      let popVal = stack.pop();
      if(left.indexOf(popVal) !== right.indexOf(s)){
        return false;
      }
    }
  }
  return true;
}
console.log(isMatch('{[}'));
