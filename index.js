import {Screen, Brush} from "./libs/graphics/graphicsLib";
import {Circle, Square, Rectangle} from "./libs/objects/objectLib";
import Mouse from "./libs/inputs/mouse";
import Engine from "./libs/engine";
import {Point2D} from "./libs/point";

let screen = new Screen();
let brush = new Brush(screen);
Circle.brush = brush;
Square.brush = brush;
Rectangle.brush = brush;

screen.add();
Engine.showDebugMenu(true);

Engine.run((fps, debugOn)=>{
  brush.clearScreen();
  brush.fillBackground("black");
  if (debugOn) {
    brush.setColor("White");
    brush.text(0, 20, `FPS: ${fps}`, 25);
    brush.text(0, 40, `CRT: ${Engine.getCycleRunTime()}`, 25);
  }
})
