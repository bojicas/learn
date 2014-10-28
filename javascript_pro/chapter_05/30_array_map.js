// Array Type - iterative methods map()

var numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];

var mapResult = numbers.map(function (item, index, array) {
  return item * 2;
});

console.log(mapResult);