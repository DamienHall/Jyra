// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"5UGAA":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "31648ca538661719";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"7BQdY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _graphicsLib = require("./libs/graphics/graphicsLib");
var _objectLib = require("./libs/objects/objectLib");
var _mouse = require("./libs/inputs/mouse");
var _mouseDefault = parcelHelpers.interopDefault(_mouse);
var _engine = require("./libs/engine");
var _engineDefault = parcelHelpers.interopDefault(_engine);
var _point = require("./libs/point");
let screen = new _graphicsLib.Screen();
let brush = new _graphicsLib.Brush(screen);
class Planet extends _objectLib.Circle {
    constructor(x, y, dir, rad, mass){
        super(x, y, dir, rad);
        this.mass = mass;
        this.vX = Math.random();
        this.vY = Math.random();
        this.gV = new _point.Point2D(0, 0);
    }
    update() {
        let planet = planets[0];
        if (this !== planet) {
            this.gV.setX(Math.atan2(planet.getY() - this.getY(), planet.getX() - this.getX()) * (180 / Math.PI));
            this.gV.setY(planet.mass / Math.pow(Math.sqrt(Math.pow(planet.getX() - this.getX(), 2) + Math.pow(planet.getY() - this.getY(), 2)), 2));
            this.vX += Math.cos(this.gV.getX()) * (180 / Math.PI) * this.gV.getY();
            this.vY += Math.sin(this.gV.getX()) * (180 / Math.PI) * this.gV.getY();
        }
        this.shift(this.vX, this.vY);
        this.angle = Math.atan2(this.vY, this.vX) * (180 / Math.PI);
    }
}
let planets = [];
planets.push(new Planet(window.innerWidth / 2 + 50, window.innerHeight / 2, Math.random() * 360, 10, 1));
planets.push(new Planet(window.innerWidth / 2 + 100, window.innerHeight / 2, Math.random() * 360, 10, 10));
screen.add();
_engineDefault.default.showDebugMenu(true);
_objectLib.Circle.brush = brush;
_objectLib.Circle.showDebug(true);
_engineDefault.default.run((fps, debugOn)=>{
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
        brush.text(0, 40, `CRT: ${_engineDefault.default.getCycleRunTime()}`, 25);
        for(let i = 0; i < planets.length; i++)brush.text(0, 60 + i * 20, `Planet[${i}]: ${Math.round(planets[i].getX())}|${Math.round(planets[i].getY())}`, 25);
    }
});

},{"./libs/graphics/graphicsLib":"1fnAt","./libs/objects/objectLib":"abgDX","./libs/inputs/mouse":"abpkw","./libs/engine":"lONgo","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","./libs/point":"4jx4k"}],"1fnAt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Screen", ()=>_screenDefault.default
);
parcelHelpers.export(exports, "Brush", ()=>_brushDefault.default
);
var _screen = require("./screen");
var _screenDefault = parcelHelpers.interopDefault(_screen);
var _brush = require("./brush");
var _brushDefault = parcelHelpers.interopDefault(_brush);

},{"./screen":"cXR4c","./brush":"t4P3g","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"cXR4c":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Screen {
    // initialization
    constructor(canvas){
        if (canvas == null) {
            // create a canvas element
            this.canvas = document.createElement("canvas");
            // get the drawing context of that canvas element
            this.context = this.canvas.getContext("2d");
            // style the document so that the canvas sits in it properly
            document.body.style = "margin:0px; padding:0px; overflow:hidden";
        } else // set this canvas to the canvas arg
        this.canvas = canvas;
    }
    // add the screen to the document
    add(width, height) {
        // append the screen to the document
        document.body.appendChild(this.canvas);
        // style the canvas
        this.canvas.width = width !== undefined ? width : window.innerWidth;
        this.canvas.height = height !== undefined ? height : window.innerHeight;
        this.canvas.style = "border:none";
    }
    // allow auto resizing
    autoResize(...args) {
        args.length;
        if (arg[0]) window.addEventListener("resize", (_)=>{
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
        });
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
exports.default = Screen;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"t4P3g":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Brush {
    // initialization
    constructor(screen){
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
        this.saveContext();
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
        switch(args.length){
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
            if (index != 0) this.context.lineTo(point.getX(), point.getY());
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
        img.onload = ()=>{
            console.log(img.naturalHeight);
            console.log("hi");
            this.context.drawImage(img, args[0] !== undefined ? args[0] : 0, args[1] !== undefined ? args[1] : 0, args[2] !== undefined ? args[2] : img.naturalWidth, args[3] !== undefined ? args[3] : img.naturalHeight, args[4] !== undefined ? args[4] : 0, args[5] !== undefined ? args[5] : 0, args[6] !== undefined ? args[6] : img.naturalWidth, args[7] !== undefined ? args[7] : img.naturalHeight);
        };
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
exports.default = Brush;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"abgDX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Circle", ()=>_circleDefault.default
);
parcelHelpers.export(exports, "Rectangle", ()=>_rectangleDefault.default
);
parcelHelpers.export(exports, "Square", ()=>_squareDefault.default
);
parcelHelpers.export(exports, "Triangle", ()=>_triangleDefault.default
);
parcelHelpers.export(exports, "Shape", ()=>_shapeDefault.default
);
var _circle = require("./circle");
var _circleDefault = parcelHelpers.interopDefault(_circle);
var _rectangle = require("./rectangle");
var _rectangleDefault = parcelHelpers.interopDefault(_rectangle);
var _square = require("./square");
var _squareDefault = parcelHelpers.interopDefault(_square);
var _triangle = require("./triangle");
var _triangleDefault = parcelHelpers.interopDefault(_triangle);
var _shape = require("./shape");
var _shapeDefault = parcelHelpers.interopDefault(_shape);

},{"./circle":"jkgeB","./rectangle":"8npyT","./square":"cjyvd","./triangle":"3tvE7","./shape":"2D7Js","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"jkgeB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _shape = require("./shape");
var _shapeDefault = parcelHelpers.interopDefault(_shape);
var _point = require("../point");
class Circle extends _shapeDefault.default {
    static brush;
    static debugOn = false;
    constructor(x = 0, y = 0, angle = 0, size = 0, color = "White"){
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
            brush.line(this.x, this.y, Math.cos(this.angle * (Math.PI / 180)) * this.size + this.x, Math.sin(this.angle * (Math.PI / 180)) * this.size + this.y);
            bounds.forEach((point, index)=>{
                point.rotateAround(this, this.angle);
            });
            brush.polyLine(bounds);
        }
        brush.restoreContext();
    }
    getBounds() {
        return [
            new _point.Point2D(this.x - this.radius, this.y - this.radius),
            new _point.Point2D(this.x + this.radius, this.y - this.radius),
            new _point.Point2D(this.x + this.radius, this.y + this.radius),
            new _point.Point2D(this.x - this.radius, this.y + this.radius)
        ];
    }
}
exports.default = Circle;

},{"./shape":"2D7Js","../point":"4jx4k","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"2D7Js":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _point = require("../point");
class Shape extends _point.Point2D {
    constructor(x = 0, y = 0, angle = 0, size = 0){
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
exports.default = Shape;

},{"../point":"4jx4k","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4jx4k":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Point2D", ()=>Point2D
);
parcelHelpers.export(exports, "Point3D", ()=>Point3D
);
class Point2D {
    constructor(x, y){
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
        return {
            x: this.x,
            y: this.y
        };
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
        let x = this.getX() * Math.cos(angle * Math.PI / 180) - this.getY() * Math.sin(angle * Math.PI / 180);
        let y = this.getX() * Math.sin(angle * Math.PI / 180) + this.getY() * Math.cos(angle * Math.PI / 180);
        this.setX(x + point.getX());
        this.setY(y + point.getY());
    }
}
class Point3D {
    constructor(x, y, z){
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"8npyT":[function(require,module,exports) {

},{}],"cjyvd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _shape = require("./shape");
var _shapeDefault = parcelHelpers.interopDefault(_shape);
var _point = require("../point");
class Square extends _shapeDefault.default {
    static brush;
    static debugOn = false;
    constructor(x = 0, y = 0, size = 0, angle = 0, color = "White"){
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
            brush.line(this.x, this.y, Math.cos(this.angle * (Math.PI / 180)) * this.size + this.x, Math.sin(this.angle * (Math.PI / 180)) * this.size + this.y);
            brush.polyLine(bounds);
        }
        bounds.forEach((point, index)=>{
            point.rotateAround(this, this.angle);
        });
        brush.polyLine(bounds);
    }
    getBounds() {
        return [
            new _point.Point2D(this.x - this.size, this.y - this.size),
            new _point.Point2D(this.x + this.size, this.y - this.size),
            new _point.Point2D(this.x + this.size, this.y + this.size),
            new _point.Point2D(this.x - this.size, this.y + this.size)
        ];
    }
}
exports.default = Square;

},{"./shape":"2D7Js","../point":"4jx4k","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"3tvE7":[function(require,module,exports) {

},{}],"abpkw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Mouse {
    static x;
    static y;
    static action = {
        onMove: function() {
        },
        onClick: function() {
        },
        onMouseDown: function() {
        },
        onMouseUp: function() {
        },
        onMouseDrag: function() {
        }
    };
    static initialize() {
        document.addEventListener("mousemove", (e)=>{
            Mouse.x = e.clientX;
            Mouse.y = e.clientY;
            Mouse.action.onMove();
        });
        document.addEventListener("click", (e)=>{
            Mouse.action.onClick();
        });
        document.addEventListener("mousedown", (e)=>{
            Mouse.action.onMouseDown();
        });
        document.addEventListener("mouseup", (e)=>{
            Mouse.action.onMouseUp();
        });
        document.addEventListener("drag", (e)=>{
            Mouse.action.onMouseDrag();
        });
    }
    static onMove(func) {
        Mouse.action.onMove = func;
    }
    static onClick(func) {
        Mouse.action.onClick = func;
    }
    static onMouseDown(func) {
        Mouse.action.onMouseDown = func;
    }
    static onMouseUp(func) {
        Mouse.action.onMouseUp = func;
    }
    static onMouseDrag(func) {
        Mouse.action.onMouseDrag = func;
    }
}
exports.default = Mouse;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"lONgo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Engine {
    static lastTime = 0;
    static timer = 0;
    static deltaTime = 0;
    static cycleRunTime = 0;
    static fps = [];
    static fpsCycle = 0;
    static debugOn = false;
    static run(func) {
        function loop(timeStamp) {
            const startPerf = performance.now();
            Engine.deltaTime = timeStamp - Engine.lastTime;
            Engine.lastTime = timeStamp;
            if (Engine.timer > 1000 / 60) func(Engine.getFPS(), Engine.debugOn);
            else Engine.timer += Engine.deltaTime;
            window.requestAnimationFrame(loop);
            const endPerf = performance.now();
            Engine.cycleRunTime = endPerf - startPerf;
        }
        window.requestAnimationFrame(loop);
    }
    static getFPS() {
        if (Engine.fpsCycle >= 100) Engine.fpsCycle = 0;
        Engine.fps[Engine.fpsCycle] = Math.floor(1000 / Engine.deltaTime);
        Engine.fpsCycle += 1;
        return Math.floor(Engine.fps.reduce((a, b)=>a + b
        ) / Engine.fps.length);
    }
    static getCycleRunTime() {
        return Engine.cycleRunTime + "ms";
    }
    static showDebugMenu(arg) {
        Engine.debugOn = arg;
    }
}
exports.default = Engine;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}]},["5UGAA","7BQdY"], "7BQdY", "parcelRequire94c2")

//# sourceMappingURL=index.38661719.js.map
