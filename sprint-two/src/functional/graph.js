var Graph = function(){
  var nodes = {};

  nodes.contains = function(node){
    return nodes.hasOwnProperty(node);
  };
  nodes.addNode = function(node){
    if(!nodes.contains(node)){
      nodes[node] = {edges: {}};
    }
  };

  nodes.hasEdge = function(fromNode, toNode){
    if(!nodes[fromNode]){
      return false;
    }
    return nodes[fromNode].edges[toNode] !== undefined;
  };
  nodes.removeEdge = function(fromNode, toNode){
    if(nodes.hasEdge(fromNode, toNode)){
      delete nodes[fromNode].edges[toNode];
      delete nodes[toNode].edges[fromNode];
    }
  };
  nodes.removeNode = function(node){
    if(nodes.contains(node)){
      var nodeEdges = Object.keys(nodes[node].edges);
      if(nodeEdges.length > 0){
        var i = 0;
        for(i; i < nodeEdges.length; i++){
          nodes.removeEdge(node, nodeEdges[i])
        }
      }
      delete nodes[node];
    }
  };
  nodes.addEdge = function(fromNode, toNode){
    nodes[fromNode].edges[toNode] = fromNode;
    nodes[toNode].edges[fromNode] = toNode;
  };
  nodes.forEachNode = function(cb){
    var node;
    for(node in nodes){
      cb(node);
    }
  };
};