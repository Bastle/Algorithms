//栈  后进先出的数据结构 LIFO

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
