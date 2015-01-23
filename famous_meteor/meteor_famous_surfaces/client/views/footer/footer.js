/*****************************************************************************/
/* Footer: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.Footer.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.Footer.helpers({
  react: function () {
    return Session.get('react');
  }
});

/*****************************************************************************/
/* Footer: Lifecycle Hooks */
/*****************************************************************************/
Template.Footer.created = function () {
};

Template.Footer.rendered = function () {
  Session.set('react', 'REACTIVE');
};

Template.Footer.destroyed = function () {
};
