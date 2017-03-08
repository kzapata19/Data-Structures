var Set = function(){
  var set = {};
  set.storage = {};

  set.add = function(item){
    if(!set.contains(item)){
      set.storage[item] = item
    }
  },

  set.contains = function(item){
    return item in set.storage[item];
  },

  set.remove = function(item){
    if(set.contains(time)){
      delete set.storage[item]; //return the deleted value?
    }
  }

  return set;
};