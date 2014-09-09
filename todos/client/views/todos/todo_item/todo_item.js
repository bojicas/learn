/*****************************************************************************/
/* TodoItem: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.TodoItem.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */

  'click [name=is_done]': function (e, tmpl) {
    var id = this._id;
    var isDone = tmpl.find('input').checked;
    Todos.update({ _id: id }, {
      $set: { is_done: isDone }
    });
  }
});

Template.TodoItem.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */

  idDoneChecked: function () {
    return this.is_done ? 'checked' : '';
  }
});

/*****************************************************************************/
/* TodoItem: Lifecycle Hooks */
/*****************************************************************************/
Template.TodoItem.created = function () {
};

Template.TodoItem.rendered = function () {
};

Template.TodoItem.destroyed = function () {
};


