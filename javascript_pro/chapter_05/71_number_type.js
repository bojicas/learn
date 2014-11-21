// Number Type

var num = 10;
console.log(num.toFixed(2)); // 10.00

num = 10.005;
console.log(num.toFixed(2)); // 10.01

// other methods to formatting numbers

num = 10;
console.log(num.toExponential(1));  // 1.0e+1

num = 99;
console.log(num.toPrecision(1));  // 1e+2
console.log(num.toPrecision(2));  // 99
console.log(num.toPrecision(3));  // 99.0
console.log(num.toPrecision(4));  // 99.00
