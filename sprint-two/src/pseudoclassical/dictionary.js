var Dictionary = function(){
  this.items = {};
}

Dictionary.prototype.has = function(key){
  return key in this.items;
};

Dictionary.prototype.set = function(key, value){
  this.items[key] = value;
};

Dictionary.prototype.get = function(key){
  return this.items[key];
};

// keeps key created and sets values to undefined
Dictionary.prototype.removeValue = function(key){
  if(this.has(key)){
    var toRemove = this.get(key);
    this.items[key] = undefined;
    return toRemove;
  }
  return undefined;
};

//deletes both keys and values
Dictionary.prototype.delete = function(key){
  if(this.has(key)){
    var toDelete = this.get(key);
    delete this.items[key];
    return toDelete;
  }
  return undefined;
};

Dictionary.prototype.each = function(callback){
  var key;
  for(key in this.items){
    callback(this.get(key), key, this.items);
  }
};

//Object.keys using each
Dictionary.prototype.keys = function(){
  var allKeys = [];
  this.each(function(values, key){
    allKeys.push(key);
  });
  return allKeys;
};

Dictionary.prototype.keys = function(){
  return Object.keys(this.items);
};

Dictionary.prototype.values = function(){
  var allValues = [];
  this.each(function(value){
    allValues.push(value);
  });
  return allValues;
};
