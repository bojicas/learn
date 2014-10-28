// Array Type - Location Methods

var numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];

console.log(numbers.indexOf(4));      // 3
console.log(numbers.lastIndexOf(4));  // 5

console.log(numbers.indexOf(4, 4));      // 5
console.log(numbers.lastIndexOf(4, 4));  // 3


var person = { name: "Nicholas" };
var people = [{ name: "Nicholas" }];
var morePeople = [person];

console.log(people.indexOf(person));      // -1
console.log(morePeople.indexOf(person));  // 0