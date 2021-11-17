// mouse class used for getting mouse input
export default class Mouse {
  static x;
  static y;
  static action = {
    onMove:function(){},
    onClick:function(){},
    onMouseDown:function(){},
    onMouseUp:function(){},
    onMouseDrag:function(){}
  };
  static initialize() {
    document.addEventListener("mousemove", e => {
      Mouse.x = e.clientX;
      Mouse.y = e.clientY;
      Mouse.action.onMove();
    });
    document.addEventListener("click", e => {
      Mouse.action.onClick();
    });
    document.addEventListener("mousedown", e => {
      Mouse.action.onMouseDown();
    });
    document.addEventListener("mouseup", e => {
      Mouse.action.onMouseUp();
    });
    document.addEventListener("drag", e => {
      Mouse.action.onMouseDrag();
    });
  }
  static onMove(func) {
    Mouse.action.onMove = func;
  }
  static onClick(func) {
    Mouse.action.onClick = func;
  }
  static onMouseDown(func) {
    Mouse.action.onMouseDown = func;
  }
  static onMouseUp(func) {
    Mouse.action.onMouseUp = func;
  }
  static onMouseDrag(func) {
    Mouse.action.onMouseDrag = func;
  }
}
