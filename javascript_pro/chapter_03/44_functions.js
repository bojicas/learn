// Functions - arguments stay in sync

function doAdd(num1, num2) {
  arguments[1] = 10;
  console.log(arguments[0] + num2);
}

doAdd(10);
doAdd(20, 30);