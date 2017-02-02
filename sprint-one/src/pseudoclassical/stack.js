var Stack = function() {
  this.count = 0;
  this.storage = {};
};

Stack.prototype.size = function(){
  return this.count;
};

Stack.prototype.push = function(value){
  this.count++;
  this.storage[this.count] = value;
};

Stack.prototype.pop = function(){
  if(this.count > 0){
    var toDelete = this.storage[this.count];
    delete this.storage[this.count];
    this.count--;
    return toDelete;
  }
};
