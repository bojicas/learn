// String Pattern Matching Methods

var text = 'cat, bat, sat, fat';
var pattern = /.at/;

// same as pattern.exec(text)
var matches = text.match(pattern);

console.log(matches);

console.log(matches.index);     // 0
console.log(matches[0]);        // cat
console.log(pattern.lastIndex); // 0

// text.search()

var pos = text.search(/at/);
console.log(pos);               // 1

// text.replace()

var result = text.replace('at', 'ond');
console.log(result);            // cond, bat, sat, fat
console.log(text);

result = text.replace(/at/g, 'ond');
console.log(result);            // cond, bond, sond, fond

// squence - replacement text

result = text.replace(/(.at)/g, 'word ($1)');
console.log(result);            // word (cat), word (bat), word (sat), word (fat)
