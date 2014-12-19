// The Module-Augmentation Pattern

var singleton = function () {

  // private variables and functions
  var privateVariable = 10;

  function privateFunction() {
    return false;
  }

  // create object
  var object = new Date();

  // add privileged/public properties and methods
  object.publicProperty = true;

  object.publicMethod = function () {
    privateVariable++;
    return privateFunction();
  };

  // return the object
  return object;
}();

console.log(singleton.publicProperty);  // true
console.log(singleton.publicMethod());  // false
