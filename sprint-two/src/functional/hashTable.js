var HashTable = function(size){
  var size = size
  var storage = LimitedArray(size);

  storage.insert = function(key, value){
    var index = getIndexBelowMaxForKey(key, size)
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
  };

  storage.retrieve = function(key){
    var index = getIndexBelowMaxForKey(key, size);
    var bucket = storage.get(index);

    if(!bucket){
      return undefined;
    } else {
      var i = 0;
      for(i; i < bucket.length; i++){
        if(bucket[i][0] === key){
          return bucket[i][1];
        }
      }
      return undefined;
    }
  };

  storage.remove = function(key){
    var index = getIndexBelowMaxForKey(key, size);
    var bucket = storage.get(index);

    if(!bucket){
      return undefined;
    } else {
      var i = 0, deletedValue;
      for(i; i < bucket.length; i++){
        if(bucket[i][0] === key){
          deletedValue = bucket[i][1];
          bucket[i].splice(i, 1);
          return deletedValue;
        }
      }
      return undefined;
    }
  };

  return storage;
};

var Node = function(value, next){
  var node = {};
  node.value = value;
  node.next = next || null;

  return node;
};
