/*****************************************************************************/
/* Client App Namespace  */
/*****************************************************************************/
_.extend(App, {
  animateAndIncrement: function (fview) {
    fview.modifier.halt();
    fview.modifier.setTransform(Famous.Transform.translate(0, 0), {
      method: 'spring',
      period: 200,
      dampingRatio: 0.2,
      velocity: 0.1
    });
    Session.set('clickCount', Session.get('clickCount') + 1);
  }
});

App.helpers = {
};

_.each(App.helpers, function (helper, key) {
  Handlebars.registerHelper(key, helper);
});

_.extend(Famous, {
  Engine: famous.core.Engine,
  View: famous.core.View,
  Surface: famous.core.Surface,
  Modifier: famous.core.Modifier,
  Transform: famous.core.Transform,
  Draggable: famous.modifiers.Draggable,
  StateModifier: famous.modifiers.StateModifier,
  ModifierChain: famous.modifiers.ModifierChain,
  RenderController: famous.views.RenderController,
  EventHandler: famous.core.EventHandler,

  Scrollview: famous.views.Scrollview,
  HeaderFooterLayout: famous.views.HeaderFooterLayout,

  Easing: famous.transitions.Easing,
  Transitionable: famous.transitions.Transitionable,
  GenericSync: famous.inputs.GenericSync,
  MouseSync: famous.inputs.MouseSync,
  TouchSync: famous.inputs.TouchSync,
  Timer: famous.utilities.Timer,
  FastClick: famous.inputs.FastClick
});

Famous.Transitionable.registerMethod('spring',famous.transitions.SpringTransition);
Famous.GenericSync.register({
  mouse: Famous.MouseSync,
  touch: Famous.TouchSync
});
