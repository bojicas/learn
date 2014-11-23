//  Math Object - min() and max() example

var max = Math.max(3, 54, 32, 16);
console.log(max); // 54

var min = Math.min(3, 54, 32, 16);
console.log(min); // 3

// max/min in an array

var values = [1, 2, 3, 4, 5, 6, 7, 8];
var minInArray = Math.min.apply(Math, values);
var maxInArray = Math.max.apply(Math, values);

console.log(minInArray);  // 1
console.log(maxInArray);  // 8
