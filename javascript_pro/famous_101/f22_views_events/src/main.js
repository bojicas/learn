// Program Events - Views

var Engine = famous.core.Engine;
var Surface = famous.core.Surface;
var View = famous.core.View;

var mainContext = Engine.createContext();

var myView = new View();
mainContext.add(myView);

var surface = new Surface({
  size: [100, 100],
  content: 'click me',
  properties: {
    color: 'white',
    textAlign: 'center',
    backgroundColor: '#FA5C4F'
  }
});

myView.add(surface);

surface.pipe(myView);
// myView.subscribe(surface);

myView._eventInput.on('click', function () {
  myView._eventOutput.emit('hello');
});

myView.on('hello', function () {
  surface.setContent('hello');
});
