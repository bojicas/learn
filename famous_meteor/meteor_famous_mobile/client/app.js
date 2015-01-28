/*****************************************************************************/
/* Client App Namespace  */
/*****************************************************************************/
_.extend(App, {
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
  Draggable: famous.core.Draggable,
  StateModifier: famous.modifiers.StateModifier,

  RenderController: famous.views.RenderController,
  EventHandler: famous.core.EventHandler,

  ScrollView: famous.views.ScrollView,
  HeaderFooterLayout: famous.views.HeaderFooterLayout,

  Easing: famous.transitions.Easing,
  Transitionable: famous.transitions.Transitionable,

  GenericSync: famous.inputs.GenericSync,
  MouseSync: famous.inputs.MouseSync,
  TouchSync: famous.inputs.TouchSync,
  Timer: famous.utilities.Timer,

  FastClick: famous.inputs.Famous
});

Famous.GenericSync.register({
  mouse: Famous.MouseSync,
  touch: Famous.TouchSync
});

Logger.setLevel('famous-views', 'info');
