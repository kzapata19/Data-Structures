var BinarySearchTree = function(){
  var tree = {};
  tree[value] = value;
  tree[left] = null;
  tree[right] = null;
  _.extend(tree, treeMethods);

  return tree;
};

var treeMethods = {
  insert: function(value){
    if(value <= this[value]){
      if(!this[left]){
        this[left] = BinarySearchTree(value);
      } else {
        this[left].insert(value);
      }
    } else {
      if(!this[right]){
        this[right] = BinarySearchTree(value);
      } else {
        this[right].insert(value);
      }
    }
  },

  contains: function(value){
    if(value === this[value]){
      return true;
    } else if(value < this[value]){
      if(!this[left]){
        return false;
      } else {
        return this[left].contains(value);
      }
    } else if(value > this[value]) {
      if(!this[right]){
        return false;
      } else {
        return this[right].contains(value);
      }
    }
  },

  depthFirstLog: function(callback){
    callback(this[value]);
    if(this[left]) this[left].depthFirstLog(callback);
    if(this[right]) this[right].depthFirstLog(callback);
  }
};