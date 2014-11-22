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

// sequence - replacement text

result = text.replace(/(.at)/g, 'word ($1)');
console.log(result);            // word (cat), word (bat), word (sat), word (fat)

// htmlEscape()

function htmlEscape(text) {
  return text.replace(/[<>"&"]/g, function (match, pos, originalText) {
    switch (match) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "&":
        return "&amp;";
      case "\"":
        return "&quot;";
    }
  });
}

console.log(htmlEscape('<p class="greeting">Hello world!</p>'));
// &lt;p class=&quot;greeting&quot;&gt;Hello world!&lt;/p&gt;

// split()

var colorText = 'red,blue,green,yellow';

var colors1 = colorText.split(',');
console.log(colors1);   // [ 'red', 'blue', 'green', 'yellow' ]

var colors2 = colorText.split(',', 2);
console.log(colors2);   // [ 'red', 'blue' ]

var colors3 = colorText.split(/[^\,]+/);
console.log(colors3);   // [ '', ',', ',', ',', '' ]
