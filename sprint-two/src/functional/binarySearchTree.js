var BinarySearchTree = function(value){
  var tree = {};
  tree[value] = value;
  tree[left] = null;
  tree[right] = null;

  tree.insert = function(value){
    if(value <= tree[value]){
      if(!tree[left]){
        tree[left] = BinarySearchTree(value);
      } else {
        tree[left].insert(value);
      }
    } else {
      if(!tree[right]){
        tree[right] = BinarySearchTree(value);
      } else {
        tree[right].insert(value);
      }
    }
  };

  tree.contains = function(value){
    if(value === tree[value]){
      return true;
    } else if(value < tree[value]) {
      if(!tree[left]){
        return false;
      } else {
        return tree[left].contains(value);
      }
    } else if(value > tree[value]) {
      if(!tree[right]){
        return false;
      } else {
        return tree[right].contains(value);
      }
    }
  };

  tree.depthFirstLog = function(callback){
    callback(tree[value])
    if(tree[left]) tree[left].depthFirstLog(callback)
    if(tree[right]) tree[right].depthFirstLog(callback)
  };

  return tree;
};
