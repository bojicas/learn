// The Function Type

function sum1(num1, num2) {
  return num1 + num2;
}

console.log(sum1(10, 20));

var sum2 = function (num1, num2) {
  return num1 + num2;
};

console.log(sum2(10, 20));

// a not recommended way to define functions
var sum3 = new Function('num1', 'num2', 'return num1 + num2');

console.log(sum3(10, 20));
