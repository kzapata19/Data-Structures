var Queue = function() {
  this.count = 0;
  this.storage = {};
};

Queue.prototype.size = function(){
  return this.count;
};

Queue.prototype.enqueue = function(value){
  if(this.count < 1){
    this.count++;
    this.storage[this.count] = value;
  } else {
    var key, max;
    for(key in this.storage){
      if(key > max){
        max = key;
      } else if(max === undefined){
        max = key;
      }
    }
    this.storage[max + 1] = value;
    this.count++
  }
};

Queue.prototype.dequeue = function(){
  if(this.count > 0){
    var key, min, toDelete;
    for(key in this.storage){
      if(key < min){
        min = key;
      } else if(min === undefined){
        min = key;
      }
    }
    toDelete = this.storage[min];
    delete this.storage[min];
    this.count--;
    return toDelete;
  }
};
