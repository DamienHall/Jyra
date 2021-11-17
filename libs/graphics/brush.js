export default class Brush {
  // initialization
  constructor(screen) {
    this.screen = screen;
    this.context = screen.getContext();
  }
  // save the current context
  saveContext() {
    this.context.save();
  }
  // restore the previously saved context
  restoreContext() {
    this.context.restore();
  }
  // set the global composition operation
  setGCO(operation) {
    this.context.globalCompositeOperation = operation;
  }
  // set the fillstyle/strokestyle color
  setColor(color) {
    this.context.fillStyle = color;
    this.context.strokeStyle = color;
  }
  // clear a portion of the screen
  clear(x, y, width, height) {
    this.context.clearRect(x, y, width, height);
  }
  // clear the entire screen
  clearScreen() {
    this.clear(0, 0, this.screen.getWidth(), this.screen.getHeight());
  }
  // draw the background
  fillBackground(color) {
    this.saveContext()
    this.setGCO("destination-over");
    this.setColor(color);
    this.rectangle(0, 0, this.screen.getWidth(), this.screen.getHeight());
    this.fill();
    this.restoreContext();
  }
  // draw a rectangle
  rectangle(x, y, width, height) {
    this.beginPath();
    this.context.rect(x, y, width, height);
    this.stroke();
  }
  // draw a square
  square(x, y, size) {
    this.beginPath();
    this.rectangle(x, y, size, size);
    this.stroke();
  }
  // draw a circle
  circle(x, y, radius) {
    this.beginPath();
    this.context.arc(x, y, radius, 0, 2 * Math.PI);
    this.stroke();
  }
  // draw a point
  point(x, y, radius) {
    this.circle(x, y, radius);
    this.context.fill();
  }
  // draw a line
  line(...args) {
    switch(args.length) {
      case 1:
        if (typeof args[0] === "object") {
          this.beginPath();
          this.context.moveTo(args[0][0], args[0][1]);
          this.context.lineTo(args[0][2], args[0][3]);
          this.stroke();
        }
        break;
      case 2:
        if (typeof args[0] === "object" && typeof args[1] === "object") {
          this.beginPath();
          this.context.moveTo(args[0][0], args[0][1]);
          this.context.lineTo(args[1][0], args[1][1]);
          this.stroke();
        }
        break;
      case 4:
        this.beginPath();
        this.context.moveTo(args[0], args[1]);
        this.context.lineTo(args[2], args[3]);
        this.stroke();
        break;
      default:
        console.log("hello");
    }
  }
  // draw a line with multiple points
  polyLine(points) {
    this.beginPath();
    this.context.moveTo(points[0].getX(), points[0].getY());
    points.forEach((point, index)=>{
      if (index != 0) {
        this.context.lineTo(point.getX(), point.getY());
      }
    });
    this.context.lineTo(points[0].getX(), points[0].getY());
    this.stroke();
  }
  // set the size of the line
  setLineSize(size) {
    this.context.lineWidth = size;
  }
  // fill the drawing
  fill(region) {
    this.context.fill(region);
  }
  // begin drawing path
  beginPath() {
    this.context.beginPath();
  }
  // stroke path
  stroke() {
    this.context.stroke();
  }
  // draw an image
  image(src, ...args) {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      console.log(img.naturalHeight);
      console.log("hi");
      this.context.drawImage(
        img,
        (args[0]!==undefined)?args[0]:0,
        (args[1]!==undefined)?args[1]:0,
        (args[2]!==undefined)?args[2]:img.naturalWidth,
        (args[3]!==undefined)?args[3]:img.naturalHeight,
        (args[4]!==undefined)?args[4]:0,
        (args[5]!==undefined)?args[5]:0,
        (args[6]!==undefined)?args[6]:img.naturalWidth,
        (args[7]!==undefined)?args[7]:img.naturalHeight
      )
    }
  }
  // draw text
  text(x = 0, y = 0, text = "", size = 10, color = "White", font = "Arial") {
    this.saveContext();
    this.setColor(color);
    this.context.font = `${size}px ${font}`;
    this.context.fillText(text, x, y);
    this.restoreContext();
  }
  // measure text
  measureText(text) {
    return this.context.measureText(text);
  }
  // set the alignment of the text
  alignText(alignment) {
    this.context.textAlign = alignment;
  }
  // set the font
  setFont(font) {
    this.context.font = font;
  }
  // get function to get the context of canvas
  getContext() {
    return this.context;
  }
}
