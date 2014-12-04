// Parasitic Constructor Pattern (Hybrid Factory Pattern)

function Person(name, age, job) {
  var o = {};
  o.name = name;
  o.age = age;
  o.jab = job;
  o.sayName = function () {
    console.log(this.name);
  };
  return o;
}

var friend = new Person('Nicholas', 29, 'Software Engineer');
friend.sayName(); // Nicholas
