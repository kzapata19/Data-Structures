var LinkedList = function(){
  var list = Object.create(linkPrototype);
  list._storage = {};
  list.head = null;
  list.tail = null;
  return list;
};

var linkPrototype = {};

linkPrototype.addToTail = function(value){
  var node = Node(value);
  if(!this.head){
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    this.tail = node;
  }
};

linkPrototype.removeHead = function(){
  var toDelete;
  if(!this.head.next){
    toDelete = this.head;
    delete this.head;
    delete this.tail;
    return toDelete;
  } else {
    toDelete = this.head;
    this.head = toDelete.next;
    return toDelete;
  }
};

linkPrototype.contains = function(target){
  var currentNode = this.head;
  if(!this.head) {
    return false;
  } else {
    while(currentNode){
      if(currentNode.value === target) return true;
      else {
        currentNode = currentNode.next;
      }
    }
    return false;
  }
};

var Node = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};