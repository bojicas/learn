// Module Augmentation Pattern Example

var application = function () {
  // private variables and functions
  var components = [];

  // initialization
  components.push(new Date());

  // create a local copy of application
  var app = new Date();

  // public interface
  app.getComponentCount = function () {
    return components.length;
  };

  app.registerComponent = function (component) {
    if (typeof component == 'object') {
      components.push(component);
    }
  };

  // return it
  return app;
}();

console.log(application.getComponentCount());   // 1
application.registerComponent(new Date());
console.log(application.getComponentCount());   // 2
