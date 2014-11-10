// Regular Expressions

var re = null,
    i;

for (i = 0; i < 10; i++) {
  re = /cat/g;
  console.log(re.test('catastrophe'));
}

for (i = 0; i < 10; i++) {
  re = new RegExp('cat', 'g');
  console.log(re.test('catastrophe'));
}

// Note: all true in ECMAScript 5, different behaviour in older versions
