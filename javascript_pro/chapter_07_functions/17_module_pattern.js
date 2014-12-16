// The Module Pattern

var singleton = function () {
  // private variables and functions
  var privateVariable = 10;

  function privateFunction() {
    return false;
  }

  // privileged/public methods and properties
  return {
    publicProperty: true,

    publicMethod: function () {
      privateVariable++;
      return privateFunction();
    }
  };
}();

console.log(singleton.publicProperty);  // true
console.log(singleton.publicMethod());  // false

console.log(singleton.privateVariable); // undefined
// console.log(singleton.privateFunction()); // raises error
