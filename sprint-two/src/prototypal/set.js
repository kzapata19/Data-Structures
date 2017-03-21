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
  //for in loop iterates over inherited properties, use hasOwnProperty to filter those out
  for(key in this._storage){
    if(this.contains(key)){
      size++;
    }
  }
  return size;
};

setPrototype.union = function(otherSet){
  var unionSet = Set(), key;

  for(key in this._storage){
    if(this.contains(key)){
      unionSet.add(key);
    }
  }

  for(key in otherSet){
    if(otherSet.contains(key)){
      unionSet.add(key);
    }
  }

  return unionSet; //returns storage object with correct union but does not return other methods added to prototype when logging entire union set object...
};

setPrototype.intersection = function(otherSet){

};

setPrototype.difference = function(otherSet){

};

/*
 * Complexity: What is the time complexity of the above functions?
 */

 var set1 = Set();
set1.add("one")
set1.add("two")
console.log(set1)
var set2 = Set()
set2.add("three")
set2.add("four")
console.log(set2);
var myunion = set1.union(set2)
console.log(myunion);
