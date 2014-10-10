// Functions - named arguments & arguments object

function doAdd(num1, num2) {
  if (arguments.length == 1) {
    console.log(num1 + 10);
  } else if (arguments.length == 2) {
    console.log(arguments[0] + num2);
  }
}

doAdd(10);
doAdd(30, 20);