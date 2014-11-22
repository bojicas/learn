// String Type - the localeCompare() method

var stringValue = 'yellow';

console.log(stringValue.localeCompare('aware'));      // 24
console.log(stringValue.localeCompare('brick'));      // 23
console.log(stringValue.localeCompare('brave'));      // 23
console.log(stringValue.localeCompare('something'));  // 6
console.log(stringValue.localeCompare('yellow'));     // 0
console.log(stringValue.localeCompare('zoo'));        // -1

function determineOrder(value) {
  var result = stringValue.localeCompare(value);
  if (result < 0) {
    console.log("The string 'yellow' comes before the string '" + value + "'.");
  } else if (result > 0) {
    console.log("The string 'yellow' comes after the string '" + value + "'.");
  } else {
    console.log("The string 'yellow' is equal to the string '" + value + "'.");
  }
}

determineOrder('brick');
determineOrder('yield');
determineOrder('yellow');
determineOrder('zoo');
