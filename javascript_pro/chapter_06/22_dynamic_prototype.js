// Dynamic Prototype Pattern

function Person(name, age, job) {
  // properties
  this.name = name;
  this.age = age;
  this.job = job;

  // methods
  if (typeof  this.sayName != 'function') {

    Person.prototype.sayName = function () {
      console.log(this.name);
    }

  }
}

var friend = new Person('Nicholas', 29, 'Software Engineer');
friend.sayName(); // Nicholas
