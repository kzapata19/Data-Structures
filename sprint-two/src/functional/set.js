var Set = function(){
  var set = {};
  set._storage = {};

  set.contains = function(item){
    //use hasOwnProperty method over "in" operator to only check if target obj has the property without consulting the prototype chain
    return set._storage.hasOwnProperty(item);
  },

  set.add = function(item){
    if(!set.contains(item)){
      set._storage[item] = item;
      return true; //successfully added
    }
    return false; //failed to add
  },

  set.remove = function(item){
    if(set.contains(item)){
      var deletedValue = set._storage[item];
      delete set._storage[item];
      return deletedValue;
    }
    return false; //failed to delete
  }

  return set;
};
