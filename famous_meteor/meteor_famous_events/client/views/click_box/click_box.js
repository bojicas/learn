/*****************************************************************************/
/* ClickBox: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.ClickBox.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.ClickBox.helpers({
  'clickCount': function () {
    return Session.get('clickCount');
  }
});

/*****************************************************************************/
/* ClickBox: Lifecycle Hooks */
/*****************************************************************************/
Template.ClickBox.created = function () {
};

Template.ClickBox.rendered = function () {
  Session.set('clickCount', 50);
  var fview = FView.byId('s1');
  fview.surface.on('click', function () {
    App.animateAndIncrement(fview);
  });

  var fview2 = FView.byId('b1');
  fview2.surface.on('click', function () {
    alert('Home Clicked');
  });
};

Template.ClickBox.destroyed = function () {
};
