var Tree = function(value){
  this.value;
  this.children = [];
};

Tree.prototype.addChild = function(value){
  if(this.children.length < 2){
    this.children.push(new Tree(value));
  } else {
    this.children.addChild(value);
  }
};

Tree.prototype.contains = function(target){
  var result = false;

  function find(node){
    if(node[value] === target){
      result = true;
    } else {
      node.children.forEach(function(childNode){
        find(childNode)
      });
    }
  }
  find(this)
  return result;
};
