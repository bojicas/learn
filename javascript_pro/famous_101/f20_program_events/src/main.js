// Program Events - Event Handlers Pipe vs Subscribe

var Engine = famous.core.Engine;
var Surface = famous.core.Surface;
var StateModifier = famous.modifiers.StateModifier;
var EventHandler = famous.core.EventHandler;

var mainContext = Engine.createContext();

var surfaceA, surfaceB;
createSurfaces();

var eventHandlerA = new EventHandler();
var eventHandlerB = new EventHandler();

surfaceA.on('click', function () {
  eventHandlerA.emit('hello');
  surfaceA.setContent('said hello');
});

// eventHandlerB.subscribe(eventHandlerA);
eventHandlerA.pipe(eventHandlerB);

eventHandlerB.on('hello', function () {
  surfaceB.setContent('heard hello');
});

function createSurfaces() {
  surfaceA = new Surface({
    size: [100, 100],
    content: 'A<br>click me to say hello',
    properties: {
      color: 'white',
      textAlign: 'center',
      backgroundColor: '#FA5C4F'
    }
  });

  surfaceB = new Surface({
    size: [100, 100],
    content: 'B',
    properties: {
      color: 'white',
      textAlign: 'center',
      backgroundColor: '#FA5C4F'
    }
  });

  var modifierB = new StateModifier({
    origin: [1, 1],
    align: [1, 1]
  });

  mainContext.add(surfaceA);
  mainContext.add(modifierB).add(surfaceB);
}
