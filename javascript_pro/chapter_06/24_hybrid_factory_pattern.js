// Hybrid Factory Pattern

function SpecialArray() {
  // create the array
  var values = [];

  // add the values
  values.push.apply(values, arguments);

  // assign the method
  values.toPipedString = function () {
    return this.join('|');
  };

  // return it
  return values;
}

var colors = new SpecialArray('red', 'blue', 'green');
console.log(colors.toPipedString());  // red|blue|green
