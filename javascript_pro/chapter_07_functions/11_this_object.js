// This Object Example

var name = 'The Window';

var object = {
  name: 'My Object',

  getName: function () {
    return this.name;
  }
};

console.log(object.getName());    // My Object
console.log((object.getName)());  // My Object
console.log((object.getName = object.getName)()); // "The Window" in non-strict mode
