var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var count = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    count++
    storage[count] = value;
  };

  someInstance.pop = function() {
    if(count >= 1) {
      var item = storage[count]
      delete storage[count];
      count--;
    }
    return item;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
