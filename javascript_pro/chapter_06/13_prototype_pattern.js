// Object Creation - Prototype Pattern - custom hasPrototypeProperty()

function Person() {}

Person.prototype.name = 'Nicholas';
Person.prototype.age = 29;
Person.prototype.job = 'Software Engineer';
Person.prototype.sayName = function () {
  console.log(this.name);
};

function hasPrototypeProperty(object, name) {
  return !object.hasOwnProperty(name) && (name in object);
}

var person = new Person();
console.log(hasPrototypeProperty(person, 'name'));  // true

person.name = 'Greg';
console.log(hasPrototypeProperty(person, 'name'));  // false
