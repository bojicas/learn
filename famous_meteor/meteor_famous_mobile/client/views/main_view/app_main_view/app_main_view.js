/*****************************************************************************/
/* AppMainView: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.AppMainView.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.AppMainView.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* AppMainView: Lifecycle Hooks */
/*****************************************************************************/
Template.AppMainView.created = function () {
};

Template.AppMainView.rendered = function () {
  var flag = false;
  var slideDuration = 300;

  var hfl = new Famous.Transitionable(0);

  var fview = FView.byId('hfl');

  fview.modifier.transformFrom(function () {
    var currentPosition = hfl.get();
    return Famous.Transform.translate(currentPosition, 0, 0);
  });

  var sync = new Famous.GenericSync(['mouse', 'touch'], {
    direction: Famous.GenericSync.DIRECTION_X
  });

  Famous.Engine.pipe(sync);

  sync.on('end', function () {
    if (!flag) {
      flag = true;

      if (hfl.get() === 0) {
        hfl.set((window.innerWidth - (window.innerWidth * 0.30)), {
          duration: slideDuration
        });
        FView.byId('backing').modifier.setTransform(Famous.Transform.translate(0, 0, -10));
      } else {
        hfl.set(0,  {duration: slideDuration}, function () {
          return FView.byId('backing').modifier.setTransform(Famous.Transform.translate(0, 0, -2));
        });
      }
      Meteor.setTimeout(function () { flag = false; }, 200);
    }
  });
};

Template.AppMainView.destroyed = function () {
};
