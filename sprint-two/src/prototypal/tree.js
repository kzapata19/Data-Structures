var Tree = function(value){
  var newTree = Object.create(treePrototype);
  newTree.value = value;
  newTree.children = [];

  return newTree;
};

var treePrototype = {};

treePrototype.addChild = function(value){
  if(this.children.length < 2){
    this.children.push(Tree(value));
  } else {
    this.children.addChild(value);
  }
};

treePrototype.contains = function(target){
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
  find(this)
  return result;
};