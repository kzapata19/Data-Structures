var Queue = function() {
  var newQueue = {};
  newQueue.storage = {};
  newQueue.count = 0;

  _.extend(newQueue, queueMethods);

  return newQueue;
};

var queueMethods = {
  enqueue: function(value){
    if(!this.storage.hasOwnProperty(this.count)){
      this.storage[this.count] = value;
      this.count++;
    }
  },

  dequeue: function(){
    if(this.count > 0){
      var min, key, toDelete;
      for(key in this.storage){
        if(key < min){
          min = key;
        } else if(min === undefined){
          min = key;
        }
      }
      toDelete = this.storage[min];
      delete this.storage[min];
      this.count--
      return toDelete;
    }
  },

  size: function(){
    return this.count;
  }
};
