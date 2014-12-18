// Engine events
// click
// mousedown
// mouseup
// mouseover
// mouseout
// touchstart
// touchmove
// touchend
// touchcancel
// keydown
// keyup
// keypress

var Engine = famous.core.Engine;
var Surface = famous.core.Surface;

var mainContext = Engine.createContext();

var surface = new Surface({
  size: [undefined, 100],
  content: 'press a key in the preview window',
  properties: {
    color: 'white',
    textAlign: 'center',
    backgroundColor: '#FA5C4F'
  }
});

mainContext.add(surface);

Engine.on('keydown', function (e) {
  surface.setContent(e.which);
});
