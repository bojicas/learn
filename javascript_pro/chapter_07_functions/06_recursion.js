// Recursion example (using named function expressions)

var factorial = (function f(num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * f(num - 1);
  }
});

var anotherFactorial = factorial;
factorial = null;
console.log(anotherFactorial(4)); // 24
