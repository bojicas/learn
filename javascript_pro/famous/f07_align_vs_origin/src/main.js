// Align vs. Origin

var Engine = famous.core.Engine;
var Surface = famous.core.Surface;
var Transform = famous.core.Transform;
var StateModifier = famous.modifiers.StateModifier;

var mainContext = Engine.createContext();

var lightSquare = new Surface({
  size: [100, 100],
  properties: {
    color: '#000000',
    backgroundColor: '#aaaaaa'
  }
});

var darkSquare = new Surface({
  size: [100, 100],
  properties: {
    color: '#dddddd',
    backgroundColor: '#666666'
  }
});

var centerCircle = new Surface({
  size: [30, 30],
  properties: {
    border: '1px solid #000',
    borderRadius: '15px'
  }
});

var horizontalRule = new Surface({
  size: [undefined, 1],
  properties: {
    backgroundColor: '#000'
  }
});

var verticalRule = new Surface({
  size: [1, undefined],
  properties: {
    backgroundColor: '#000'
  }
});

var originModifier = new StateModifier({
  origin: [0.5, 0.5]
});

var alignModifier = new StateModifier({
  align: [0.5, 0.5]
});

var alignOriginModifier = new StateModifier({
  align: [0.5, 0.5],
  origin: [1, 1]
});

mainContext.add(alignModifier).add(lightSquare);
mainContext.add(alignOriginModifier).add(darkSquare);

var node = mainContext.add(originModifier);
node.add(verticalRule);
node.add(horizontalRule);
node.add(centerCircle);
