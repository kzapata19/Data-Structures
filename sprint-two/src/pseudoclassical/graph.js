// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  if(!this.nodes[node]){
    this.nodes[node] = {edges: {}}
  }
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  // return this.nodes.indexOf(node) > -1
  // return this.adjList[node] !== undefined
  // return this.nodes[node] !== undefined;
  return this.nodes.hasOwnProperty(node)
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if(!this.nodes[fromNode]){
    return false
  }
  return this.nodes[fromNode].edges[toNode] !== undefined
};


// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if(this.hasEdge(fromNode, toNode)){
    delete this.nodes[fromNode].edges[toNode];
    delete this.nodes[toNode].edges[fromNode];
  }
};
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if(this.contains(node)){
    //array of all nodes that share an edge with node to be deleted
    var nodeEdges = Object.keys(this.nodes[node].edges)
    if(nodeEdges.length > 0){
      var i;
      for(i = 0; i < nodeEdges.length; i++){
        this.removeEdge(node, nodeEdges[i])
      }
    }
    delete this.nodes[node];
  }
};


// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // if(this.contains(fromNode) && this.contains(toNode)){
    this.nodes[fromNode].edges[toNode] = fromNode;
    this.nodes[toNode].edges[fromNode] = toNode;
  // }
};



// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  var node;
  for(node in this.nodes){
    cb(node)
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
