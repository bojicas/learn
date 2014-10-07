// Relational Operators

var result1 = 5 > 3;
var result2 = 5 < 3;

console.log(result1); // true
console.log(result2); // false

var result3 = "Brick" < "alphabet";
console.log(result3); //true

var result4 = "Brick".toLowerCase() < "alphabet".toLowerCase();
console.log(result4); // false

var result5 = "23" < "3";
console.log(result5); // true

var result6 = "23" < 3;
console.log(result6); // false, "23" is converted to a number

var result7 = "a" < 3;
console.log(result7); // false, "a" becomes NaN

// commented because of linting warning!, but interesting result:
// var result8 = NaN < 3;
// var result9 = NaN >= 3;
// console.log(result8); // false
// console.log(result9); // false
