// Detecting Arrays

var value = [1, 2, 3];

if (value instanceof Array) {
  console.log("I am an array");
}

if (Array.isArray(value)) {
  console.log("I am definitely an array"); // works also between frames
}