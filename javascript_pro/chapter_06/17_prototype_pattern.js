// Prototype Pattern - Alternative Syntax - restoring the constructor

var Person = function () {};

Person.prototype = {
  name: 'Nicholas',
  age: 29,
  job: 'Software Engineer',
  sayName: function () {
    console.log(this.name);
  }
};

Object.defineProperty(Person.prototype, 'constructor', {
  enumerable: false,
  value: Person
});

var friend = new Person();
console.log(friend instanceof Object);      // true
console.log(friend instanceof Person);      // true
console.log(friend.constructor == Person);  // true
console.log(friend.constructor == Object);  // false
