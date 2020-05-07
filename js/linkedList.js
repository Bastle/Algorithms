

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
    var node = new Node(element);
    if(position === 0 || !head){
      node.next = head;
      head = node;
    } else if(head){
      var index = 0;
      var current = head;
      var previous = null;
      while(index < position){
        previous = current;
        current = current.next;
        index++;
      };
      previous.next = node;
      node.next = current;
    }
  }
  this.remove = function(element) {

  }
  this.removeAt = function(position) {

  }
}

var ll = new LinkedList();
ll.append(1);
ll.append(2);
ll.append(3);
ll.insert(0,0);
console.log(ll);
console.log(ll.getHead() );
