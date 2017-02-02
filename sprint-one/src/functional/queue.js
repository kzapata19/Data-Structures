var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    if(count === 0){
      count++;
      storage[count] = value;
    }
    else if(count === 1){
      var nextKey = Object.keys(storage)[0];
      storage[parseInt(nextKey) + 1] = value;
      count++;
    } else if(!storage.hasOwnProperty(count)){
      var max;
      for(key in storage){
        if(max === undefined){
          max = key;
        } else if(key > max){
          max = key;
        }
      }
      storage[max] = value;
      count++;
    }
  };
//Other option:
  // someInstance.enqueue = function(value) {
  //   if (storage.hasOwnProperty(count)) {
  //     storage[count + 1] = value;
  //     count++;
  //   }
  //   storage[count] = value;
  //   count++;
  // };

  someInstance.dequeue = function() {

    var key, min;
    if(count > 0){
      for(key in storage){
        if(min === undefined){
          min = key;
        } else if(key < min){
          min = key;
        }
      }
      var toDelete = storage[min];
      delete storage[min];
      count--;
      return toDelete;
    }

  };

  someInstance.size = function() {
    return count;
  };
//additional handy methods:
  someInstance.print = function(){
    return storage;
  };

  someInstance.firstItem = function(){
    //does Object.keys output an array of ordered keys?
    var first = Object.keys(storage)[0];
    return storage[first];
  };

  someInstance.lastItem = function(){
    //does Object.keys output an array of ordered keys?
    var keys = Object.keys(storage);
    var last = keys[keys.length - 1];
    return storage[last];
  };

  return someInstance;
};

