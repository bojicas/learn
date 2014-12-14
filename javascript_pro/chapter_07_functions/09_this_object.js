// This Object Example

var name = "The Window";

var object = {
  name : "My Object",

  getNameFunc : function(){
    return function(){
      return this.name;
    };
  }
};

console.log(object.getNameFunc()());  //"The Window" (in non-strict mode)
