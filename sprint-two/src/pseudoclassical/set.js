var Set = function(){
  this._storage = {};
};

Set.prototype.contains = function(item){
  //use hasOwnProperty method over "in" operator to only check if target obj has the property without consulting the prototype chain
  return this._storage.hasOwnProperty(item);
};

Set.prototype.add = function(item){
  if(!this.contains(item)){
    this._storage[item] = item;
    return true; //successfully added
  }
  return false; //failed to add
};

Set.prototype.remove = function(item){
  if(this.contains(item)){
    var deletedValue = this._storage[item]
    delete this._storage[item];
    return deletedValue;
  }
  return false; //failed to delete
};

Set.prototype.clearValues = function(){
  this._storage = {};
  return true;
};

Set.prototype.values = function(){
  //method below will only return object's properties excluding those on the object prototype or inherited ones
  return Object.keys(this._storage);
};

Set.prototype.size = function(){
  //for in loop & hasOwnProperty OR use Object.keys.length
  var key, size = 0;
  for(key in this._storage){
    if(this._storage.hasOwnProperty(key)){
      size++
    }
  }
  return size;
};
