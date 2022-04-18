/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./lib/cart.js":
/*!*********************!*\
  !*** ./lib/cart.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Cart\": () => (/* binding */ Cart),\n/* harmony export */   \"CartController\": () => (/* binding */ CartController),\n/* harmony export */   \"CartItem\": () => (/* binding */ CartItem),\n/* harmony export */   \"cartService\": () => (/* binding */ cartService),\n/* harmony export */   \"cartView\": () => (/* binding */ cartView)\n/* harmony export */ });\nfunction _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,\"value\"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),Object.defineProperty(a,\"prototype\",{writable:!1}),a}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError(\"Cannot call a class as a function\")}var CartItem=/*#__PURE__*/_createClass(function b(a){var c=a.id,d=a.imgUrl,e=a.quantity,f=a.total,g=a.price,h=a.title;_classCallCheck(this,b),this.id=c,this.imgUrl=d,this.quantity=e||1,this.price=g,this.total=f||g,this.title=h});var CartService=/*#__PURE__*/function(){function a(){_classCallCheck(this,a),this.cartTotal=0,this.items=[]}return _createClass(a,[{key:\"setItems\",value:function setItems(a){this.items=a}},{key:\"getItem\",value:function getItem(a){var b=this.items.find(function(b){return b.id===a});return b?b:null}},{key:\"getItemsCount\",value:function getItemsCount(){return this.items.length}},{key:\"addNewItem\",value:function addNewItem(a){console.log(\"item\",a);var b=this.items.find(function(b){return b.id===a.id});if(b)this.incrementQuantity(a.id);else{var c=new CartItem(a);this.items.push(c),console.log(this.items)}}},{key:\"removeItem\",value:function removeItem(a){var b=this.items.findIndex(function(b){return b.id===a});-1<b&&this.items.splice(b,1)}},{key:\"incrementQuantity\",value:function incrementQuantity(a){var b=this.items.find(function(b){return b.id===a});b&&(b.quantity++,this.updateItemTotal(a),console.log(this.items))}},{key:\"decrementQuantity\",value:function decrementQuantity(a){var b=this.items.find(function(b){return b.id===a});b&&0<b.quantity&&(b.quantity--,0<b.quantity&&this.updateItemTotal(a))}},{key:\"updateCartTotal\",value:function updateCartTotal(){this.cartTotal=this.items.reduce(function(a,b){a+=b.total},0)}},{key:\"updateItemTotal\",value:function updateItemTotal(a){var b=this.items.find(function(b){return b.id===a});console.log(b),b&&(b.total=b.quantity*b.price,this.updateCartTotal())}}]),a}(),CartView=/*#__PURE__*/function(){function a(){_classCallCheck(this,a),this.cartListEl=document.getElementById(\"cart-list\"),this.cartItemsCountEl=document.getElementById(\"cart-items-count\")}return _createClass(a,[{key:\"renderCartItems\",value:function renderCartItems(a){var b=this;this.cartListEl.innerHTML=\"\",console.log(\"items\",JSON.stringify(a)),a.forEach(function(a){console.log(\"item\",a);var c=b.getCartItemHtml(a);b.cartListEl.appendChild(c)})}},{key:\"getCartItemHtml\",value:function getCartItemHtml(a){var b=document.createElement(\"li\");return b.classList.add(\"cart__item\"),b.dataset.id=a.id,b.innerHTML=\"\\n            <img class=\\\"cart__item__img\\\" src=\\\"\".concat(a.imgUrl,\"\\\" alt=\\\"{\").concat(a.title,\"}\\\"></img>\\n            <div class=\\\"cart__item__product\\\">\\n                <h4 class=\\\"cart__item__title\\\">\").concat(a.title,\"</h4>\\n                <div class=\\\"cart__item__quantity-box\\\">\\n                    <div class=\\\"cart__item__quantity-dec\\\">&#45;</div>\\n                    <div class=\\\"cart__item__quantity\\\">\").concat(a.quantity,\"</div>\\n                    <div class=\\\"cart__item__quantity-inc\\\">&#43;</div>\\n                    <div class=\\\"cart__item__quantity-times\\\">&#10006;</div>\\n                    <div class=\\\"cart__item__quantity-price\\\">Rs.\").concat(a.price,\"</div>\\n                </div>\\n            </div>\\n            <div class=\\\"cart__item__total\\\">Rs.\").concat(a.total,\"</div>\\n        \"),b}},{key:\"getCartItemHtmlLong\",value:function getCartItemHtmlLong(a){var b=document.createElement(\"li\");b.classList.add(\"cart__item\"),b.dataset.id=a.id;// IMAGE\nvar c=document.createElement(\"img\");c.classList.add(\"cart__item__img\"),c.setAttribute(\"alt\",a.title),c.src=a.imgUrl,b.appendChild(c);// PRODUCT\nvar d=document.createElement(\"div\");d.classList.add(\"cart__item__product\");// TITLE\nvar e=document.createElement(\"h4\");e.textContent=a.title,d.appendChild(e);// QUANTITY BOX\nvar f=document.createElement(\"div\");f.classList.add(\"cart__item__quantity-box\");// QUANTITY DEC\nvar g=document.createElement(\"div\");g.classList.add(\"cart__item__quantity-dec\"),g.textContent=\"&#45;\",f.appendChild(g);// QUANTITY\nvar h=document.createElement(\"div\");h.classList.add(\"cart__item__quantity\"),h.textContent=a.quantity,f.appendChild(h);// QUANTITY INC\nvar i=document.createElement(\"div\");i.classList.add(\"cart__item__quantity-inc\"),i.textContent=\"&#43;\",f.appendChild(i);// QUANTITY TIMES\nvar j=document.createElement(\"div\");j.classList.add(\"cart__item__quantity-times\"),j.textContent=\"&#10006;\",f.appendChild(j);// QUANTITY PRICE\nvar k=document.createElement(\"div\");k.classList.add(\"cart__item__quantity-price\"),k.textContent=a.price,f.appendChild(k),d.appendChild(f),b.appendChild(d);// TOTAL\nvar l=document.createElement(\"div\");return l.classList.add(\"cart__item__total\"),l.textContent=a.total,b.appendChild(l),b}},{key:\"updateItem\",value:function updateItem(a){var b=this.cartListEl.querySelector(\"[data-id=\\\"\".concat(a.id,\"\\\"\"));b&&(b.querySelector(\".cart__item__quantity\").textContent=a.quantity,b.querySelector(\".cart__item__total\").textContent=\"Rs.\".concat(a.total))}},{key:\"addNewItem\",value:function addNewItem(a){var b=this.getCartItemHtml(a);this.cartListEl.appendChild(b)}},{key:\"getLiElById\",value:function getLiElById(a){var b=this.cartListEl.querySelector(\"[data-id=\\\"\".concat(a,\"\\\"\"));return b}},{key:\"removeItem\",value:function removeItem(a){var b=this.getLiElById(a);this.cartListEl.removeChild(b)}},{key:\"updateCartCount\",value:function updateCartCount(a){this.cartItemsCountEl.textContent=\"\".concat(a,\" Items\")}}]),a}();var CartController=/*#__PURE__*/function(){function a(b,c){_classCallCheck(this,a),this.cartView=c,this.cartService=b,this.setItemsFromLocalStorage(),this.setUpHandlers()}return _createClass(a,[{key:\"setItemsFromLocalStorage\",value:function setItemsFromLocalStorage(){var a=localStorage.getItem(\"cartItems\");null!==a&&(this.cartService.setItems(JSON.parse(a)),this.cartView.renderCartItems(this.cartService.items),this.cartView.updateCartCount(this.cartService.getItemsCount()))}},{key:\"setUpHandlers\",value:function setUpHandlers(){var a=this;Array.from(this.cartView.cartListEl.children).forEach(function(b){var c=b.dataset.id,d=b.querySelector(\".cart__item__quantity-dec\");// DECREMENT HANDLER\nd.addEventListener(\"click\",function(b){a.handleDecrement(c,b)});// INCREMENT HANDLER\nvar e=b.querySelector(\".cart__item__quantity-inc\");e.addEventListener(\"click\",function(b){a.handleIncrement(c,b)})})}},{key:\"handleDecrement\",value:function handleDecrement(a){this.cartService.decrementQuantity(a);var b=this.cartService.getItem(a);0<b.quantity?this.cartView.updateItem(this.cartService.getItem(a)):(this.cartService.removeItem(a),this.cartView.removeItem(a),this.cartView.updateCartCount(this.cartService.getItemsCount()))}},{key:\"handleIncrement\",value:function handleIncrement(a){this.cartService.incrementQuantity(a),this.cartView.updateItem(this.cartService.getItem(a))}}]),a}();var cartService=new CartService;var cartView=new CartView;var Cart=/*#__PURE__*/function(){function a(b,c){_classCallCheck(this,a),this.cartView=c,this.cartService=b}return _createClass(a,[{key:\"setUpHandlerForItem\",value:function setUpHandlerForItem(a){var b=this,c=this.cartView.getLiElById(a);if(c){// DECREMENT HANDLER\nvar d=c.querySelector(\".cart__item__quantity-dec\");d.addEventListener(\"click\",function(c){b.handleDecrement(a,c)});// INCREMENT HANDLER\nvar e=c.querySelector(\".cart__item__quantity-inc\");e.addEventListener(\"click\",function(c){b.handleIncrement(a,c)})}}},{key:\"addItem\",value:function addItem(a){console.log(\"item\",a),this.cartService.addNewItem(a),this.cartView.addNewItem(a),this.cartView.updateCartCount(this.cartService.getItemsCount()),this.setUpHandlerForItem(a.id)}}]),a}();\n\n//# sourceURL=webpack://code-exercise/./lib/cart.js?");

