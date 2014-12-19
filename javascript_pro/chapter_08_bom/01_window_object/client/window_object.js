// Delete Operator Example

var age = 29;
window.color = 'red';

function sayAge() {
  alert(age);
}

sayAge(); // 29

delete window.age;    // returns false

delete window.color;  // returns true

alert(window.age);    // undefined
alert(window.color);  // undefined
