

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


class Node {
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class LinkedListClass {
  constructor(){
    this.head = null;
    this.length = 0;
  }
  append(data){
    let node = new Node(data);
    if(this.head) {
      let cur = this.head;
      while(cur.next){
        cur = cur.next;
      }
      cur.next = node;
    } else {
      this.head = node;
    }
    this.length++
    return true;
  }
  add(data){
    let node = new Node(data);
    if(!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return true;
  }
  insert(data, pos){
    if(pos >= this.length){
      this.append(data);
    }
    if(pos === 0 || !this.head){
      this.add(data);
    }
    let node = new Node(data);
    let index = 0;
    let pre = this.head;
    let cur = this.head.next;
    while(cur !== null){
      index ++;
      if(index === pos){
        node.next = cur;
        pre.next = node;
        return true;
      } else {
        pre = cur;
        cur = cur.next
      }
    }
    return false;
  }
  indexOf(data){
    if(!this.head) return -1;
    let index = 0;
    let cur = this.head;
    while(cur.next !== null){
      if(cur.data === data){
        return index;
      }
      index++
      cur = cur.next;
    }
    return cur.data === data ? index : -1;
  }
  remove(data){
    this.removeAt(this.indexOf(data));
  }
  removeAt(pos){
    if(pos < 0 || pos >= this.length) return false;
    if(pos === 0){
      this.head = this.head.next;
      this.length--;
      return true;
    }
    let index = 1;
    let pre = this.head;
    let cur = this.head.next;
    while(cur.next !== null){
      if(index === pos){
        pre.next = cur.next;
        this.length--;
        return true;
      }
      index++;
      pre = cur;
      cur = cur.next;
    }
    if(index === pos){
      pre.next = cur.next;
      this.length--;
      return true;
    }
    return false;
  }
  clear(){
    this.head = null;
  }
  size(){
    return this.length;
  }
  getHead(){
    return this.head;
  }
}

let linkedlist = new LinkedListClass();
linkedlist.append(1);
linkedlist.append(2);
linkedlist.add(0);
console.log(linkedlist);
console.log(linkedlist.indexOf(2));
linkedlist.remove(1);
console.log(linkedlist);
