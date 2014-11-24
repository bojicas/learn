// Understanding Objects - Data Properties Example

var person = {};
Object.defineProperty(person, 'name', {
  configurable: false,
  value: 'Nicholas'
});

console.log(person.name); // Nicholas
person.name = 'Greg';
console.log(person.name); // Nicholas