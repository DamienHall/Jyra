import Shape from "./shape";
import {Point2D} from "../point";

export default class Square extends Shape {
  static brush;
  static debugOn = false;
  constructor(x = 0, y = 0, size = 0, angle = 0, color = "White") {
    super(x, y, angle, size);
    this.color = color;
  }
  static showDebug(arg) {
    Square.debugOn = arg;
  }
  render() {
    const brush = Square.brush;
    const bounds = this.getBounds();
    if (Square.debugOn) {
      brush.setColor("lime");
      brush.line(
        this.x,
        this.y,
        (Math.cos(this.angle*(Math.PI/180))*this.size)+this.x,
        (Math.sin(this.angle*(Math.PI/180))*this.size)+this.y
      );
      brush.polyLine(bounds)
    }
    bounds.forEach((point, index)=>{
      point.rotateAround(this, this.angle);
    });
    brush.polyLine(bounds)
  }
  getBounds() {
    return [
      new Point2D(this.x-this.size, this.y-this.size),
      new Point2D(this.x+this.size, this.y-this.size),
      new Point2D(this.x+this.size, this.y+this.size),
      new Point2D(this.x-this.size, this.y+this.size)
    ]
  }
}
