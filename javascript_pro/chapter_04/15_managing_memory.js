// Managing Memory

function createPerson (name) {
  var localPerson = {};
  localPerson.name = name;
  return localPerson;
}

var globalPerson = createPerson("Nicholas");

console.log(globalPerson.name);

globalPerson = null;