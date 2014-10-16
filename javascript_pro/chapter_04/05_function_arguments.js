// Function arguments - passing objects

function setName(obj) {
  obj.name = "Nicholas";
}

var person = {};
setName(person);

console.log(person.name);  // Nicholas