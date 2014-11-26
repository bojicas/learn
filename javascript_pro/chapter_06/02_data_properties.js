// Understanding Objects - Data Properties Example

var person = {};
Object.defineProperty(person, 'name', {
  writable: false,
  value: 'Nicholas'
});

console.log(person.name); // Nicholas
person.name = 'Greg';
console.log(person.name); // Nicholas

var anotherPerson = {};
Object.defineProperty(anotherPerson, 'name', {
  configurable: false,
  value: 'Nicholas'
});

console.log(anotherPerson.name);
delete anotherPerson.name;
console.log(anotherPerson.name);
