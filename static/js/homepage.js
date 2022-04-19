/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./lib/homepage.js":
/*!*************************!*\
  !*** ./lib/homepage.js ***!
  \*************************/
/***/ (() => {

eval("function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError(\"Cannot call a class as a function\")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,\"value\"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),Object.defineProperty(a,\"prototype\",{writable:!1}),a}var Carousel=/*#__PURE__*/function(){function a(){var b=this,c=0<arguments.length&&void 0!==arguments[0]?arguments[0]:\"slides\",d=1<arguments.length&&void 0!==arguments[1]?arguments[1]:\"slide\",e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:2e3,f=3<arguments.length&&void 0!==arguments[3]?arguments[3]:\"next\",g=4<arguments.length&&void 0!==arguments[4]?arguments[4]:\"previous\";_classCallCheck(this,a),this.slides=document.querySelectorAll(\"#\".concat(c,\" .\").concat(d)),this.isPlaying=!0,this.currentSlide=0,this.slideInterval=setInterval(this.nextSlide.bind(this),e),this.slideControls=document.querySelectorAll(\"#slide-controls .slide-control\"),this.slideControls[0].classList.add(\"slide-control--active\"),Array.from(this.slideControls).forEach(function(a,c){a.addEventListener(\"click\",function(){console.log(\"this\",b),b.pauseSlideshow(),b.goToSlide(c),b.playSlideshow()})}),this.nextBtn=document.getElementById(f),this.previousBtn=document.getElementById(g),this.nextBtn.addEventListener(\"click\",function(){b.pauseSlideshow(),b.nextSlide(),b.playSlideshow()}),this.previousBtn.addEventListener(\"click\",function(){b.pauseSlideshow(),b.previousSlide(),b.playSlideshow()}),this.nextSlide()}return _createClass(a,[{key:\"nextSlide\",value:function nextSlide(){console.log(\"this\",this),this.goToSlide(this.currentSlide+1)}},{key:\"previousSlide\",value:function previousSlide(){this.goToSlide(this.currentSlide-1)}},{key:\"goToSlide\",value:function goToSlide(a){this.slides[this.currentSlide].className=\"slide\",this.slideControls[this.currentSlide].classList.remove(\"slide-control--active\"),this.currentSlide=(a+this.slides.length)%this.slides.length,this.slideControls[this.currentSlide].classList.add(\"slide-control--active\"),this.slides[this.currentSlide].className=\"slide showing\"}},{key:\"pauseSlideshow\",value:function pauseSlideshow(){this.isPlaying=!1,clearInterval(this.slideInterval)}},{key:\"playSlideshow\",value:function playSlideshow(){this.isPlaying=!0,this.slideInterval=setInterval(this.nextSlide.bind(this),2e3)}}]),a}(),carousel=new Carousel;\n\n//# sourceURL=webpack://code-exercise/./lib/homepage.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./lib/homepage.js"]();
/******/ 	
/******/ })()
;