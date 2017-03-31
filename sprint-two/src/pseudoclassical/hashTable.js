var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if(!bucket){
    bucket = [];
    this._storage.set(index, bucket);
  }
  var isEmpty = true, i = 0;
  for(i; i < bucket.length; i++){
    if(bucket[i][0] === k){
      bucket[i][1] = v;
      isEmpty = false
    }
  }
  if(isEmpty){
    bucket.push([k, v]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if(!bucket){
    return undefined;
  } else {
    var i = 0;
    for(i; i < bucket.length; i++){
      if(bucket[i][0] === k){
        return bucket[i][1];
      }
    }
    return undefined;
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var i = 0;
  if(!bucket){
    return undefined;
  }
  var i = 0;
  for(i; i < bucket.length;i++){
    if(bucket[i][0] === k){
      var deletedValue = bucket[i][1];
      bucket[i].splice(i, 1);
      return deletedValue;
    }
  }
  return undefined;
};

HashTable.prototype.contains = function(key){

};

HashTable.prototype.clear = function(){

};

HashTable.prototype.size = function(){

};

HashTable.prototype.keys = function(){

};

HashTable.prototype.values = function(){

};
/*
 * Complexity: What is the time complexity of the above functions?
 */
