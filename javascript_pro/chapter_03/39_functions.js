// Functions - multiple returns

function diff(num1, num2) {
  if (num1 < num2) {
    return num2 - num1;
  } else {
    return num1 - num2;
  }
}

var result = diff(3, 10);

console.log(result);