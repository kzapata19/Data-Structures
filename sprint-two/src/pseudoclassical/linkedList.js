var LinkedList = function(){
  this.list = {};
  this.head = null;
  this.tail = null;
};

var Node = function(value){
  this.value = value;
  this.next = null;
};

LinkedList.prototype.addToTail = function(value){
  var node = Node(value);
  if(!this.head){
    this.head = this.tail = node;
  } else {
    this.tail.next = node;
    this.tail = node;
  }
};

LinkedList.prototype.removeHead = function(){
  var toDelete;
  if(!this.head.next){
    toDelete = this.head;
    delete this.head;
    delete this.tail;
    return toDelete;
  } else {
    toDelete = this.head;
    this.head = toDelete.next;
    return toDelete.value;
  }
};

LinkedList.prototype.contains(target){
  var currentNode = this.head;
  while(currentNode){
    if(currentNode && currentNode.value === target){
      return true;
    } else {
      return false;
    }
  };
};