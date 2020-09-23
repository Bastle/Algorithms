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