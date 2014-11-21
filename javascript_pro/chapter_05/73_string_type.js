// String Type

var stringObject = new String('hello world');
console.log(stringObject);

var stringValue = 'hello world';

console.log(stringValue.length);        // 11

// character methods

console.log(stringValue.charAt(1));     // e
console.log(stringValue.charCodeAt(1)); // 101
console.log(stringValue[1]);            // e

// string manipulation methods

stringValue = 'hello ';
var result = stringValue.concat('world');
console.log(result);        // hello world
console.log(stringValue);   // hello

stringValue = 'hello ';
result = stringValue.concat('world', '!');
console.log(result);        // hello world!
console.log(stringValue);   // hello

// other methods for creating strings from a substring
// slice(), substr(), substring()

stringValue = 'hello world';

console.log(stringValue.slice(3));      // lo world
console.log(stringValue.substring(3));
console.log(stringValue.substr(3));

console.log(stringValue.slice(3, 7));   // lo w
console.log(stringValue.substring(3, 7));

console.log(stringValue.substr(3, 7));  // lo worl
