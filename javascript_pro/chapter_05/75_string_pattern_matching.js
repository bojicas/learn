// String Pattern Matching Methods

var text = 'cat, bat, sat, fat';
var pattern = /.at/;

// same as pattern.exec(text)
var matches = text.match(pattern);

console.log(matches);

console.log(matches.index);     // 0
console.log(matches[0]);        // cat
console.log(pattern.lastIndex); // 0
