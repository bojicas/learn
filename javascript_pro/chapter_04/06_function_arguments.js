// Function arguments - objects are passed by value

function setName(obj) {
  obj.name = "Nicholas";
  obj = {};
  obj.name = "Greg";
}

var person = {};
setName(person);

console.log(person.name);  // Nicholas