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
  this.length++;
  if(this.isEmpty()){
    this.head = node;
    this.tail = node;
  } else {
    var formerHead = this.head;

  }

};

DoublyLinkedList.prototype.addToTail = function(value){

};

DoublyLinkedList.prototype.insert = function(position, value){

};

DoublyLinkedList.prototype.removeHead = function(){

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
  return this.length === 0;
};

DoublyLinkedList.prototype.size = function(){
  return this.length;
};

DoublyLinkedList.prototype.toString = function(){

};

