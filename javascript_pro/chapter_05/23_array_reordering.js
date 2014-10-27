// Array Type - reordering methods

function compare(value1, value2) {
  return value2 - value1;
}
var values = [0, 1, 5, 10, 15];
values.sort(compare);
console.log(values);