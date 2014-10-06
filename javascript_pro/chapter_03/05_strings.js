// The String Type
console.log("The String Type");
console.log("---------------");

var firstName = "Nicholas";
var lastName = 'Zakas';

console.log(firstName);
console.log(lastName);

var text = "This is the letter sigma: \u03a3.";
console.log(text);
console.log(text.length);

// The Nature of Strings
console.log("\nThe Nature of Strings");
console.log("---------------------");

var lang = "Java";
lang = lang + "Script";
console.log(lang);

// Converting to a String
console.log("\nConverting to a String");
console.log("----------------------");

var age = 11;
var ageAsString = age.toString();
console.log(ageAsString);

var found = true;
var foundAsString = found.toString();
console.log(foundAsString);

var num = 10;
console.log(num);
console.log(num.toString(2));
console.log(num.toString(8));
console.log(num.toString(10));
console.log(num.toString(16));

var value1 = 10;
var value2 = true;
var value3 = null;
var value4;

console.log(String(value1));
console.log(String(value2));
console.log(String(value3));
console.log(String(value4));
