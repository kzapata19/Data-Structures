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
    this.length--;
    if(!this.head.next){
      this.head = null;
      this.tail = null;
    } else {
      this.head = toDelete.next;
      toDelete.previous = null;
    }
    return toDelete.value;
  }
  return null;
};

DoublyLinkedList.prototype.removeTail = function(){

};

DoublyLinkedList.prototype.remove = function(value){

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
  return false;
};

DoublyLinkedList.prototype.retrieveTail = function(){

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
console.log(myDD.addToHead("one"));
console.log("after one:", myDD);
console.log(myDD.addToHead("two"));
console.log("after two: ", myDD)
console.log(myDD.addToHead("three"));
console.log("after three: ", myDD)