/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./dist/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/app.js":
/*!*********************!*\
  !*** ./dist/app.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lightsource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lightsource */ "./dist/lightsource.js");
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grid */ "./dist/grid.js");
/* harmony import */ var _vector2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vector2 */ "./dist/vector2.js");
/* harmony import */ var _prism__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prism */ "./dist/prism.js");
/* harmony import */ var _wavelength__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wavelength */ "./dist/wavelength.js");





function resize(grid, context) {
    const canvas = context.canvas;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const prismCenter = new _vector2__WEBPACK_IMPORTED_MODULE_2__["Vector2"](canvas.width * 0.7, canvas.height * 0.5);
    let lightsources = [
        new _vector2__WEBPACK_IMPORTED_MODULE_2__["Vector2"](canvas.width * 0.2 - 5, canvas.height * 0.2 - 5),
        new _vector2__WEBPACK_IMPORTED_MODULE_2__["Vector2"](canvas.width * 0.5 - 5, canvas.height * 0.5 - 5),
        new _vector2__WEBPACK_IMPORTED_MODULE_2__["Vector2"](canvas.width * 0.8 - 5, canvas.height * 0.8 - 5),
        prismCenter,
    ].map(pos => new _lightsource__WEBPACK_IMPORTED_MODULE_0__["LightSource"](pos));
    lightsources[1].spectrum = [new _wavelength__WEBPACK_IMPORTED_MODULE_4__["Wavelength"](700), new _wavelength__WEBPACK_IMPORTED_MODULE_4__["Wavelength"](400)];
    let prisms = [Object(_vector2__WEBPACK_IMPORTED_MODULE_2__["EquilateralTriangle"])(prismCenter, 100)].map(vertices => new _prism__WEBPACK_IMPORTED_MODULE_3__["Prism"](vertices));
    grid.lights = lightsources;
    grid.prisms = prisms;
}
document.addEventListener('DOMContentLoaded', () => {
    console.log('Darkside started');
    let grid = new _grid__WEBPACK_IMPORTED_MODULE_1__["Grid"]();
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');
    window.addEventListener('resize', () => {
        resize(grid, context);
    });
    resize(grid, context);
    const fps = 1;
    var lastRender = new Date().getTime();
    setInterval(() => {
        var startTime = new Date().getTime();
        var timeDelta = startTime - lastRender;
        grid.update(timeDelta);
        grid.render(context);
        lastRender = new Date().getTime();
        console.log('Update+render took: ' + (lastRender - startTime) + 'ms');
    }, 1000 / fps);
});
//# sourceMappingURL=app.js.map

/***/ }),

/***/ "./dist/draw.js":
/*!**********************!*\
  !*** ./dist/draw.js ***!
  \**********************/
/*! exports provided: drawLine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawLine", function() { return drawLine; });
/**
 * Draw a line between a list of vertices
 * @param points a list of points to draw lines between, including between the first and last vertex
 * @param condig config for styling the rendering
 */
function drawLine(points, context, color) {
    let prev = points[points.length - 1];
    for (let current of points) {
        context.beginPath();
        context.strokeStyle = color.toString();
        context.moveTo(prev.x, prev.y);
        context.lineTo(current.x, current.y);
        context.stroke();
        context.closePath();
        prev = current;
    }
}
//# sourceMappingURL=draw.js.map

/***/ }),

/***/ "./dist/grid.js":
/*!**********************!*\
  !*** ./dist/grid.js ***!
  \**********************/
/*! exports provided: Grid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return Grid; });
/* harmony import */ var _renderconfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderconfig */ "./dist/renderconfig.js");

/**
 * A grid for simulating light refraction
 * This is what can be considered the root object of the simulation
 */
class Grid {
    constructor(lights = [], prisms = [], config = new _renderconfig__WEBPACK_IMPORTED_MODULE_0__["RenderConfig"]()) {
        this.lights = lights;
        this.prisms = prisms;
        this.config = config;
    }
    /**
     * Renders the grid with the given 2D context
     * @param context The rendering context to use for rendering
     */
    render(context) {
        context.fillStyle = this.config.backgroundColor;
        context.fillRect(0, 0, context.canvas.width, context.canvas.height);
        const drawables = this.lights.concat(this.prisms);
        drawables.map(obj => obj.draw(context, this.config));
    }
    update(timeDelta) {
        console.log('Sleep time: ' + timeDelta + 'ms');
    }
}
//# sourceMappingURL=grid.js.map

