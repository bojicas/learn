// Recursion example

function factorial(num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

console.log(factorial(5));  // 120

var anotherFactorial = factorial;
factorial = null;
console.log(anotherFactorial(4)); // returns error
