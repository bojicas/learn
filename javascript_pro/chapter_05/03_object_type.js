// Object Type - passing a large number of optional arguments

function displayInfo(args) {
  var output = "";

  if (typeof args.name == "string") {
    output += "Name: " + args.name + "\n";
  }

  if (typeof args.age == "number") {
    output += "Age: " + args.age + "\n";
  }

  console.log(output);
}

displayInfo({
  name: "Nicholas",
  age: 29
});

displayInfo({
  name: "Greg"
});