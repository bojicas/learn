// Function Type - bind() method

color = 'red';
var o = { color: 'blue' };

function sayColor() {
  console.log(this.color);
}

var objectSayColor = sayColor.bind(o);
objectSayColor();   // blue
