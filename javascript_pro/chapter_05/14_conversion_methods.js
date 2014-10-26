// Array Type - conversion methods

var person1 = {
  toLocaleString: function () {
    return "Nikolaos";
  },

  toString: function () {
    return "Nicholas";
  }
};

var person2 = {
  toLocaleString: function () {
    return "Grigorios";
  },

  toString: function () {
    return "Greg"
  }
};

var people = [person1, person2];
console.log(people);
console.log("People: " + people);
console.log(people.toString());
console.log(people.toLocaleString());