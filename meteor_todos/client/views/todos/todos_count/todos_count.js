
/*****************************************************************************/
/* TodosCount: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.TodosCount.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.TodosCount.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */

  completedCount: function () {
    return Todos.find({ is_done: true }).count();
  },

  totalCount: function () {
    return Todos.find({}).count();
  }
});

/*****************************************************************************/
/* TodosCount: Lifecycle Hooks */
/*****************************************************************************/
Template.TodosCount.created = function () {
};

Template.TodosCount.rendered = function () {
};

Template.TodosCount.destroyed = function () {
};


