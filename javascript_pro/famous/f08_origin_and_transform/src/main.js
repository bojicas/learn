// Origin and Transform

var Engine = famous.core.Engine;
var Surface = famous.core.Surface;
var Transform = famous.core.Transform;
var StateModifier = famous.modifiers.StateModifier;

var mainContext = Engine.createContext();

var surface = new Surface({
  size: [200, 200],
  content: 'RED SQUARE',
  properties: {
    color: 'white',
    backgroundColor: '#FA5C4F'
  }
});

var modifier = new StateModifier({
  align: [0.5, 0.5],
  // origin: [1, 1],
  transform: Transform.rotateZ(Math.PI/6)
});

mainContext.add(modifier).add(surface);
