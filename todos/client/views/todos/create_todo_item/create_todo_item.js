
/*****************************************************************************/
/* CreateTodoItem: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.CreateTodoItem.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */

  'submit form': function (e, tmpl) {
    e.preventDefault();

    var subject = tmpl.find('input').value;

    Todos.insert({
      subject: subject,
      created_at: new Date,
      is_done: false,
      user_id: Meteor.userId()
    });

    var form = tmpl.find('form');
    form.reset();
  }
});

Template.CreateTodoItem.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* CreateTodoItem: Lifecycle Hooks */
/*****************************************************************************/
Template.CreateTodoItem.created = function () {
};

Template.CreateTodoItem.rendered = function () {
};

Template.CreateTodoItem.destroyed = function () {
};


