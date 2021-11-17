import {Point2D} from "../point";

export default class Shape extends Point2D {
  constructor(x = 0, y = 0, angle = 0, size = 0) {
    super(x, y);
    this.size = size;
    this.angle = angle;
  }
  getSize() {
    return this.size;
  }
  setSize(size) {
    this.size = size;
  }
  getAngle() {
    return this.angle;
  }
  setAngle(angle) {
    this.angle = angle;
  }
}
