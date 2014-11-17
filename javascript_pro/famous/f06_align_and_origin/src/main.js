// Align and Origin

var Engine = famous.core.Engine;
var Surface = famous.core.Surface;
var Transform = famous.core.Transform;
var StateModifier = famous.modifiers.StateModifier;

var mainContext = Engine.createContext();

var defaultSquare = new Surface({
  size: [100, 100],
  properties: {
    backgroundColor: '#444444'
  }
});

var centerCircle = new Surface({
  size: [15, 15],
  properties: {
    border: '1px solid #dddddd',
    borderRadius: '7px'
  }
});

var horizontalRule = new Surface({
  size: [undefined, 1],
  properties: {
    backgroundColor: '#ffffff'
  }
});

var verticalRule = new Surface({
  size: [1, undefined],
  properties: {
    backgroundColor: '#ffffff'
  }
});

var originModifier = new StateModifier({
  origin: [0.5, 0.5]
});

mainContext.add(defaultSquare);

// constructing the crosshair

var node = mainContext.add(originModifier);
node.add(verticalRule);
node.add(horizontalRule);
node.add(centerCircle);
