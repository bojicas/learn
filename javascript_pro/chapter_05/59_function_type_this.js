// Function Type - this argument

window.color = 'red';
var o = { color: 'blue' };

function sayColor() {
  alert(this.color);
}

sayColor(); // red

o.sayColor = sayColor;
o.sayColor();
