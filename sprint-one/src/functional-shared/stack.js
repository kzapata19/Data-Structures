var Stack = function() {
  var newStack = {};
  newStack.storage = {};
  newStack.count = 0;
  //Note: stackMethods below do not extend the Stack constructor
  _.extend(newStack, stackMethods);

  return newStack;
};

//Note: methods below do not extend the Stack constructor
var stackMethods = {
  push:
    function(value){
      this.count++;
      this.storage[this.count] = value;
    },

  pop:
    function(){
      if(this.count > 0){
        var toDelete = this.storage[this.count];
        delete this.storage[this.count];
        this.count--;
        return toDelete;
      }
    },

  size:
  function(){
    return this.count;
  }
};
