// Prototype Chaining Example

function SuperType() {
  this.prototype = true;
}

SuperType.prototype.getSuperValue = function () {
  return this.property;
}

function SubType() {
  this.subproperty = false;
}

// inherit from SuperType
SubType.prototype = new SuperType();

// new method
SubType.prototype.getSubValue = function () {
  return this.subproperty;
};

// override existing method
SubType.prototype.getSuperValue = function () {
  return false;
}

var instance = new SubType();
console.log(instance.getSuperValue());  // false
