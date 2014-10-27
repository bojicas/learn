// Array Type - queue methods push() & shift()

var colors = [];
var count = colors.push("red", "green");
console.log(count);
console.log(colors);

count = colors.push("black");
console.log(count);
console.log(colors);

var item = colors.shift();
console.log(item);
console.log(colors.length);
console.log(colors);