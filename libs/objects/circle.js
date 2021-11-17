import Shape from "./shape";
import {Point2D} from "../point";

export default class Circle extends Shape {
  static brush;
  static debugOn = false;
  constructor(x = 0, y = 0, angle = 0, size = 0, color = "White") {
    super(x, y, angle, size);
    this.color = color;
  }
  static showDebug(arg) {
    Circle.debugOn = arg;
  }
  render() {
    const brush = Circle.brush;
    brush.saveContext();
    const bounds = this.getBounds();
    brush.circle(this.x, this.y, this.size);
    if (Circle.debugOn) {
      brush.setColor("lime");
      brush.line(
        this.x,
        this.y,
        (Math.cos(this.angle*(Math.PI/180))*this.size)+this.x,
        (Math.sin(this.angle*(Math.PI/180))*this.size)+this.y
      );
      bounds.forEach((point, index)=>{
        point.rotateAround(this, this.angle);
      });
      brush.polyLine(bounds)
    }
    brush.restoreContext();
  }
  getBounds() {
    return [
      new Point2D(this.x-this.radius, this.y-this.radius),
      new Point2D(this.x+this.radius, this.y-this.radius),
      new Point2D(this.x+this.radius, this.y+this.radius),
      new Point2D(this.x-this.radius, this.y+this.radius)
    ]
  }
}
