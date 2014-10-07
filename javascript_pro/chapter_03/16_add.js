// Additive Operators

// Add

console.log(1 + 2); // 3
console.log(Infinity + Infinity); // Infinity
console.log(-Infinity + -Infinity); // -Inifinity
console.log(Infinity + -Infinity); // NaN

var result1 = 5 + 5;
console.log(result1); // 10

var result2 = 5 + "5";
console.log(result2); // 55


var num1 = 5;
var num2 = 10;
var message = "The sum of 5 and 10 is " + num1 + num2;
console.log(message); // The sum of 5 and 10 is 510

var message2 = "The sum of 5 and 10 is " + (num1 + num2);
console.log(message2); // The sum of 5 and 10 is 15
