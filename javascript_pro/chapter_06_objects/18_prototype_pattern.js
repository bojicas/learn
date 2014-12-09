// Prototype Pattern - the instance has a pointer only to the prototype,
// not to the constructor.

function Person() {}

var friend = new Person();

Person.prototype = {
  constructor: Person,
  name: 'Nicholas',
  age: 29,
  job: 'Software Engineer',
  sayName: function () {
    console.log(this.name);
  }
};

friend.sayName(); // raises an error
// TypeError: Object #<Person> has no method 'sayName'
