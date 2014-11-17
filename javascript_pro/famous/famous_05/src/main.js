// Branching Modifiers

var Engine = famous.core.Engine;
var Surface = famous.core.Surface;
var Transform = famous.core.Transform;
var StateModifier = famous.modifiers.StateModifier;

var mainContext = Engine.createContext();

var downMod = new StateModifier({
  transform: Transform.translate(0, 100, 0)
});

var rightMod = new StateModifier({
  transform: Transform.translate(150, 0, 0)
});

var leftSurface = new Surface({
  size: [120, 100],
  content: 'left surface',
  properties: {
    color: 'white',
    backgroundColor: '#FA5C4F'
  }
});

var rightSurface = new Surface({
  size: [120, 100],
  content: 'right surface',
  properties: {
    color: 'white',
    backgroundColor: '#404040'
  }
});

var node = mainContext.add(downMod);
node.add(leftSurface);
node.add(rightMod).add(rightSurface);
