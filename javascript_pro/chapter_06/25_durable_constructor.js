// durable constructor pattern

function Person(name, age, job) {
  // create the object to return
  var o = {};

  // optional: define private variables/functions here

  // attach methods
  o.sayName = function() {
    console.log(name);
  }

  // return the object
  return o;
}

var friend = Person('Nicholas', 29, 'Software Engineer');
friend.sayName(); // Nicholas