/***/ }),

/***/ "./dist/lightsource.js":
/*!*****************************!*\
  !*** ./dist/lightsource.js ***!
  \*****************************/
/*! exports provided: LightSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LightSource", function() { return LightSource; });
/* harmony import */ var _vector2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vector2 */ "./dist/vector2.js");
/* harmony import */ var _draw__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./draw */ "./dist/draw.js");
/* harmony import */ var _rgb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rgb */ "./dist/rgb.js");



/**
 * A LightSource which emits Photons in a direction
 */
class LightSource {
    constructor(position = new _vector2__WEBPACK_IMPORTED_MODULE_0__["Vector2"](0, 0), rotation = 0, spectrum = []) {
        this.position = position;
        this.spectrum = spectrum;
        this.rotation = rotation;
    }
    /**
     * Draws the LightSource's beam
     * @param context The rendering context to draw width
     * @param config The render config which defines styles and such
     */
    draw(context, config) {
        if (this.spectrum.length < 1)
            return;
        const avg = (a, b) => {
            return new _rgb__WEBPACK_IMPORTED_MODULE_2__["RGB"](Math.floor((a.r + b.r) / 2), Math.floor((a.g + b.g) / 2), Math.floor((a.b + b.b) / 2));
        };
        const blend = this.spectrum.map(w => w.toRGB()).reduce(avg);
        // TODO: Limit scale to first collision
        const endPoint = _vector2__WEBPACK_IMPORTED_MODULE_0__["Vector2"].fromRadians(this.rotation)
            .scale(300)
            .plus(this.position);
        Object(_draw__WEBPACK_IMPORTED_MODULE_1__["drawLine"])([this.position, endPoint], context, blend);
    }
}
//# sourceMappingURL=lightsource.js.map

/***/ }),

/***/ "./dist/material.js":
/*!**************************!*\
  !*** ./dist/material.js ***!
  \**************************/
/*! exports provided: Material */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Material", function() { return Material; });
/**
 * Material defined by Sellmeier coefficients.
 */
class Material {
    constructor(b1, b2, b3, c1, c2, c3) {
        this.b1 = b1;
        this.b2 = b2;
        this.b3 = b3;
        this.c1 = c1;
        this.c2 = c2;
        this.c3 = c3;
    }
    /**
     * Calculate the refractive index of the material for a given wavelength
     * using the Sellmeier equation.
     *
     * @param wavelength Wavelength in vacuum
     *
     * @returns The refractive index of the material for a given wavelength.
     */
    refractiveIndex(wavelength) {
        const a = (this.b1 * wavelength ** 2) / (wavelength ** 2 - this.c1);
        const b = (this.b2 * wavelength ** 2) / (wavelength ** 2 - this.c2);
        const c = (this.b3 * wavelength ** 2) / (wavelength ** 2 - this.c3);
        return Math.sqrt(1 + a + b + c);
    }
}
//# sourceMappingURL=material.js.map

/***/ }),

/***/ "./dist/prism.js":
/*!***********************!*\
  !*** ./dist/prism.js ***!
  \***********************/
/*! exports provided: Prism */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Prism", function() { return Prism; });
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./material */ "./dist/material.js");
/* harmony import */ var _draw__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./draw */ "./dist/draw.js");


// Schott BK7 glass
const SCHOTT_BK7 = new _material__WEBPACK_IMPORTED_MODULE_0__["Material"](1.03961212, 0.231792344, 0.231792344, 6.00069867e-3, 2.00179144e-2, 1.03560653e2);
/**
 * A prism for use in simulation
 */
class Prism {
    constructor(vertices, material = SCHOTT_BK7) {
        this.vertices = vertices;
        this.material = material;
    }
    draw(context, config) {
        Object(_draw__WEBPACK_IMPORTED_MODULE_1__["drawLine"])(this.vertices, context, config.lineColor);
    }
}
//# sourceMappingURL=prism.js.map

