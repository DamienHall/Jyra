import Shape from "./shape";
import {Point2D} from "../point";

export default class Circle extends Shape {
  static brush;
  static globalDebugOn = false;
  constructor(x = 0, y = 0, size = 0, angle = 0, color = "White") {
    super(x, y, angle, size, new Point2D(x, y));
    this.color = color;
    this.debugOn = false;
    this.origin = new Point2D(x, y);
  }
  showDebug(arg) {
    this.debugOn = arg;
  }
  setOrigin(x, y) {
    this.origin.setPos(x, y);
  }
  render() {
    const brush = Circle.brush;
    brush.saveContext();
    const bounds = this.getBounds();
    if (Circle.globalDebugOn || this.debugOn) {
      brush.setColor("lime");
      brush.line(
        this.rotationPoint.getX(),
        this.rotationPoint.getY(),
        (Math.cos(this.angle*(Math.PI/180))*this.size)+this.rotationPoint.getX(),
        (Math.sin(this.angle*(Math.PI/180))*this.size)+this.rotationPoint.getY()
      );
      brush.polyLine(bounds);
      brush.point(this.origin.getX(), this.origin.getY(), 2);
      brush.point(this.rotationPoint.getX(), this.rotationPoint.getY(), 2);
    }
    brush.restoreContext();
    this.origin.setPos(this.x, this.y);
    this.origin.rotateAround(this.rotationPoint, this.angle);
    brush.circle(this.origin.getX(), this.origin.getY(), this.size);
  }
  getBounds() {
    let rbpoints = [
      new Point2D(this.x-this.size, this.y-this.size),
      new Point2D(this.x+this.size, this.y-this.size),
      new Point2D(this.x+this.size, this.y+this.size),
      new Point2D(this.x-this.size, this.y+this.size)
    ]
    rbpoints.forEach((point, index)=>{
      point.rotateAround(this.rotationPoint, this.angle);
    });
    return rbpoints;
  }
}
