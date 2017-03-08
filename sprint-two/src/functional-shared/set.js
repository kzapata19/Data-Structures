var Set = function(){
  var set = {};
  set.storage = {};
  _.extend(set, setMethods);

  return set;
};

var setMethods = {
  contains: function(item){
    return item in this.storage[item];
  },

  add: function(item){
    if(!this.contains(item)){
      this.storage[item] = item;
    }
  },

  remove: function(item){
    if(this.contains(item)){
      delete this.storage[item];
    }
  }
};