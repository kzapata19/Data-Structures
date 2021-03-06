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
  return this.has(key) ? this.get(key) : undefined;
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

//Implemented Object.keys using each
Dictionary.prototype.keys = function(){
  var allKeys = [];
  this.each(function(value, key){
      allKeys.push(key);
  });
  return allKeys;
};

Dictionary.prototype.keys = function(){
  return Object.keys(this.items);
};

Dictionary.prototype.values = function(){
  var allValues = [];
  this.each(function(value, key){
    if(this.has(key)){
      allValues.push(value);
    }
  });
  return allValues;
};

Dictionary.prototype.allItems = function(){
  return this.items;
};

Dictionary.prototype.clearAll = function(){
  this.items = {};
};

//using Object.keys method
Dictionary.prototype.size = function(){
  return Object.keys(this.items).length;
};

Dictionary.prototype.size = function(){
  return this.keys().length;
};
