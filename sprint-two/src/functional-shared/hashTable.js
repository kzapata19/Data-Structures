var HashTable = function(size){
  var size = size;
  var storage = LimitedArray(size);

  _.extend(storage, HashTableMethods);

  return storage;
};

var HashTableMethods = {

  insert: function(key, value){
    var index = getIndexBelowMaxForKey(key, size);
    var bucket = storage.get(index);

    if(!bucket){
      bucket = [];
      storage.set(index, bucket);
    }
    var i = 0, isEmpty = true;
    for(i; i < bucket.length; i++){
      if(bucket[i][0] === key){
        bucket[i][1] = value;
        isEmpty = false;
      }
    }

    if(isEmpty){
      bucket.push([key, value]);
    }
  },

  retrieve: function(key){
    var index = getIndexBelowMaxForKey(key, size);
    var bucket = storage.get(index);

    if(!bucket){
      return underfined;
    } else {
      var i = 0;
      for(i; i < bucket.length; i++){
        if(bucket[i][0] === key){
          return bucket[i][1];
        }
      }
      return underfined;
    }
  },

  remove: function(key){
    var index = getIndexBelowMaxForKey(key, size);
    var bucket = storage.get(index);

    if(!bucket){
      return underfined;
    }
    var i = 0, deletedValue;
    for(i; i < bucket.length; i++){
      if(bucket[i][0] === key){
        deletedValue = bucket[i][1];
        bucket[i].splice(i, 1);
        return deletedValue;
      }
    }
    return underfined;
  }
};
