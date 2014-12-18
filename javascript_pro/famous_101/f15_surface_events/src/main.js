// Surface events
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
  content: 'click me',
  properties: {
    color: 'white',
    textAlign: 'center',
    backgroundColor: '#FA5C4F'
  }
});

mainContext.add(surface);

surface.on('click', function () {
  surface.setProperties({
    backgroundColor: '#878785'
  });
});
