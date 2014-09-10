TodosDetailController = RouteController.extend({
  waitOn: function () {
    var id = this.params._id;
    Meteor.subscribe('todos_detail', id);
  },

  data: function () {
    var id = this.params._id;
    return Todos.findOne({_id: id});
  },

  action: function () {
    this.layout('NoBreadcrumbs');
    this.render();
  }
});
