// Functions - no overloading

function addSomeNumber(num) {
  return num + 100;
}

function addSomeNumber(num) {
  return num + 200;
}

var result = addSomeNumber(100);

console.log(result);