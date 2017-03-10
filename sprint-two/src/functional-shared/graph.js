var Graph = function(){
  var nodes = {};
  _.extend(nodes, graphMethods);

  return nodes;
};

var graphMethods = {
  contains: function(node){
    return nodes.hasOwnProperty(node);
  },

  addNode: function(node){
    if(!nodes.contains(node)){
      nodes[node] = {edges: {}};
    }
  },

  hasEdge: function(fromNode, toNode){
    if(!nodes.contains(fromNode)){
      return false;
    }
    return nodes[fromNode].edges[toNode] !== undefined;
  },

  removeEdge: function(fromNode, toNode){
    if(nodes.hasEdge(fromNode, toNode)){
      delete nodes[fromNode].edges[toNode];
      delete nodes[toNode].edges[fromNode];
    }
  },

  removeNode: function(node){
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
  },

  addEdge: function(fromNode, toNode){
    nodes[fromNode].edges[toNode] = fromNode;
    nodes[toNode].edges[fromNode] = toNode;
  },

  forEachNode: function(cb){
    var node;
    for(node in nodes){
      cb(node);
    }
  }
};
