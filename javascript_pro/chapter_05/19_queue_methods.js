// Array Type - queue methods unshift() & pop()

var colors = [];
var count = colors.unshift("red", "green");

console.log(count);
console.log(colors);

count = colors.unshift("black");

console.log(count);
console.log(colors);

var item = colors.pop();

console.log(item);
console.log(colors.length);
console.log(colors);