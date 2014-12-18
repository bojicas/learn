// Halt with Chaining

var Engine = famous.core.Engine;
var Surface = famous.core.Surface;
var Transform = famous.core.Transform;
var StateModifier = famous.modifiers.StateModifier;
var Easing = famous.transitions.Easing;

var mainContext = Engine.createContext();

var surface = new Surface({
  size: [100, 100],
  content: 'click me to halt',
  properties: {
    color: 'white',
    textAlign: 'center',
    backgroundColor: '#FA5C4F'
  }
});

var stateModifier = new StateModifier({
  origin: [0.5, 0],
  align: [0.5, 0]
});

mainContext.add(stateModifier).add(surface);

stateModifier.setTransform(
  Transform.translate(0, 300, 0),
  { duration: 8000, curve: 'linear' }
);

surface.on('click', function () {
  stateModifier.halt();
  surface.setContent('halted');
  stateModifier.setTransform(
    Transform.translate(0, 400, 0),
    { duration: 400, curve: Easing.outBounce }
  );
});