/***/ }),

/***/ "./dist/renderconfig.js":
/*!******************************!*\
  !*** ./dist/renderconfig.js ***!
  \******************************/
/*! exports provided: RenderConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderConfig", function() { return RenderConfig; });
/* harmony import */ var _rgb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rgb */ "./dist/rgb.js");

/**
 * Holds color of lines, color of background and so on.
 * Defines the style of the render, for `themes`
 */
class RenderConfig {
    constructor(backgroundColor = '#000000', lineColor = new _rgb__WEBPACK_IMPORTED_MODULE_0__["RGB"](255, 255, 255), lineWidth = 10, lightsourceColor = '#FFFFFF', lightsourceRadius = 20) {
        this.backgroundColor = backgroundColor;
        this.lineColor = lineColor;
        this.lineWidth = lineWidth;
        this.lightsourceColor = lightsourceColor;
        this.lightsourceRadius = lightsourceRadius;
    }
}
//# sourceMappingURL=renderconfig.js.map

/***/ }),

/***/ "./dist/rgb.js":
/*!*********************!*\
  !*** ./dist/rgb.js ***!
  \*********************/
/*! exports provided: RGB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RGB", function() { return RGB; });
/**
 * sRGB Color Model.
 */
class RGB {
    constructor(r = 0, g = 0, b = 0) {
        this.r = Math.min(Math.max(r, 0), 255);
        this.g = Math.min(Math.max(g, 0), 255);
        this.b = Math.min(Math.max(b, 0), 255);
    }
    /**
     * Creates a hex representation of the RGB value
     * @returns the string in hex: #XXXXXX
     */
    toString() {
        return ('#' +
            this.r.toString(16).padStart(2, '0') +
            this.g.toString(16).padStart(2, '0') +
            this.b.toString(16).padStart(2, '0'));
    }
}
//# sourceMappingURL=rgb.js.map

/***/ }),

/***/ "./dist/vector2.js":
/*!*************************!*\
  !*** ./dist/vector2.js ***!
  \*************************/
/*! exports provided: Vector2, EquilateralTriangle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vector2", function() { return Vector2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquilateralTriangle", function() { return EquilateralTriangle; });
/**
 * Two dimensional vector.
 */
class Vector2 {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    /**
     * Calculate direction of vector.
     * @return rotational orientation of vector in radians
     */
    toRadians() {
        return Math.atan2(this.y, this.x);
    }
    /**
     * Create a unit vector given an angle.
     * @param theta angle in radians
     * @return unit vector with direction theta
     */
    static fromRadians(theta) {
        return new Vector2(Math.cos(theta), Math.sin(theta));
    }
    /**
     * Creates a new Vector  from this which is scaled by the given constant
     * @param scale the scale for the Vector2
     * @return The longer Vector2
     */
    scale(k) {
        return new Vector2(this.x * k, this.y * k);
    }
    /**
     * Returns a new Vector2 which is the current Vector2 moved by this offset in both x and y
     * @param The position offset
     * @return The relocated Vector2
     */
    plus(rhs) {
        return new Vector2(this.x + rhs.x, this.y + rhs.y);
    }
}
/**
 * Create a equalateral triangle given a center, radius, and a rotation
 * @param center center point of the triangle
 * @param radius the distance from the center to the vertices
 * @param rotation the rotation of the triangle
 * @return the three Vector2 which make up the triangle
 */
function EquilateralTriangle(center, radius, rotation = 0) {
    let x = center.x;
    let y = center.y;
    return [
        new Vector2(x - radius * Math.sin(rotation), y - radius * Math.cos(rotation)),
        new Vector2(x - radius * Math.sin(rotation + (2 * Math.PI) / 3), y - radius * Math.cos(rotation + (2 * Math.PI) / 3)),
        new Vector2(x - radius * Math.sin(rotation + (4 * Math.PI) / 3), y - radius * Math.cos(rotation + (4 * Math.PI) / 3)),
    ];
}
//# sourceMappingURL=vector2.js.map

/***/ }),

