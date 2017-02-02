var Queue = function() {
  var newQueue = Object.create(queueMethods);
  newQueue.storage = {};
  newQueue.count = 0;
  return newQueue;
};

var queueMethods = {
  size: function(){
    return this.count;
  },
  enqueue: function(value){
    if(this.count < 1){
      this.count++;
      this.storage[this.count] = value;
    } else{
      var key, max;
      for(key in this.storage){
        if(key > max){
          max = key;
        } else if(max === undefined){
          max = key;
        }
      }
      this.storage[max + 1] = value;
      this.count++;
    }
  },
  dequeue: function(){
    if(this.count > 0){
      var key, min, toDelete;
      for(key in this.storage){
        if(key < min){
          min = key;
        } else if (min === undefined){
          min = key;
        }
      }
      toDelete = this.storage[min];
      delete this.storage[min];
      this.count--;
      return toDelete;
    }
  }
};