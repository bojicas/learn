TodosDetailController = RouteController.extend({
  waitOn: function () {
    var id = this.params._id;
    return [Meteor.subscribe('todos_detail', this.params._id)];
  },

  data: function () {
    var id = this.params._id;
    return Todos.findOne({_id: id});
  },

  action: function () {
    this.render();
  }
});
