// Closure example

function createFunctions() {
  var result = new Array();

  for (var i = 0; i < 10; i++) {
    result[i] = function (num) {
      return function () {
        return num;
      };
    };
  }

  return result;
}

console.dir(createFunctions());