/***/ }),

/***/ "./lib/header.js":
/*!***********************!*\
  !*** ./lib/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart */ \"./lib/cart.js\");\nvar cartBtn=document.getElementById(\"cart-btn\"),cart=document.getElementById(\"cart\"),cartOverlay=document.getElementById(\"cart-overlay\"),cartCloseIcon=document.getElementById(\"cart-close-icon\"),CART_VISIBLE_CLASS=\"cart--visible\";function removeScrollFromBody(){document.body.style.overflow=\"hidden\"}function addScrollToBody(){document.body.style.overflow=\"auto\"}cartBtn.addEventListener(\"click\",function(){cart.classList.toggle(CART_VISIBLE_CLASS),cart.classList.contains(CART_VISIBLE_CLASS)?removeScrollFromBody():addScrollToBody()}),cartOverlay.addEventListener(\"click\",function(){cart.classList.remove(CART_VISIBLE_CLASS),addScrollToBody()}),cartCloseIcon.addEventListener(\"click\",function(){cart.classList.remove(CART_VISIBLE_CLASS),addScrollToBody()});var cartController=new _cart__WEBPACK_IMPORTED_MODULE_0__.CartController(_cart__WEBPACK_IMPORTED_MODULE_0__.cartService,_cart__WEBPACK_IMPORTED_MODULE_0__.cartView);console.log(cartController);\n\n//# sourceURL=webpack://code-exercise/./lib/header.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./lib/header.js");
/******/ 	
/******/ })()
;