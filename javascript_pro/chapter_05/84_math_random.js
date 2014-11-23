// Math - The random() Method

// formula:
// Math.floor(Math.random() * total_number_of_choices + first_possible_value)

// 1 to 10
var num = Math.floor(Math.random() * 10 + 1);
console.log(num);

// 2 to 10
num = Math.floor(Math.random() * 9 + 2);
console.log(num);

// use a function
function selectFrom(lowerValue, upperValue) {
  var choices = upperValue - lowerValue + 1;
  return Math.floor(Math.random() * choices + lowerValue);
}

num = selectFrom(2, 10);
console.log(num); // number between 2 and 10, inclusive

// random selection from an array
var colors = ['red', 'green', 'blue', 'yellow', 'black', 'purple', 'brown'];
var color = colors[selectFrom(0, colors.length-1)];
console.log(color);
