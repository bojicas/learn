// Engine events - resize

var Engine = famous.core.Engine;
var Surface = famous.core.Surface;

var mainContext = Engine.createContext();

var surface = new Surface({
  size: [undefined, 100],
  content: 'resize your browser window',
  properties: {
    color: 'white',
    textAlign: 'center',
    backgroundColor: '#FA5C4F'
  }
});

mainContext.add(surface);

Engine.on('resize', function () {
  surface.setContent('resized');
});
