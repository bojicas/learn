// Data Properties Example

var person = {};
Object.defineProperty(person, 'name', {
  configurable: false,
  value: 'Nicholas'
});

// throws an error
Object.defineProperty(person, 'name', {
  configurable: true,
  value: 'Nicholas'
});
