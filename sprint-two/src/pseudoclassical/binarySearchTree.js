var BinarySearchTree = function(value){
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(value){
  if(value <= this.value){
    if(!this[left]){
      this[left] = new BinarySearchTree(value);
    } else {
      this[left].insert(value);
    }
  } else {
    if(!this[right]){
      this[right] = new BinarySearchTree(value);
    } else {
      this[right].insert(value);
    }
  }
};

BinarySearchTree.prototype.contains = function(value){
  if(value === this.value){
    return true;
  } else if(value < this[value]){
    if(!this[left]){
      return false;
    } else {
      return this[left].contains(value);
    }
  } else if(value > this[value]){
    if(!this[right]){
      return false;
    } else {
      return this[right].contains(value);
    }
  }
};

BinarySearchTree.prototype.depthFirstLog = function(callback){
  callback(this[value]);
  if(this[left]) this[left].depthFirstLog(callback);
  if(this[right]) this[right].depthFirstLog(callback)
};
