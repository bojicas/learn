// Object Creation - The Constructor Pattern

function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName = function () {
    console.log(this.name);
  };
}

var person1 = new Person('Nicholas', 29, 'Software Engineer');
var person2 = new Person('Greg', 27, 'Doctor');

person1.sayName();    // Nicholas
person2.sayName();    // Greg

console.log(person1.constructor === Person);  // true
console.log(person2.constructor === Person);  // true

console.log(person1 instanceof Object);       // true
console.log(person1 instanceof Person);       // true
console.log(person2 instanceof Object);       // true
console.log(person2 instanceof Person);       // true

// call as function
Person('Silviu', 36, 'Software Engineer');
global.sayName();    // Silviu (adds to global/window)

// call in the scope of another object
var o = {};
Person.call(o, 'Kristen', 25, 'Nurse');
o.sayName();          // Kristen
