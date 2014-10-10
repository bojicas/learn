// Functions

function doAdd() {
  if (arguments.length == 1) {
    console.log(arguments[0] + 10);
  } else if (arguments.length == 2) {
    console.log(arguments[0] + arguments[1]);
  }
}

doAdd(10);
doAdd(20, 30);