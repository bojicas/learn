// Function coditional declaration

var sayHi;

if (true) {
  sayHi = function () {
    console.log('Hi!');
  };
} else {
  sayHi = function () {
    console.log('Yo!');
  };
}

sayHi();
