

// 链表
var LinkedList = function() {
  //链表头
  var head = null;
  //链表长度
  var length = 0;
  //辅助类
  var Node = function(element){
    this.element = element;
    this.next = null;
  }
  
  this.append = function(element) {
    var node = new Node(element);
    if(head){
      var current = head;
      while(current.next){
        current = current.next
      }
      current.next = node;
    } else {
      head = node;
    }
    length++;
  }
  this.getHead = function() {
    return head;
  }
  this.indexOf = function(element) {
    if(head){
      let current = head;
      for(var i = 0; i < length; i++){
        if(current.element == element){
          return i;
        }
        current = current.next;
      }
    }
    return -1;
  }
  this.insert = function(position, element) {
    // 越界问题
    if(position > -1 && position < length){
      var node = new Node(element);
      var current = head;
      if(position === 0 || !head){
        head = node;
        node.next = current;
      } else if(head){
        var index = 0;
        var previous = null; 
        while(index < position){
          previous = current;
          current = current.next;
          index++;
        };
        node.next = previous.next;
        previous.next = node;

        // previous.next = node;
        // node.next = current;
      }
      length++;
    }
  }
  this.remove = function(element) {
    this.removeAt(this.indexOf(element));
  }
  this.removeAt = function(position) {
    if(position > -1){
      if(position === 0 && head){
        head = current.next;
      } else if(head){
        var index = 0;
        var current = head;
        var previous = null;
        while(index < position){
          previous = current;
          current = current.next;
          index++;
        }
        previous.next = current.next;
        length--;
      }
    }
  }
}

var ll = new LinkedList();
console.log(ll.getHead());
ll.append(1);
console.log(ll.getHead());
ll.append(2);
console.log(ll.getHead());
ll.append(3);
console.log(ll.getHead());
ll.insert(0,0);
console.log(ll.getHead());
ll.remove(3);
console.log(ll.getHead());
ll.insert(12,10);
console.log(ll.getHead());

