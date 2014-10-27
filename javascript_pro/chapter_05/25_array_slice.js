// Array Type - slice()

var colors = ["red", "green", "blue", "yellow", "purple"];
var colors2 = colors.slice(1);
var colors3 = colors.slice(1, 4);

console.log(colors);  // [ 'red', 'green', 'blue', 'yellow', 'purple' ]
console.log(colors2); // [ 'green', 'blue', 'yellow', 'purple' ]
console.log(colors3); // [ 'green', 'blue', 'yellow' ]