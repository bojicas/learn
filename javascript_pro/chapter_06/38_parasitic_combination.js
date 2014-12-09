// Parasitic Combination Inheritance

function inheritPrototype(subType, superType) {
  var prototype = Object.create(superType.prototype);
  prototype.constructor = subType;
  subType.prototype = prototype;
}

function SuperType(name) {
  this.name = name;
  this.colors = [ 'red', 'blue', 'green' ];
}

SuperType.prototype.sayName = function () {
  console.log(this.name);
};

function SubType(name, age) {
  SuperType.call(this, name); // second call to SuperType()
  this.age = age;
}

inheritPrototype(SubType, SuperType);
SubType.prototype.sayAge = function () {
  console.log(this.age);
};

var instance = new SubType('Silviu', 36);
instance.sayName(); // Silviu
instance.sayAge();  // 36
