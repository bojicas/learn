// Function Type - multiple names for a single function

function sum(num1, num2) {
  return num1 + num2;
}

console.log(sum(10, 10));

var anotherSum = sum;
console.log(anotherSum(10, 10));

sum = null;
console.log(anotherSum(10, 10));
