var HashTable = function(){
  this.storage = [];
};

HashTable.prototype.loseloseHashCode = function(key){
  var hash = 0, i = 0;
  for(i; i < key.length; i++){
    hash += key.charCodeAt(i);
  }
  return hash % 37;
};

HashTable.prototype.add = function(key, value){
  var position =  this.loseloseHashCode(key);
  this.storage[position] = value;
};

HashTable.prototype.retrieve = function(key){
  var position = this.loseloseHashCode(key);
  return this.storage[position];
};

// using add method to replace key's value with undefined
HashTable.prototype.delete = function(key){
  if(this.contains(key)){
    var toDelete =  this.retrieve(key);
    this.add(key, undefined);
    return toDelete;
  }
  return undefined;
};

HashTable.prototype.delete = function(key){
  if(this.contains(key)){
    var toDelete = this.retrieve(key), position = this.loseloseHashCode(key);
    this.storage[position] = undefined;
    return toDelete;
  }
  return undefined;
};

HashTable.prototype.contains = function(key){
  if(this.retrieve(key)){
    return this.storage.includes(this.retrieve(key))
  }
  return false;
};

HashTable.prototype.clear = function(){
  this.storage = [];
};

HashTable.prototype.size = function(){

};

HashTable.prototype.values = function(){

};