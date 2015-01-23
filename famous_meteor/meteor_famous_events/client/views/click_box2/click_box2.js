/*****************************************************************************/
/* ClickBox2: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.ClickBox2.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
  'click #b2': function (e, tmpl) {
    var fview = FView.from(tmpl);
    App.animateAndIncrement(fview);
  }
});

Template.ClickBox2.helpers({
  'clickCount': function () {
    return Session.get('clickCount');
  }
});

/*****************************************************************************/
/* ClickBox2: Lifecycle Hooks */
/*****************************************************************************/
Template.ClickBox2.created = function () {
};

Template.ClickBox2.rendered = function () {
};

Template.ClickBox2.destroyed = function () {
};
