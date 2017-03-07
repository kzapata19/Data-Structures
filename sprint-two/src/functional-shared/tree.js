var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = []; // index 0: left child; index 1: right child
  // (newTree, treeMethods);
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {
  addChild: function(value){
    if(this.children.length < 2){
      this.children.push(Tree(value))
    } else {
      this.children.addChild(value)
    }
  },

  contains: function(target){
   var result = false;

   function find(node){
    if(node.value === target){
      result = true;
    } else {
      node.children.forEach(function(childNode){
        find(childNode)
      });
    }
   }
   find(this)
   return result
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
