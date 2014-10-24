// Object Type - dot & bracket notations

var person = {
  name: "Nicholas",
  "last name": "Nicholson",
  age: 29
};

console.log(person["name"]);
console.log(person.name);

var propertyName = "name";
console.log(person[propertyName]);

console.log(person["last name"]);