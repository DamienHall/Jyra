export default class Screen {
  // initialization
  constructor(canvas) {
    if (canvas == null) {
      // create a canvas element
      this.canvas = document.createElement("canvas");
      // get the drawing context of that canvas element
      this.context = this.canvas.getContext("2d");
      // style the document so that the canvas sits in it properly
      document.body.style = "margin:0px; padding:0px; overflow:hidden";
    } else {
      // set this canvas to the canvas arg
      this.canvas = canvas;
    }
  }
  // add the screen to the document
  add(width, height) {
    // append the screen to the document
    document.body.appendChild(this.canvas);
    // style the canvas
    this.canvas.width = (width!==undefined)?width:window.innerWidth;
    this.canvas.height = (height!==undefined)?height:window.innerHeight;
    this.canvas.style = "border:none";
  }
  // allow auto resizing
  autoResize(...args) {
    switch(args.length) {
      case 1:
        break;
      case 3:
        break;
    }
    if (arg[0]) {
      window.addEventListener("resize", _=>{
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
      });
    }
  }
  // set the size of the screen
  resize(width, height) {
    this.canvas.width = width;
    this.canvas.height = height;
  }
  // get function to get the inner canvas
  getCanvas() {
    return this.canvas;
  }
  // get function to get width
  getWidth() {
    return this.canvas.width;
  }
  // get function to get height
  getHeight() {
    return this.canvas.height;
  }
  // get function to get the context of canvas
  getContext() {
    return this.context;
  }
}
