var LinkedList = function(){
  this.head = null;
  this.tail = null;
};

var Node = function(value){
  this.value = value;
  this.next = null;
};

LinkedList.prototype.addToTail = function(value){
  var node = new Node(value);
  if(!this.head){
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    this.tail = node;
  }
};

LinkedList.prototype.removeHead = function(){
  var toDelete;
  if(!this.head.next){
    toDelete = this.head;
    this.head = null;
    this.tail = null;
    return toDelete.value;
  } else {
    toDelete = this.head;
    this.head = toDelete.next;
    return toDelete.value;
  }
};

LinkedList.prototype.contains = function(target){
  var currentNode = this.head;
  if(!this.head){
    return false
  } else {
    while(currentNode){
      if(currentNode.value === target){
        return true
      } else {
        currentNode =  currentNode.next;
      }
    }
    return false;
  }
};
