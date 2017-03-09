var HashTable = function(size){
  var hashTable = Object.create(HashTablePrototype);
  hashTable._limit = size;
  hashTable._storage = LimitedArray(hashTable._limit);

  return hashTable;
};

var HashTablePrototype = {};

HashTablePrototype.insert = function(k, v){
  var index = getIndexBelowMaxForKey(k, hashTable._limit);
  var bucket = hashTable._storage.get(index);
  if(!bucket){
    bucket = [];
    this._storage.set(index, bucket);
  }
  var i = 0, isEmpty = true;
  for(i; i < bucket.length; i++){
    if(bucket[i][0] === k){
      bucket[i][1] = v;
      isEmpty = false;
    }
  }
  if(isEmpty){
    bucket.push([k,v]);
  }
};

HashTablePrototype.retrieve = function(k){
  var index = getIndexBelowMaxForKey(k, hashTable._limit);
  var bucket =  hashTable._storage.get(index);
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

HashTablePrototype.remove = function(k){
  var index = getIndexBelowMaxForKey(k, hashTable._limit);
  var bucket = hashTable_._storage.get(index);
  if(!bucket){
    return undefined;
  }
  var i = 0, deletedValue;
  for(i; i < bucket.length; i++){
    if(bucket[i][0] === k){
      deletedValue = bucket[i][1];
      bucket[i].splice(i, 1);
      return deletedValue;
    }
  }
  return undefined;
};
