// Transforms

var Engine = famous.core.Engine;
var Surface = famous.core.Surface;
var Transform = famous.core.Transform;
var StateModifier = famous.modifiers.StateModifier;

var mainContext = Engine.createContext();

function createSurface() {
  var surface = new Surface({
    size: [100, 100],
    content: 'surface',
    properties: {
      color: 'white',
      textAlign: 'center',
      backgroundColor: '#FA5C4F'
    }
  });

  mainContext.add(surface);
}

function createModifierSurface() {
  var modifiedSurface = new Surface({
    size: [100, 100],
    content: 'modified surface',
    properties: {
      color: 'white',
      textAlign: 'center',
      backgroundColor: '#FA5C4F'
    }
  });

  var stateModifier = new StateModifier({
    transform: Transform.translate(150, 100, 0)
  });

  mainContext.add(stateModifier).add(modifiedSurface);
}


createSurface();
createModifierSurface();
