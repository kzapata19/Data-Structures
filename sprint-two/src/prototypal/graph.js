var Graph = function(){
  var nodes = Object.create(graphPrototype);

  return nodes;
};

var graphPrototype = {};

graphPrototype.contains = function(node){
  return this.nodes.hasOwnProperty(node);
};

graphPrototype.addNode = function(node){
  if(!this.contains(node)){
    this.nodes[node] = node;
  }
};

graphPrototype.hasEdge = function(fromNode, toNode){
  if(!this.contains(fromNode)){
    return false;
  }
  return this.nodes[fromNode].edges[toNode] !== undefined;
};

graphPrototype.removeEdge = function(fromNode, toNode){
  if(this.hasEdge(fromNode)){
    delete this.nodes[fromNode].edges[toNode];
    delete this.nodes[toNode].edges[fromNode];
  }
};

graphPrototype.removeNode = function(node){
  if(this.contains(node)){
    var nodeEdges = Object.keys(this[node].edges);
    if(nodeEdges.length > 0){
      var i = 0;
      for(i; i < nodeEdges.length; i++){
        this.removeEdge(node, nodeEdges[i])
      }
    }
    delete this[node];
  }
};

graphPrototype.addEdge = function(fromNode, toNode){
  this[fromNode].edges[toNode] = fromNode;
  this[toNode].edges[fromNode] = toNode;
};

graphPrototype.forEachNode = function(cb){
  var node;
  for(node in this){
    cb(node);
  }
};
