// Boolean Operators
// Logical AND

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log("-----");

// var found = true;
// var result = (found && someUndeclaredVariable); // error here
// console.log(result);


var found = false;
var result = (found && someUndeclaredVariable); // no error
console.log(result);
