// No Block-Level Scopes

if (true) {
  var color = "blue";
}

console.log(color);

for (var i = 0; i < 10; i++) {
  // do something
}

console.log(i);
