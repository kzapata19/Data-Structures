var DoublyLinkedList = function(){
  this.head = null;
  this.tail = null;
  this.length = 0;
};

var Node = function(value){
  this.value = value;
  this.previous = null;
  this.next = null;
};

DoublyLinkedList.prototype.addToHead = function(value){
  var node = new Node(value);
  if(this.isEmpty()){
    this.head = node;
    this.tail = node;
  } else {
      var formerHead = this.head;
      node.next = formerHead;
      formerHead.previous = node;
      this.head = node;
      if(this.length === 1){
        this.tail = formerHead;
      }
  }
  this.length++;
};

DoublyLinkedList.prototype.addToTail = function(value){
  var node = new Node(value);
  if(this.isEmpty()){
    this.head = node;
    this.tail = node;
  } else {
    var formerTail = this.tail;
    formerTail.next = node;
    node.previous = formerTail;
    this.tail = node;
  }
  this.length++;
};

DoublyLinkedList.prototype.insert = function(position, value){

};

DoublyLinkedList.prototype.removeHead = function(){
  if(!this.isEmpty()){
    var toDelete = this.head;
    if(this.size() === 1){
      this.head = null;
      this.tail = null;
    } else {
      this.head = toDelete.next;
      this.head.previous = null;
    }
    this.length--;
    return toDelete.value;
  }
  return null;
};

DoublyLinkedList.prototype.removeTail = function(){
  if(!this.isEmpty()){
    var deletedTail =  this.tail;
    if(this.size() === 1){
      this.head = null;
      this.tail = null;
    } else {
      this.tail = deletedTail.previous;
      this.tail.next = null;
    }
    this.length--;
    return deletedTail.value;
  }
  return null;
};

DoublyLinkedList.prototype.remove = function(value){
  if(!this.isEmpty()){
    if(value === this.head.value){
      // toDelete = this.head;
      return this.removeHead();
    } else if(value === this.tail.value){
      return this.removeTail();
    } else {
      var currentNode = this.head,
      previous;
      this.length--;
      while(currentNode){
        if(value === currentNode.value){
          previous.next = currentNode.next
          currentNode.next.previous = previous.next;
          return "this is the deleted val: " + currentNode.value;
        }
        previous = currentNode;
        currentNode = previous.next;
      }
    }
  }
  return null;
};

DoublyLinkedList.prototype.removeAt = function(position){

};

DoublyLinkedList.prototype.indexOf = function(value){

};

DoublyLinkedList.prototype.contains = function(target){
  var currentNode = this.head;
  if(this.isEmpty()){
    return false;
  } else {
    while(currentNode){
      if(currentNode.value === target){
        return true;
      } else {
        currentNode = currentNode.next
      }
    }
    return false;
  }
};

DoublyLinkedList.prototype.retrieveHead = function(){
  if(!this.isEmpty()){
    return this.head;
  }
  return null;
};

DoublyLinkedList.prototype.retrieveTail = function(){
  if(!this.isEmpty()){
    return this.tail;
  }
  return null;
};

DoublyLinkedList.prototype.isEmpty = function(){
  return this.size() === 0;
};

DoublyLinkedList.prototype.size = function(){
  return this.length;
};

DoublyLinkedList.prototype.toString = function(){

};

var myDD = new DoublyLinkedList();
myDD.addToTail("one");
// console.log("after one:", myDD);
myDD.addToTail("two")
// // console.log("after two: ", myDD)
myDD.addToTail("three")
// myDD.addToTail("four")
console.log("after two: ", myDD)
console.log(myDD.remove("two"));
console.log(myDD)