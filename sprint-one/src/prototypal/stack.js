var Stack = function() {
  var newStack = Object.create(stackMethods);
  newStack.storage = {};
  newStack.count = 0;
  return newStack;
};

var stackMethods = {
  size: function(){
    return this.count;
  },
  push: function(value){
    this.count++;
    this.storage[this.count] = value;
  },
  pop: function(){
    if(this.count > 0){
      var key, max, toDelete;
      for(key in this.storage){
        if(key > max){
          max = key;
        } else if (max === undefined){
          max = key;
        }
      }
      toDelete = this.storage[max];
      delete this.storage[max];
      this.count--;
      return toDelete;
    }
  }
};

