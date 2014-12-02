// Object Keys Example

var Person = function () {};

Person.prototype.name = 'Nicholas';
Person.prototype.age = 29;
Person.prototype.job = 'Software Engineer';
Person.prototype.sayName = function () {
  console.log(this.name);
};

var keys = Object.keys(Person.prototype);
console.log(keys);    // [ 'name', 'age', 'job', 'sayName' ]

var p1 = new Person();
p1.name = 'Rob';
p1.age = 31;
var p1keys = Object.keys(p1);
console.log(p1keys);  // [ 'name', 'age' ]

var allKeys = Object.getOwnPropertyNames(Person.prototype);
console.log(allKeys); // [ 'constructor', 'name', 'age', 'job', 'sayName' ]
