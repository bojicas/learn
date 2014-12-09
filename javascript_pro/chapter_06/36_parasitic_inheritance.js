// Parasitic Inheritance

function object(o) {
  function F() {}
  F.prototype = 0;
  return new F();
}

function createAnother(original) {
  var clone = object(original);
  clone.sayHi = function () {
    console.log('hi');
  };
  return clone;
}

var person = {
  name: 'Nicholas',
  friends: [ 'Shelby', 'Court', 'Van' ]
};

var anotherPerson = createAnother(person);
anotherPerson.sayHi();  // hi
