var LinkedList = function(){
  this.head = null;
  this.tail = null;
  this.length = 0;
};

var Node = function(value){
  this.value = value;
  this.next = null;
};

LinkedList.prototype.addToTail = function(value){
  var node = new Node(value);
  this.length++;
  if(!this.head){
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    this.tail = node;
  }
};

LinkedList.prototype.insert = function(position, value){
  var index;
};

LinkedList.prototype.removeHead = function(){
  var toDelete;
  if(!this.head.next){
    toDelete = this.head;
    this.head = null;
    this.tail = null;
    this.length--;
    return toDelete.value;
  } else {
    toDelete = this.head;
    this.head = toDelete.next;
    this.length--;
    return toDelete.value;
  }
};

LinkedList.prototype.removeTail = function(){
  var toDelete;
  if(this.isEmpty()){
    return null; //empty linked list
  } else if(!this.head.next){ //if length = 1
    toDelete = this.head;
    this.head = null;
    this.tail = null;
    this.length--;
    return toDelete.value;
  } else if(this.length === 2){
    toDelete = this.tail;
    this.tail = this.head;
    this.length--;
    // console.log("toDelete value:" + toDelete.value)
    return toDelete.value;
  } else {
    var index = 0,
    current = this.head,
    previous;
    while(index++ < this.length && current.next !== null){
      previous = current;
      current = previous.next;
    }
    this.tail = previous;
    previous.next = null;
    this.length--;
    return current.value;
  }
};

//remove node by target value
//if head
//if tail
//if in between
LinkedList.prototype.remove = function(value){
  var toDelete;
  if(!this.isEmpty()){
    if(value === this.head.value){
      toDelete = this.head;
      this.removeHead()
      return toDelete.value;
    } else if(value === this.tail.value){
      toDelete = this.tail;
      this.removeTail();
      return toDelete.value;
    } else {
      var currentNode = this.head,
          previous;
      while(currentNode){
        if(value === currentNode.value){
          previous.next = currentNode.next;
          this.length--;
          return currentNode.value;
        }
        previous = currentNode;
        currentNode = previous.next
      }
      return null; //no matching value to delete
    }
  }
  return null; //list is empty
};

//remove node by target position, where position >= 0
LinkedList.prototype.removeAt = function(position){
  var current = this.head,
      index = 0,
      previous;

  if(!this.isEmpty()){
    if(position === index){
      return this.removeHead()
    }
    if(position === this.length - 1){
      return this.removeTail();
    }
    if(position > 0 && position <= this.length - 2){
      while(index++ < position){
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
      this.length--;
      return current["value"];
    }
    return null; //position >= this.length;
  }
  return null; //failed to remove; empty linked list
};

LinkedList.prototype.indexOf = function(value){
  var index = 0,
      currentNode = this.head;

  if(!this.isEmpty()){
    if(value === this.head.value){
      return index;
    }

    if(value ===  this.tail.value){
      return this.size() - 1;
    }

    while(currentNode){
      if(value === currentNode.value){
        return index;
      }
      currentNode = currentNode.next;
      index++;
    }

    return -1; //value not found in list
  }

  return -1 //list is empty
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

LinkedList.prototype.retrieveHead = function(){
  if(!this.isEmpty()){
    return this.head;
  }
  return false; //empty linked list
};

LinkedList.prototype.retrieveTail = function(){
  if(!this.isEmpty()){
    return this.tail;
  }
  return false; //empty linked list
};

LinkedList.prototype.isEmpty = function(){
  return this.length === 0;
};

LinkedList.prototype.size = function(){
  return this.length;
};

LinkedList.prototype.toString = function(){
  var currentNode = this.head,
      string;
  while(currentNode){
    string += currentNode.value + (currentNode.next ? ', ':'');
    currentNode = currentNode.next;
  }
  return string;
};

var myLL = new LinkedList();
myLL.addToTail("zero")
myLL.addToTail("one")
myLL.addToTail("two")
myLL.addToTail("three")
console.log(myLL);
console.log("index: ", myLL.indexOf("five"))