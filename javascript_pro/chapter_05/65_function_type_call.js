// Function Type - call() method

window.color = 'red';
var o = { color: 'blue' };

function sayColor() {
  alert(this.color);
}

sayColor();

sayColor.call(this);
sayColor.call(window);
sayColor.call(o);
