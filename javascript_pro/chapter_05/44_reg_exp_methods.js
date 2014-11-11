// RegExp Instance Methods - exec()

var text = "mom and dad and baby";
var pattern = /mom( and dad( and baby)?)?/gi;

var matches = pattern.exec(text);
console.log(matches);

console.log(matches.index);
console.log(matches.input);
console.log(matches[0]);
console.log(matches[1]);
console.log(matches[2]);
