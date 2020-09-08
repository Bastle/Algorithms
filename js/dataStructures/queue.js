

//队列  先进先出   FIFO  first in first out  

//   enqueue    入列
//   dequeue    出列
//   front      查看列头

// var Queue = function (){
//   var items = [];
//   this.enqueue = function(element){
//     items.push(element);
//   }
//   this.dequeue = function(){
//     return items.shift();
//   }
//   this.front = function(){
//     return items[0]
//   }
//   this.isEmpty = function(){
//     return items.length === 0
//   }
//   this.getItems = function(){
//     return items;
//   }
//   this.size = function(){
//     return items.length;
//   };
// }

// // 循环队列 击鼓传花
// var names = ['a','b','c','d','e','f','g','h','i', 'j'];
// var number = 3;
// var chuanhua = function(names, number){
//   var q = new Queue();
//   for(var i = 0; i < names.length; i ++){
//     q.enqueue(names[i]);
//   }
//   var out = [];
//   while(q.size() > 1){
//     for(var i = 0; i < number-1; i ++){
//       q.enqueue(q.dequeue())
//     }
//     let a = q.dequeue();
//     console.log('淘汰的玩家是' + a)
//     out.push(a); 
//   }
//   console.log(q.getItems())
//   console.log(out)
// }


// 优先级队列  priority queue
// 会员 高级会员
// Object{
//    name: 'naruto',
//    priority: 5
// }
// Object{
//    name: 'sasuke',
//    priority: 4
// }

var PriorityQueue = function (){
  var items = [];
  // 辅助类
  var QueueItem = function(element, priority){
    this.element = element;
    this.priority = priority;
  }
  this.enqueue = function (element, priority){
    var queueItem = new QueueItem(element, priority);
    var added = false;
    for(var i = 0; i < items.length; i++){
      if(priority > items[i].priority){
        items.splice(i,0,queueItem);
        added = true;
        break;
      }
    }
    if(!added){
      items.push(queueItem);
    }
  }
  this.dequeue = function(){

  }
  this.getItems = function (){
    return items;
  }
}

var pq = new PriorityQueue();
pq.enqueue('naruto', 2);
pq.enqueue('saseka', 4);
console.log(pq.getItems());




var Queue = function(){
  var items = [];
  this.enqueue = function(element){
    items.push(element);
  }
  this.dequeue = function() {
    return items.shift();
  }
  this.isEmpty = function() {
    return items.length === 0;
  }
  this.size = function() {
    return items.length
  }
  this.getItems = function(){
    return items;
  }
}


var names = ['小红', '小蓝', '小明', '小军', '小宝', '琪琪', '小胖'];
var number = 3;

function pickTheOne (names, number){
  var queue = new Queue();
  for(var i = 0; i < names.length; i ++){
    queue.enqueue(names[i]);
  }
  console.log(queue.getItems());
  while(!queue.isEmpty()){
    for(var j = 1; j < number; j++){
      queue.enqueue(queue.dequeue())
    }
    console.log(queue.dequeue());
  }
}

pickTheOne(names, number);
