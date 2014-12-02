// Prototype Pattern - Alternate Prototype Syntax

var Person = function () {};

Person.prototype = {
  name: 'Nicholas',
  age: 29,
  job: 'Software Engineer',
  sayName: function () {
    console.log(this.name);
  }
};

var person = new Person();
person.sayName(); // Nicholas
