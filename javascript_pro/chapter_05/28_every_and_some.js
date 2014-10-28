// Array Type - iterative methods every() & some()

var numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];

var everyResult = numbers.every(function (item, index, array) {
  return (item > 2);
});

console.log(everyResult);


var someResult = numbers.some(function (item, index, array) {
  return (item > 2);
});

console.log(someResult);