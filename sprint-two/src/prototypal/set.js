var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.contains = function(item) {
  //use hasOwnProperty method over "in" operator to only check if target obj has the property without consulting the prototype chain
  return this._storage.hasOwnProperty(item);
};

setPrototype.add = function(item) {
  if(!this.contains(item)){
    this._storage[item] = item;
    return true; //successfully added
  }
  return false; //failed to add
};

setPrototype.remove = function(item) {
  if(this.contains(item)){
    var deletedValue = this._storage[item];
    delete this._storage[item];
    return deletedValue;
  }
  return false; //failed to delete
};

setPrototype.clearValues = function(){
  this._storage = {};
  return true;
};

setPrototype.values = function(){
  //method below will only return object's properties excluding those on the object prototype or inherited ones
  return Object.keys(this._storage);
};

setPrototype.size = function(){
  //for in loop & hasOwnProperty OR use Object.keys.length
  var key, size = 0;
  for(key in this._storage){
    if(this._storage.hasOwnProperty(key)){
      size++;
    }
  }
  return size;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
