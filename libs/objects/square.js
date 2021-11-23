import Shape from "./shape";
import {Point2D} from "../point";

export default class Square extends Shape {
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
    const brush = Square.brush;
    brush.saveContext();
    const bounds = this.getBounds();
    if (Square.globalDebugOn || this.debugOn) {
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
    let outline = [
      new Point2D(this.x-this.size, this.y-this.size),
      new Point2D(this.x+this.size, this.y-this.size),
      new Point2D(this.x+this.size, this.y+this.size),
      new Point2D(this.x-this.size, this.y+this.size)
    ]
    this.origin.setPos(this.x, this.y);
    outline.forEach((point, index)=>{
      point.rotateAround(this.rotationPoint, this.angle);
    });
    this.origin.rotateAround(this.rotationPoint, this.angle);
    brush.polyLine(outline);
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
    let boundingPoints = [
      new Point2D(Math.min(rbpoints[0].getX(),rbpoints[1].getX(),rbpoints[2].getX(),rbpoints[3].getX()),Math.min(rbpoints[0].getY(),rbpoints[1].getY(),rbpoints[2].getY(),rbpoints[3].getY())),
      new Point2D(Math.max(rbpoints[0].getX(),rbpoints[1].getX(),rbpoints[2].getX(),rbpoints[3].getX()),Math.min(rbpoints[0].getY(),rbpoints[1].getY(),rbpoints[2].getY(),rbpoints[3].getY())),
      new Point2D(Math.max(rbpoints[0].getX(),rbpoints[1].getX(),rbpoints[2].getX(),rbpoints[3].getX()),Math.max(rbpoints[0].getY(),rbpoints[1].getY(),rbpoints[2].getY(),rbpoints[3].getY())),
      new Point2D(Math.min(rbpoints[0].getX(),rbpoints[1].getX(),rbpoints[2].getX(),rbpoints[3].getX()),Math.max(rbpoints[0].getY(),rbpoints[1].getY(),rbpoints[2].getY(),rbpoints[3].getY())),
    ]
    return boundingPoints;
  }
}
