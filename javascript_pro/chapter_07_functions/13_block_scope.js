// Block Code Example

function outputNumbers(count) {
  (function () {
    for (var i = 0; i < count; i++) {
      console.log(i);
    }
  })();

  // console.log(i); // causes an error
}

outputNumbers(5);
