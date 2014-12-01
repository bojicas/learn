// Object Creation - Prototype Pattern

function Person() {}

Person.prototype.name = 'Nicholas';
Person.prototype.age = 29;
Person.prototype.job = 'Software Engineer';
Person.prototype.sayName = function () {
  console.log(this.name);
};

var person1 = new Person();
var person2 = new Person();

person1.name = 'Greg';
person1.sayName();    // Greg
person2.sayName();    // Nicholas

console.log(person1.name);  // Greg
console.log(person2.name);  // Nicholas
