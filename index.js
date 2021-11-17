import {Screen, Brush} from "./libs/graphics/graphicsLib";
import {Circle} from "./libs/objects/objectLib";
import Mouse from "./libs/inputs/mouse";
import Engine from "./libs/engine";
import {Point2D} from "./libs/point";

let screen = new Screen();
let brush = new Brush(screen);

class Planet extends Circle {
  constructor(x, y, dir, rad, mass) {
    super(x, y, dir, rad);
    this.mass = mass;
    this.vX = Math.random();
    this.vY = Math.random();
    this.gV = new Point2D(0, 0);
  }
  update() {
    let planet = planets[0];
    if (this !== planet) {

      this.gV.setX(Math.atan2(planet.getY()-this.getY(), planet.getX()-this.getX())*(180/Math.PI));
      this.gV.setY(planet.mass/Math.pow(Math.sqrt(
        Math.pow(planet.getX()-this.getX(),2)+
        Math.pow(planet.getY()-this.getY(),2
      )),2));
      this.vX += (Math.cos(this.gV.getX())*(180/Math.PI))*this.gV.getY();
      this.vY += (Math.sin(this.gV.getX())*(180/Math.PI))*this.gV.getY();
    }
    this.shift(this.vX, this.vY);
    this.angle = Math.atan2(this.vY, this.vX)*(180/Math.PI);
  }
}

let planets = [];
planets.push(new Planet(window.innerWidth/2+(1*50), window.innerHeight/2, Math.random()*360, 10, 1));
planets.push(new Planet(window.innerWidth/2+(2*50), window.innerHeight/2, Math.random()*360, 10, 10));

screen.add();
Engine.showDebugMenu(true);
Circle.brush = brush;
Circle.showDebug(true);

Engine.run((fps, debugOn)=>{
  planets[0].vX = 0;
  planets[0].vY = 0;
  brush.clearScreen();
  brush.fillBackground("black");
  planets.forEach((planet, index)=>{
    planet.update();
    planet.render();
  });

  if (debugOn) {
    brush.setColor("White");
    brush.text(0, 20, `FPS: ${fps}`, 25);
    brush.text(0, 40, `CRT: ${Engine.getCycleRunTime()}`, 25);
    for (let i = 0; i < planets.length; i++) {
      brush.text(0, 60+(i*20), `Planet[${i}]: ${Math.round(planets[i].getX())}|${Math.round(planets[i].getY())}`, 25)
    }

  }
})
