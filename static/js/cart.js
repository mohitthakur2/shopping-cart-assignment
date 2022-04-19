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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Cart\": () => (/* binding */ Cart),\n/* harmony export */   \"CartItem\": () => (/* binding */ CartItem),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,\"value\"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),Object.defineProperty(a,\"prototype\",{writable:!1}),a}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError(\"Cannot call a class as a function\")}var CartItem=/*#__PURE__*/_createClass(function b(a){var c=a.id,d=a.imgUrl,e=a.quantity,f=a.total,g=a.price,h=a.title;_classCallCheck(this,b),this.id=c,this.imgUrl=d,this.quantity=+e||1,this.price=+g,this.total=+f||+g,this.title=h});var CartService=/*#__PURE__*/function(){function a(){_classCallCheck(this,a),this.cartTotal=0,this.items=[]}return _createClass(a,[{key:\"setItems\",value:function setItems(a){this.items=a,this.updateCartToStorage()}},{key:\"getItem\",value:function getItem(a){var b=this.items.find(function(b){return b.id===a});return b?b:null}},{key:\"getItemsCount\",value:function getItemsCount(){return this.items.length}},{key:\"addNewItem\",value:function addNewItem(a){var b=new CartItem(a);this.items.push(b),this.updateCartToStorage()}},{key:\"isItemAlreadyAdded\",value:function isItemAlreadyAdded(a){return console.log(\"isItemAlreadyAdded\",a),console.log(JSON.stringify(this.items)),!!this.items.find(function(b){return b.id===a})}},{key:\"removeItem\",value:function removeItem(a){var b=this.items.findIndex(function(b){return b.id===a});-1<b&&this.items.splice(b,1),this.updateCartToStorage()}},{key:\"incrementQuantity\",value:function incrementQuantity(a){var b=this.items.find(function(b){return b.id===a});b&&(b.quantity++,this.updateItemTotal(a),console.log(this.items)),this.updateCartToStorage()}},{key:\"decrementQuantity\",value:function decrementQuantity(a){var b=this.items.find(function(b){return b.id===a});b&&0<b.quantity&&(b.quantity--,0<b.quantity&&this.updateItemTotal(a)),this.updateCartToStorage()}},{key:\"updateCartTotal\",value:function updateCartTotal(){this.cartTotal=this.items.reduce(function(a,b){a+=b.total},0)}},{key:\"updateItemTotal\",value:function updateItemTotal(a){var b=this.items.find(function(b){return b.id===a});console.log(b),b&&(b.total=b.quantity*b.price,this.updateCartTotal(),this.updateCartToStorage())}},{key:\"getCartTotal\",value:function getCartTotal(){var a=this.items.reduce(function(a,b){return a+=b.total},0);return console.log(\"total\",a),a}},{key:\"updateCartToStorage\",value:function updateCartToStorage(){localStorage.setItem(\"cartItems\",JSON.stringify(this.items))}},{key:\"getItemsFromStorage\",value:function getItemsFromStorage(){var a=localStorage.getItem(\"cartItems\");return a?JSON.parse(a):null}}]),a}(),CartView=/*#__PURE__*/function(){function a(){_classCallCheck(this,a),this.cartListEl=document.getElementById(\"cart-list\"),this.cartItemsCountEl=document.getElementById(\"cart-items-count\"),this.cartTotalEl=document.getElementById(\"cart-total\")}return _createClass(a,[{key:\"renderCartItems\",value:function renderCartItems(a){var b=this;this.cartListEl.innerHTML=\"\",console.log(\"items\",JSON.stringify(a)),a.forEach(function(a){console.log(\"item\",a);var c=b.getCartItemHtml(a);b.cartListEl.appendChild(c)})}},{key:\"getCartItemHtml\",value:function getCartItemHtml(a){var b=document.createElement(\"li\");return b.classList.add(\"cart__item\"),b.dataset.id=a.id,b.innerHTML=\"\\n            <img class=\\\"cart__item__img\\\" src=\\\"\".concat(a.imgUrl,\"\\\" alt=\\\"{\").concat(a.title,\"}\\\"></img>\\n            <div class=\\\"cart__item__product\\\">\\n                <h4 class=\\\"cart__item__title\\\">\").concat(a.title,\"</h4>\\n                <div class=\\\"cart__item__quantity-box\\\">\\n                    <button class=\\\"cart__item__quantity-dec\\\">&#45;</button>\\n                    <div class=\\\"cart__item__quantity\\\">\").concat(a.quantity,\"</div>\\n                    <button class=\\\"cart__item__quantity-inc\\\">&#43;</button>\\n                    <div class=\\\"cart__item__quantity-times\\\">&#10006;</div>\\n                    <div class=\\\"cart__item__quantity-price\\\">Rs.\").concat(a.price,\"</div>\\n                </div>\\n            </div>\\n            <div class=\\\"cart__item__total\\\">Rs.\").concat(a.total,\"</div>\\n        \"),b}},{key:\"updateItem\",value:function updateItem(a){var b=this.cartListEl.querySelector(\"[data-id=\\\"\".concat(a.id,\"\\\"\"));b&&(b.querySelector(\".cart__item__quantity\").textContent=a.quantity,b.querySelector(\".cart__item__total\").textContent=\"Rs.\".concat(a.total))}},{key:\"updateCartTotal\",value:function updateCartTotal(a){this.cartTotalEl.textContent=\"Rs.\".concat(a)}},{key:\"addNewItem\",value:function addNewItem(a,b,c){var d=this.getCartItemHtml(a),e=d.querySelector(\".cart__item__quantity-dec\");// DECREMENT HANDLER\ne.addEventListener(\"click\",function(){b(a.id)});// INCREMENT HANDLER\nvar f=d.querySelector(\".cart__item__quantity-inc\");f.addEventListener(\"click\",function(){c(a.id)}),this.cartListEl.appendChild(d)}},{key:\"getLiElById\",value:function getLiElById(a){var b=this.cartListEl.querySelector(\"[data-id=\\\"\".concat(a,\"\\\"\"));return b}},{key:\"removeItem\",value:function removeItem(a){var b=this.getLiElById(a);this.cartListEl.removeChild(b)}},{key:\"updateCartCount\",value:function updateCartCount(a){this.cartItemsCountEl.textContent=\"\".concat(a,\" Items\")}},{key:\"updateCartFooterButtonText\",value:function updateCartFooterButtonText(a){0<a?(document.getElementById(\"cart__footer__proceed-btn\").style.display=\"flex\",document.getElementById(\"cart__footer__start-shopping-btn\").style.display=\"none\"):(document.getElementById(\"cart__footer__proceed-btn\").style.display=\"none\",document.getElementById(\"cart__footer__start-shopping-btn\").style.display=\"block\")}}]),a}();var Cart=/*#__PURE__*/function(){function a(){_classCallCheck(this,a),this.cartView=new CartView,this.cartService=new CartService}return _createClass(a,[{key:\"initFromStorage\",value:function initFromStorage(){var a=this,b=this.cartService.getItemsFromStorage();console.log(\"cartItems\",b),b&&b.forEach(function(b){a.addItem(b)}),this.cartView.updateCartFooterButtonText(this.cartService.getItemsCount())}},{key:\"addItem\",value:function addItem(a){this.cartService.isItemAlreadyAdded(a.id)?(this.cartService.incrementQuantity(a.id),this.cartView.updateItem(this.cartService.getItem(a.id))):(this.cartService.addNewItem(a),this.cartView.addNewItem(a,this.handleDecrement.bind(this),this.handleIncrement.bind(this)),this.cartView.updateCartCount(this.cartService.getItemsCount()),console.log(\"after adding\",JSON.stringify(this.cartService.items))),this.cartView.updateCartTotal(this.cartService.getCartTotal()),this.cartView.updateCartFooterButtonText(this.cartService.getItemsCount())}},{key:\"handleDecrement\",value:function handleDecrement(a){this.cartService.decrementQuantity(a);var b=this.cartService.getItem(a);0<b.quantity?this.cartView.updateItem(this.cartService.getItem(a)):(this.cartService.removeItem(a),this.cartView.removeItem(a),this.cartView.updateCartCount(this.cartService.getItemsCount())),this.cartView.updateCartTotal(this.cartService.getCartTotal()),this.cartView.updateCartFooterButtonText(this.cartService.getItemsCount())}},{key:\"handleIncrement\",value:function handleIncrement(a){this.cartService.incrementQuantity(a),this.cartView.updateItem(this.cartService.getItem(a)),this.cartView.updateCartTotal(this.cartService.getCartTotal()),this.cartView.updateCartFooterButtonText(this.cartService.getItemsCount())}}]),a}();var cartService=new CartService,cartView=new CartView;window.cartController||(window.cartController=new Cart(cartService,cartView));// cartController.initFromStorage();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({addItem:function addItem(a){window.cartController.addItem(a)},initFromStorage:function initFromStorage(){window.cartController.initFromStorage()}});\n\n//# sourceURL=webpack://code-exercise/./lib/cart.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./lib/cart.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;