TodosIndexController = RouteController.extend({
  waitOn: function () {
    Meteor.subscribe('todos_index');
  },

  data: function () {
  },

  action: function () {
    this.render();
  }
});
