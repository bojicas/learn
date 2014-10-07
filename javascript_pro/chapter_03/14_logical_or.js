// Boolean Operators
// Logical OR

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log("-----");

var found = true;
var result = (found || someUndeclaredVariable); // no error
console.log(result);

// var found = false;
// var result = (found || someUndeclaredVariable); // error here
// console.log(result);

console.log("-----");

var prefferedObject = {
  age: 18
};

var  backupObject = {
  age: 100
};

var myObject = prefferedObject || backupObject;
console.log(myObject);
