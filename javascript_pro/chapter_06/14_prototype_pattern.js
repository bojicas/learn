// Prototype Pattern - for-in loop

var o = {
  toString: function () {
    return 'My Object';
  }
};

for (var prop in o) {
  if (prop == 'toString') {
    console.log('Found toString');
  }
}
