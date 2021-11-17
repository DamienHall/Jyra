export default class Engine {
  static lastTime = 0;
  static timer = 0;
  static deltaTime = 0;
  static cycleRunTime = 0.0;
  static fps = [];
  static fpsCycle = 0;
  static debugOn = false;
  static run(func) {
    function loop(timeStamp) {
      const startPerf = performance.now();
      Engine.deltaTime = timeStamp - Engine.lastTime;
      Engine.lastTime = timeStamp;
      if (Engine.timer > (1000 / 60)) {
          func(Engine.getFPS(), Engine.debugOn);
      } else {
        Engine.timer += Engine.deltaTime;
      }
      window.requestAnimationFrame(loop);
      const endPerf = performance.now();
      Engine.cycleRunTime = endPerf - startPerf;
    }
    window.requestAnimationFrame(loop);
  }
  static getFPS() {
    if (Engine.fpsCycle >= 100) {
      Engine.fpsCycle = 0;
    }
    Engine.fps[Engine.fpsCycle] = Math.floor(1000/Engine.deltaTime);
    Engine.fpsCycle += 1;
    return Math.floor(Engine.fps.reduce((a, b)=>a+b)/Engine.fps.length);
  }
  static getCycleRunTime() {
    return Engine.cycleRunTime+"ms";
  }
  static showDebugMenu(arg) {
    Engine.debugOn = arg;
  }
}
