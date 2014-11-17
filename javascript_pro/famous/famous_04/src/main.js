

var Engine = famous.core.Engine;
var Surface = famous.core.Surface;
var Transform = famous.core.Transform;
var StateModifier = famous.modifiers.StateModifier;

var mainContext = Engine.createContext();

var translateModifierOne = new StateModifier({
  transform: Transform.translate(200, 0, 0)
});

var translateModifierTwo = new StateModifier({
  transform: Transform.translate(200, 0, 0)
});

var rotateModifierOne = new StateModifier({
  transform: Transform.rotateZ(Math.PI/4)
});

var rotateModifierTwo = new StateModifier({
  transform: Transform.rotateZ(Math.PI/4)
});

var redSurface = new Surface({
  size: [100, 100],
  content: 'RED',
  classes: ['red-bg']
});

var greySurface = new Surface({
  size: [100, 100],
  content: 'GREY',
  classes: ['grey-bg']
});

mainContext
  .add(translateModifierOne)
  .add(rotateModifierOne)
  .add(redSurface);

mainContext
  .add(rotateModifierTwo)
  .add(translateModifierTwo)
  .add(greySurface);
