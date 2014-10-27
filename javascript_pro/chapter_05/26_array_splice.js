// Array Type - splice()

var colors = ["red", "green", "blue"];
var removed = colors.splice(0, 1);  // remove first item
console.log(colors);  // [ 'green', 'blue' ]
console.log(removed); // [ 'red' ]

removed = colors.splice(1, 0, "yellow", "orange"); // insert at position 1
console.log(colors);  // [ 'green', 'yellow', 'orange', 'blue' ]
console.log(removed); // []

removed = colors.splice(1, 1, "red", "purple"); // insert 2 values, remove 1
console.log(colors);  // [ 'green', 'red', 'purple', 'orange', 'blue' ]
console.log(removed); // [ 'yellow' ]