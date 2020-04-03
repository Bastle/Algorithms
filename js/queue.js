


//队列  先进先出   FIFO  first in first out  

//   enqueue    入列
//   dequeue    出列
//   front      查看列头

var Queue = function (){
  var items = [];
  this.enqueue = function(element){
    items.push(element);
  }
  this.dequeue = function(){
    return items.shift();
  }
  this.front = function(){
    return items[0]
  }
  this.isEmpty = function(){
    return items.length === 0
  }
  this.getItems = function(){
    return items;
  }
  this.size = function(){
    return items.length;
  };
}

// 循环队列 击鼓传花
var names = ['a','b','c','d','e','f','g','h','i', 'j'];
var number = 3;
var chuanhua = function(names, number){
  var q = new Queue();
  for(var i = 0; i < names.length; i ++){
    q.enqueue(names[i]);
  }
  var out = [];
  while(q.size() > 1){
    for(var i = 0; i < number-1; i ++){
      q.enqueue(q.dequeue())
    }
    let a = q.dequeue();
    console.log('淘汰的玩家是' + a)
    out.push(a); 
  }
  console.log(q.getItems())
  console.log(out)
}


// 优先级队列  priority queue
// Object{
//    name: 'naruto',
//    priority: 5
// }
var PriorityQueue = function (){
  var items = [];
  var QueueItem = function(element, priority){
    this.element = element;
    this.priority = priority;
  }
}