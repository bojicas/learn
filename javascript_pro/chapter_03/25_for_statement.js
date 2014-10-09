// The for Statement

var count = 10;

for (var i = 0; i < count; i++) {
  console.log(i); // 0 .. 9
}

console.log(i); // 10


// infinite loop:
//
// for (;;) {
//  doSomething();
// }


// using for as a while loop

var count = 10;

var i = 0;

for (; i < count; ) {
  console.log(i);
  i++;
}
