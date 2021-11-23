export class Point2D {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  getX() {
    return this.x;
  }
  getY() {
    return this.y;
  }
  getPos() {
    return {x: this.x, y: this.y};
  }
  setPos(x, y) {
    this.x = x;
    this.y = y;
  }
  setX(x) {
    this.x = x;
  }
  setY(y) {
    this.y = y;
  }
  shiftX(x) {
    this.x += x;
  }
  shiftY(y) {
    this.y += y;
  }
  shift(x, y) {
    this.x += x;
    this.y += y;
  }
  translate(x, y) {
    this.x += x;
    this.y += y;
  }
  rotateAround(point, angle) {
    this.shiftX(-point.getX());
    this.shiftY(-point.getY());
    let x = this.getX()*Math.cos(angle*Math.PI/180)-this.getY()*Math.sin(angle*Math.PI/180);
    let y = this.getX()*Math.sin(angle*Math.PI/180)+this.getY()*Math.cos(angle*Math.PI/180);
    this.setX(x+point.getX());
    this.setY(y+point.getY());
  }
}

export class Point3D {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
  getX() {
    return this.x;
  }
  getY() {
    return this.y;
  }
  getZ() {
    return this.z;
  }
  setX(x) {
    this.x = x;
  }
  setY(y) {
    this.y = y;
  }
  setZ(z) {
    this.z = z;
  }
  shiftX(x) {
    this.x += x;
  }
  shiftY(y) {
    this.y += y;
  }
  shiftZ(z) {
    this.z += z;
  }
  shift(x, y, z) {
    this.x += x;
    this.y += y;
    this.z += z;
  }
  translate(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
}
