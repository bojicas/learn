// Date Type - using Date() object for profiling

function doSomething() {
  for (var i = 0; i < 10000; i++) {
    console.log('');
    // do something
  }
}

// get start time
var start = Date.now();

// call a function
doSomething();

// get stop time
var stop = Date.now();
var result = stop - start;

console.log(result);