/***/ "./dist/wavelength.js":
/*!****************************!*\
  !*** ./dist/wavelength.js ***!
  \****************************/
/*! exports provided: Wavelength */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wavelength", function() { return Wavelength; });
/* harmony import */ var _xyz__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./xyz */ "./dist/xyz.js");

/**
 * Wavelength defined by nanometers.
 * Contains method for converting to the XYZ color model which in turn can be
 * converted into sRGB.
 */
class Wavelength {
    constructor(wavelength) {
        this.value = wavelength;
    }
    /**
     * Convert wavelength to RGB color model representation.
     * @returns RGB color model representation
     */
    toRGB() {
        return this.toXYZ().toRGB();
    }
    /**
     * Convert wavelength to XYZ color model representation.
     * @returns RGB color model representation
     */
    toXYZ() {
        return new _xyz__WEBPACK_IMPORTED_MODULE_0__["XYZ"](this.x(), this.y(), this.z());
    }
    x() {
        let t1 = (this.value - 442.0) * (this.value < 442.0 ? 0.0624 : 0.0374);
        let t2 = (this.value - 599.8) * (this.value < 599.8 ? 0.0264 : 0.0323);
        let t3 = (this.value - 501.1) * (this.value < 501.1 ? 0.049 : 0.0382);
        return (0.362 * Math.exp(-0.5 * t1 * t1) +
            1.056 * Math.exp(-0.5 * t2 * t2) -
            0.065 * Math.exp(-0.5 * t3 * t3));
    }
    y() {
        let t1 = (this.value - 568.8) * (this.value < 568.8 ? 0.0213 : 0.0247);
        let t2 = (this.value - 530.9) * (this.value < 530.9 ? 0.0613 : 0.0322);
        return 0.821 * Math.exp(-0.5 * t1 * t1) + 0.286 * Math.exp(-0.5 * t2 * t2);
    }
    z() {
        let t1 = (this.value - 437.0) * (this.value < 437.0 ? 0.0845 : 0.0278);
        let t2 = (this.value - 459.0) * (this.value < 459.0 ? 0.0385 : 0.0725);
        return 1.217 * Math.exp(-0.5 * t1 * t1) + 0.681 * Math.exp(-0.5 * t2 * t2);
    }
}
//# sourceMappingURL=wavelength.js.map

/***/ }),

/***/ "./dist/xyz.js":
/*!*********************!*\
  !*** ./dist/xyz.js ***!
  \*********************/
/*! exports provided: XYZ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XYZ", function() { return XYZ; });
/* harmony import */ var _rgb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rgb */ "./dist/rgb.js");

/**
 * XYZ Color Model.
 */
class XYZ {
    constructor(x = 0, y = 0, z = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    /**
     * Convert to sRGB w/ Standard Illuminant D65
     * @returns RGB equivalent of XYZ object
     */
    toRGB() {
        // Linear transformation for XYZ to RGB
        let r = 3.2404542 * this.x - 1.5371385 * this.y - 0.4985314 * this.z;
        let g = -0.969266 * this.x + 1.8760108 * this.y + 0.041556 * this.z;
        let b = 0.0556434 * this.x - 0.2040259 * this.y + 1.0572252 * this.z;
        // Gamma Correction
        r = Math.floor(this.gammaCorrection(r) * 255);
        g = Math.floor(this.gammaCorrection(g) * 255);
        b = Math.floor(this.gammaCorrection(b) * 255);
        return new _rgb__WEBPACK_IMPORTED_MODULE_0__["RGB"](r, g, b);
    }
    /**
     * Gamma correction for RGB, r, g, and b, values assuming Standard Illuminant D65.
     * https://en.wikipedia.org/wiki/SRGB#The_forward_transformation_(CIE_XYZ_to_sRGB)
     * @param u value to be gamma corrected
     * @returns gamma corrected value u
     */
    gammaCorrection(u) {
        u = Math.max(u, 0);
        if (Math.abs(u) < 0.0031308)
            return 12.92 * u;
        return 1.055 * u ** (1 / 2.4) - 0.055;
    }
}
//# sourceMappingURL=xyz.js.map

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map