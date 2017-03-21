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
  },

  set.clearValues = function(){
    _storage = {};
    return true;
  },

  set.values = function(){
    //method below will only return object's properties excluding those on the object prototype or inherited ones
    return Object.keys(_storage);
  },

  set.size = function(){
    //for in loop & hasOwnProperty OR use Object.keys.length
    var key, size = 0;
    //for in loop iterates over inherited properties, use hasOwnProperty (contains method) to filter those out
    for(key in _storage){
      if(set.contains(key)){
        size++;
      }
    }
    return size;
  },

  set.union = function(otherSet){
    var union = {}, key;
    //alternative: use _.extend

    for(key in set._storage){
      if(set.contains(key)){
        union[key] = key;
      }
    }

    for(key in otherSet){
      if(otherSet.hasOwnProperty(key)){
        union[key] = key;
      }
    }
    return union;
  },

  set.intersection = function(){

  },

  set.difference = function(){

  },

  set.subset = function(){

  }

  return set;
};

// var set1 = Set();
// set1.add("one")
// set1.add("two")
// // console.log(set1)
// var set2 = Set()
// set2.add("three")
// set2.add("four")
// // console.log(set2);
// var myunion = set1.union(set2)
// console.log(myunion.contains("one"));