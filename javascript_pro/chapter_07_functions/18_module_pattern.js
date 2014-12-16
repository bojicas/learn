// The Module Pattern

var application = function () {
  // private variables and functions
  var components = [];
  // initialization
  // components.push(new BaseComponent());
  components.push(new Date());

  // public interface
  return {
    getComponentCount: function () {
      return components.length;
    },

    registerComponent: function (component) {
      if (typeof component == 'object') {
        components.push(component);
      }
    }
  };
}();

console.log(application.getComponentCount());   // 1
application.registerComponent(new Date());
console.log(application.getComponentCount());   // 2
