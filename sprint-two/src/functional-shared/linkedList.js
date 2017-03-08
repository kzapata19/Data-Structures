var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  _.extend(list, listMethods);
  /*
  list.addToTail = listMethods.addToTail;
  list.removeHead = listMethods.removeHead;
  list.contains = listMethods.contains;
  */

  return list;
};

var Node = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};

var listMethods = {
  addToTail: function(value){
    var node = Node (value);
    if(!this.head) this.head = this.tail = node;
    else {
      this.tail.next = node;
      this.tail = node;
    }
  },

  removeHead: function(){
    var toDelete = this.head;
    if(!this.head) return this.head;
    else if(!this.head.next){
      delete this.head;
      delete this.tail;
      return toDelete.value;
    } else {
      this.head = toDelete.next;
      return toDelete.value;
    }
  },

  contains: function(target){
    var currentNode =  this.head;
    while(currentNode){
      if(currentNode.value === target) return true;
      else {
        currentNode = currentNode.next
      }
    }

    return false;
  }
};