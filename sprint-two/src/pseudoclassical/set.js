var Set = function(){
  this.storage = {};
};

Set.prototype.contains = function(item){
  return item in this.storage[item];
};

Set.prototype.add = function(item){
  if(!this.contains(item)){
    this.storage[item] = item;
  }
};

Set.prototype.remove = function(item){
  if(this.contains(item)){
    delete this.storage[item];
  }
};