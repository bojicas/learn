// Prototype Pattern - Alternate Prototype Syntax

var Person = function () {};

Person.prototype = {
  constructor: Person,
  name: 'Nicholas',
  age: 29,
  job: 'Software Engineer',
  sayName: function () {
    console.log(this.name);
  }
};

var person = new Person();
person.sayName(); // Nicholas

var friend = new Person();
console.log(friend instanceof Object);      // true
console.log(friend instanceof Person);      // true
console.log(friend.constructor == Person);  // true
console.log(friend.constructor == Object);  // false

// note: last 2 lines will have reversed results if constructor: Person is omitted
