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

console.log(person1.hasOwnProperty('name'));  // false

person1.name = 'Greg';
person1.sayName();    // Greg
person2.sayName();    // Nicholas

console.log(person1.hasOwnProperty('name'));  // true
console.log(person2.hasOwnProperty('name'));  // false

console.log(person1.name);  // Greg
console.log(person2.name);  // Nicholas

delete person1.name;
console.log(person1.name);  // Nicholas
person1.sayName();          // Nicholas

console.log(person1.hasOwnProperty('name'));  // false
