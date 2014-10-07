// Bitwise Operators

var num1 = 18;
console.log(num1.toString(2));

var num2 = -18;
console.log(num2.toString(2));

// Bitwise NOT

var num3 = 25;
var num4 = ~num3;
console.log(num3);
console.log(num4);
// same result, but bitwise operator is much faster
var num5 = 25;
var num6 = -num5 - 1;
console.log(num5);
console.log(num6);

// Bitwise AND
var result = 25 & 3;
console.log(result);

// Bitwise OR
var result2 = 25 | 3;
console.log(result2);

// Bitwise XOR
var result3 = 25 ^ 3;
console.log(result3);

// Left Shift
var oldValue = 2;
var newValue = oldValue << 5;
console.log(oldValue);
console.log(newValue);

// Signed Right Shift
oldValue = 64;
newValue = oldValue >> 5;
console.log(oldValue);
console.log(newValue);

// Unsigned Right Shift
oldValue = 64;
newValue = oldValue >>> 5;
console.log(oldValue);
console.log(newValue);

oldValue = -64;
newValue = oldValue >>> 5;
console.log(oldValue);
console.log(newValue);
