var Engine = famous.core.Engine;
var Surface = famous.core.Surface;
var Transform = famous.core.Transform;
var StateModifier = famous.modifiers.StateModifier;

var mainContext = Engine.createContext();

var stateModifier = new StateModifier({
  transform: Transform.translate(150, 100, 0)
});

var surface = new Surface({
  size: [100, 100],
  properties: {
    backgroundColor: '#FA5C4F'
  }
});

mainContext.add(stateModifier).add(surface);
