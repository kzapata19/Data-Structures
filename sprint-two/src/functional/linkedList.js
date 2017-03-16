var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    if(!list.head){
      list.head = node;
      list.tail = node;
    } else {
      list.tail.next = node;
      list.tail = node;
    }
  };

  list.removeHead = function() {
    var toDelete
    if(!list.head.next){
      toDelete = list.head;
      list.head = null;
      list.tail = null;
      return toDelete.value;
    } else {
      toDelete = list.head;
      list.head = toDelete.next;
      return toDelete.value;
    }
  };

  list.contains = function(target) {

    var currentNode = list.head;
    while(currentNode !== null && currentNode.value !== target){
      currentNode = currentNode.next;
    }
    if(currentNode !== null && currentNode.value === target){
      return true;
    } else {
      return false;
    }
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
