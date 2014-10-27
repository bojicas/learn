// Array Type - stack methods

var colors = [];

var count = colors.push("red", "green");
console.log(count); // 2
console.log(colors);

count = colors.push("black");
console.log(count); // 3
console.log(colors);

var item = colors.pop();
console.log(item);
console.log(colors.length);
console.log(colors);
