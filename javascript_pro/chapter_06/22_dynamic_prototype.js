// Dynamic Prototype Pattern

function Person(name, age, job) {
  // properties
  this.name = name;
  this.age = age;
  this.job = job;

  var self = this;

  // methods
  if (typeof  this.sayName !== 'function') {

    Person.prototype.sayName = function () {
      console.log(self.name);
    };

  }
}

var friend = new Person('Nicholas', 29, 'Software Engineer');
friend.sayName(); // Nicholas
