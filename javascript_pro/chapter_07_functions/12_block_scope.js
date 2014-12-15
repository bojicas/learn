// Mimicking Block Scope

function outputNumbers(count) {
  for (var i = 0; i < count; i++) {
    console.log(i);
  }

  console.log(i);
}

outputNumbers(8);
