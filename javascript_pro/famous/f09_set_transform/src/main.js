// Opacity

var Engine = famous.core.Engine;
var Surface = famous.core.Surface;
var Transform = famous.core.Transform;
var StateModifier = famous.modifiers.StateModifier;

var mainContext = Engine.createContext();

var surface = new Surface({
  size: [100, 100],
  properties: {
    color: 'white',
    textAlign: 'center',
    backgroundColor: '#FA5C4F'
  }
});

var stateModifier = new StateModifier();

mainContext.add(stateModifier).add(surface);

stateModifier.setTransform(
  Transform.translate(100, 300, 0),
  { duration: 3000, curve: 'easeInOut' }
);
