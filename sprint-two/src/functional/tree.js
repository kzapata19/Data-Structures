var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];

  newTree.addChild = function(value){
    if(newTree.children.length < 2){
      newTree.children.push(Tree(value))
    } else {
      newTree.children.addChild(value);
    }
  };

  newTree.contains = function(target){
    var result = false;
    function find(node){
      if(node[value] === target){
        result = true;
      } else {
        node.children.forEach(function(childNode){
          find(childNode);
        });
      }
    }
    find(newTree);
    return result;
  };

  return newTree
};