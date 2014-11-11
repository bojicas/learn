// RegExp Instance Methods - more about exec()

var text = 'cat, bat, sat, fat';
var pattern1 = /.at/;

var matches  = pattern1.exec(text);
console.log(matches.index); // 0
console.log(matches[0]); // cat
console.log(pattern1.lastIndex); // 0

matches = pattern1.exec(text);
console.log(matches.index); // 0
console.log(matches[0]); // cat
console.log(pattern1.lastIndex); // 0

var pattern2 = /.at/g;

matches = pattern2.exec(text);
console.log(matches.index); // 0
console.log(matches[0]); // cat
console.log(pattern2.lastIndex); // 3

matches = pattern2.exec(text);
console.log(matches.index); // 5
console.log(matches[0]); // bat
console.log(pattern2.lastIndex); // 8
