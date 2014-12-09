// Understanding Objects - creating objects

var person = new Object();
person.name = 'Nicholas';
person.age = 29;
person.job = 'Software Engineer';

person.sayName = function () {
  console.log(this.name);
};

person.sayName();

// same, using object literals

var samePerson = {
  name: 'Nicholas',
  age: 29,
  job: 'Software Engineer',

  sayName: function () {
    console.log(this.name);
  }
};

samePerson.sayName();
