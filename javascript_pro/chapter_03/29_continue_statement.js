// The continue Statement

var num = 0;

for (var i = 1; i < 10; i++) {
  if (i % 5 === 0) {
    continue;
  }
  num++;
}

console.log(num);
